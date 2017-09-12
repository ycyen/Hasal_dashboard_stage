import sys
import subprocess


def call_subprocess(cmd):
    ret_code = subprocess.call(cmd, shell=True)
    if ret_code != 0:
        sys.exit(ret_code)
