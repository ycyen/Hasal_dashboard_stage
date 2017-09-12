import os
import datetime
from lib.common.sutieConfig import *
from lib.common.nameConfig import *
from lib.common.logConfig import get_logger


def to_date(daytime):
    return datetime.datetime.strptime(daytime, "%Y-%m-%d %H-%M-%S-000000").strftime("%Y-%m-%d")


def print_row(count, date, _s, _m, _b, mis, outfile):
    outfile.write('<tr>')
    outfile.write('<td>{}</td>'.format(count))
    outfile.write('<td>{}</td>'.format(date))
    outfile.write('<td>{}</td>'.format(_s))
    outfile.write('<td>{}</td>'.format(_m))
    outfile.write('<td>{}</td>'.format(_b))
    outfile.write('<td>{}</td>'.format(mis))
    outfile.write('</tr>')


class PendingList(object):
    def __init__(self, dashboard, enable_advance):
        self.dashboard = dashboard
        self.outfile = os.path.join(BUILD_DIR, 'pending_list.html')
        self.template = './template/pending_list.html'
        self.goal_number = 6

        # init logger
        self.logger = get_logger(__file__, enable_advance)

    def __write_row(self, outfile):
        count = 1
        for i in range(1, self.dashboard.queryRange // 86400):
            _d = (datetime.datetime.today() - datetime.timedelta(days=i)).strftime("%Y-%m-%d")
            for _s in task_schedule.keys():
                for _m in MACHINE_SET:
                    for _b in BROWSER_SET:
                        if _d in self.dashboard.count_ds[_s][_m][_b].keys():
                            pending = self.goal_number - self.dashboard.count_ds[_s][_m][_b][_d]
                        else:
                            pending = 6

                        if pending > 0:
                            print_row(count, _d, _s, _m, _b, pending, outfile)
                            count += 1

    def create_page(self):
        """ create the index html for dashboard """
        with open(self.outfile, 'w') as outfile, open(self.template, 'r') as infile:
            for row in infile:
                if '<!--rows go here-->' in row:
                    self.__write_row(outfile)
                else:
                    outfile.write(row)
