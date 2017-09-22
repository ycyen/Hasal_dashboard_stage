var gmail_ail_reply_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows8'
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
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 9), 266.670000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 277.780000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 244.440000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 11), 244.440000],
			[Date.UTC(2017, 8, 11), 255.560000],
			[Date.UTC(2017, 8, 11), 266.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 155.560000],
			[Date.UTC(2017, 8, 10), 133.330000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 122.220000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 155.560000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 144.440000],
		]    }]
}