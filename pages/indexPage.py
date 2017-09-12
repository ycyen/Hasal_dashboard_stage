import os
from lib.common.nameConfig import *
from lib.common.logConfig import get_logger


class IndexPage(object):
    def __init__(self, dashboard, enable_advance, ):
        self.dashboard = dashboard
        self.set_page_dict = dict()

        # init logger
        self.logger = get_logger(__file__, enable_advance)

    def create_page(self, set_page_dict):
        """ create the index html for dashboard """
        self.set_page_dict = set_page_dict

        index_out = os.path.join(BUILD_DIR, 'index.html')
        index_template = './template/index.html'
        with open(index_out, 'w') as outfile, open(index_template, 'r') as infile:
            for row in infile:
                if '<!--windows8-64 here-->' in row:
                    outfile.write('\t<h1>windows8</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows8-64'
                    for set_name in sorted(self.set_page_dict[m].keys()):
                        outfile.write(
                            '\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(
                                self.set_page_dict[m][set_name], set_name, m))
                    outfile.write('\t</table>\n')
                elif '<!--windows10-64 here-->' in row:
                    outfile.write('\t<h1>windows10</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows10-64'
                    for set_name in sorted(self.set_page_dict[m].keys()):
                        outfile.write(
                            '\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(
                                self.set_page_dict[m][set_name], set_name, m))
                    outfile.write('\t</table>\n')
                else:
                    outfile.write(row)
