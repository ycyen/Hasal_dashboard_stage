"""

Usage:
  publisher.py [--query] [--deploy] [--localhost] [--debug]
  publisher.py (-h | --help)

Options:
  -h --help                 Show this screen.
  --query                   Query data from Treeherder
  --deploy                  Automatically deploy to Github every 5 minutes
  --localhost               Automatically deploy locally every 5 minutes
  --debug                   Log in debug level
"""

import datetime
import time

from docopt import docopt

from lib.common.logConfig import get_logger
from lib.common.processcallConfig import call_subprocess
from pages.dashboard import Dashboard

DEPLOY_TIME_INTERVAL = 30  # mins


class Publisher(object):
    def __init__(self, enable_advance):
        self.__github_username = ''
        self.__github_token = ''
        self.dashboard = Dashboard(enable_advance)

        # init logger
        self.logger = get_logger(__file__, enable_advance)

    def __load_github_accout(self):
        github_config = 'github.key'
        with open(github_config, 'r') as f:
            self.__github_username = f.readline().strip()
            self.__github_token = f.readline().strip()

    def __commit_push_to_github(self):
        """ commit and push to github """
        print "Start commit and push to github ..."
        cmd = 'git add ./docs/*'
        call_subprocess(cmd)

        cmd = 'git commit -m \'auto deploy on {}\''.format(datetime.datetime.now().strftime('%H:%M:%S'))
        call_subprocess(cmd)

        _u = self.__github_username
        _k = self.__github_token
        cmd = 'git push https://{}:{}@github.com/ycyen/Hasal_dashboard_stage.git master'.format(_u, _k)
        call_subprocess(cmd)
        print "Git push to MK success"

        # cmd = 'git push https://{}:{}@github.com/Mozilla-TWQA/Hasal_dashboard.git master'.format(_u, _k)
        # call_subprocess(cmd)
        # print "Git push to TWQA success"

    def __wait_for_next_query(self, rest_minutes):
        division = 5
        self.logger.info("Time to sleep")
        interval = rest_minutes / division
        for i in range(division):
            self.logger.info("{} mins left...".format(rest_minutes - i * interval))
            time.sleep(60 * interval)

    def single_run(self, query):
        self.logger.info("\n===============\n* Single mode *\n===============")
        self.dashboard.run(query)

    def githubio_mode(self):
        self.logger.info("\n===============\n* Github mode *\n===============")
        """ gen website and push to github automatically """
        self.__load_github_accout()
        while True:
            self.dashboard.run(True)
            self.__commit_push_to_github()
            self.__wait_for_next_query(DEPLOY_TIME_INTERVAL)

    def local_mode(self):
        self.logger.info("\n==============\n* Local mode *\n==============")
        while True:
            self.dashboard.run(True)
            self.__wait_for_next_query(DEPLOY_TIME_INTERVAL)


def main():
    arguments = docopt(__doc__)
    publisher = Publisher(arguments['--debug'])

    # run in different mode
    if arguments['--deploy']:
        publisher.githubio_mode()
    elif arguments['--localhost']:
        publisher.local_mode()
    else:
        publisher.single_run(arguments['--query'])


if __name__ == '__main__':
    main()
