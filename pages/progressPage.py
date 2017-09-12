import os
import datetime
from lib.common.nameConfig import *
from shutil import copyfile
from lib.common.logConfig import get_logger
from lib.common.sutieConfig import *


def get_suite_status(count):
    color = {'Error': '#ff0000', 'OK': '#33cc33', 'Pending': '#ffff00'}
    standard = 6
    if count >= standard:
        status = 'OK'
    elif standard > count > 0:
        status = 'Pending'
    else:
        status = 'Error'
    return status, color[status]


class ProgressPage(object):
    def __init__(self, dashboard, enable_advance):
        self.dashboard = dashboard

        # init logger
        self.logger = get_logger(__file__, enable_advance)

        self.img_set = ["d2_bkg.jpg", "d1_bkg.jpg", "d3_bkg.jpg", "d4_bkg.jpg", "d5_bkg.jpg"]

    def copy_img(self):
        for img in self.img_set:
            copyfile(os.path.join(TEMPLATE_DIR, IMG_DIR, img), os.path.join(BUILD_DIR, IMG_DIR, img))

    def print_work_prgress_row(self, outfile):
        _rt = self.dashboard.ref_date
        sk_set = ["youtube", "gmail", "gdoc", "amazon", "gsearch", "facebook"]

        for _sk in sk_set:
            print_sk = True
            _rows = len(suite_contain[_sk])
            s_set = sorted(suite_contain[_sk], key=lambda x: task_schedule[x][0])

            for i in range(len(s_set)):
                outfile.write('<tr>')
                if print_sk:
                    outfile.write('<td rowspan="{}">{}</td>'.format(_rows, _sk.capitalize()))
                    print_sk = False

                # print trigger time
                for j in range(len(task_schedule[s_set[i]])):
                    _tt = task_schedule[s_set[i]][j]
                    _tth = _tt[:2]
                    _ttm = _tt[2:]
                    outfile.write('<td>{}:{}</td>'.format(_tth, _ttm))

                # print suite name also check if execute
                outfile.write('<td style="text-align: left">{}</td>'.format(task_dict[s_set[i]]))

                # win7 and win10
                for _m in MACHINE_SET:
                    # firefox and chrome
                    for _b in BROWSER_SET:

                        # get count
                        if _rt in self.dashboard.count_ds[s_set[i]][_m][_b].keys():
                            _val = self.dashboard.count_ds[s_set[i]][_m][_b][_rt]
                        else:
                            _val = 0

                        # print status
                        st, col = get_suite_status(_val)
                        outfile.write('<td style="color: {}">{} ({})</td>'.format(col, st, _val))
                outfile.write('</tr>')

    def create_page(self):
        self.copy_img()
        copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, 'daily_progress.css'), os.path.join(
            BUILD_DIR, CSS_DIR, 'daily_progress.css'))

        suites_out = os.path.join(BUILD_DIR, 'daily_progress_all.html')
        suites_template = './template/daily_progress_all.html'
        with open(suites_out, 'w') as outfile, open(suites_template, 'r') as infile:
            for row in infile:
                if '<!--rows go here-->' in row:
                    self.print_work_prgress_row(outfile)
                elif '{{REFRESH_TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{REFRESH_TIME}}', '{}'.format(now)))

                elif '{{LATEST_DATA_TIME}}' in row:
                    ref_date = self.dashboard.ref_date
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(ref_date))
                else:
                    outfile.write(row)
