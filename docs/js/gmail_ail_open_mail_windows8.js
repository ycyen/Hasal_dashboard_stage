var gmail_ail_open_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_open_mail_windows8'
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Asynchronize Input latency (ms)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ms'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    // Define the data points. All series have a dummy year
    // of 1970/7/1 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
		name: 'firefox',
		data: [
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 4), 255.560000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 211.110000],
			[Date.UTC(2017, 8, 6), 211.110000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 255.560000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 10), 222.220000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 222.220000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 211.110000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 188.890000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 9), 166.670000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 11), 177.780000],
			[Date.UTC(2017, 8, 11), 177.780000],
			[Date.UTC(2017, 8, 11), 188.890000],
		]    }]
}