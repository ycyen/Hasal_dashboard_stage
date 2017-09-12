#!/bin/bash

virtualenv -p python2.7 ~/.dashboardenv
source ~/.dashboardenv/bin/activate
pip install -r requirements.txt
