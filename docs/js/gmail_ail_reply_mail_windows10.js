var gmail_ail_reply_mail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows10'
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
			[Date.UTC(2017, 8, 11), 5.560000],
			[Date.UTC(2017, 8, 12), 322.220000],
			[Date.UTC(2017, 8, 12), 288.890000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 13), 300.000000],
			[Date.UTC(2017, 8, 13), 322.220000],
			[Date.UTC(2017, 8, 13), 333.330000],
			[Date.UTC(2017, 8, 13), 266.670000],
			[Date.UTC(2017, 8, 13), 288.890000],
			[Date.UTC(2017, 8, 13), 311.110000],
			[Date.UTC(2017, 8, 14), 300.000000],
			[Date.UTC(2017, 8, 14), 311.110000],
			[Date.UTC(2017, 8, 14), 433.330000],
			[Date.UTC(2017, 8, 14), 311.110000],
			[Date.UTC(2017, 8, 14), 311.110000],
			[Date.UTC(2017, 8, 14), 322.220000],
			[Date.UTC(2017, 8, 15), 233.330000],
			[Date.UTC(2017, 8, 15), 266.670000],
			[Date.UTC(2017, 8, 15), 266.670000],
			[Date.UTC(2017, 8, 15), 277.780000],
			[Date.UTC(2017, 8, 15), 277.780000],
			[Date.UTC(2017, 8, 15), 300.000000],
			[Date.UTC(2017, 8, 15), 300.000000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 11), 166.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 177.780000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 12), 433.330000],
			[Date.UTC(2017, 8, 13), 144.440000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 355.560000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 266.670000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 211.110000],
			[Date.UTC(2017, 8, 14), 255.560000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 188.890000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 15), 166.670000],
			[Date.UTC(2017, 8, 15), 166.670000],
			[Date.UTC(2017, 8, 15), 177.780000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 233.330000],
		]    }]
}