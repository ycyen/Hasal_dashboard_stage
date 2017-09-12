"""

Check reference time (rt) in range t1 and t2
t1, t2 must be in form HHMM. (ex. 1030 for 10:30)
rt has the same form of HHMM or input "now" as local time.

"""
import datetime


def in_time_range(t1, t2, rt):
    _t1 = datetime.time(int(t1[:2]), int(t1[2:]))
    _t2 = datetime.time(int(t2[:2]), int(t2[2:]))
    if rt == 'now':
        now_hm = datetime.datetime.now().strftime("%H%M")
        _rt = datetime.time(int(now_hm[:2]), int(now_hm[2:]))
    else:
        _rt = datetime.time(int(rt[:2]), int(rt[2:]))

    if _t1 > _t2:
        if _t1 <= _rt and _rt <= datetime.time(23, 59):
            ret = True
        elif datetime.time(0, 0) <= _rt and _rt < _t2:
            ret = True
        else:
            ret = False
    else:
        if _t1 <= _rt and _rt < _t2:
            ret = True
        else:
            ret = False
    return ret
