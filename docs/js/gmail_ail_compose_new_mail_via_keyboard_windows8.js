var gmail_ail_compose_new_mail_via_keyboard_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows8'
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
			[Date.UTC(2017, 9, 24), 222.220000],
			[Date.UTC(2017, 9, 24), 244.440000],
			[Date.UTC(2017, 9, 24), 255.560000],
			[Date.UTC(2017, 9, 25), 222.220000],
			[Date.UTC(2017, 9, 25), 222.220000],
			[Date.UTC(2017, 9, 25), 233.330000],
			[Date.UTC(2017, 9, 25), 233.330000],
			[Date.UTC(2017, 9, 25), 244.440000],
			[Date.UTC(2017, 9, 25), 244.440000],
			[Date.UTC(2017, 9, 25), 255.560000],
			[Date.UTC(2017, 9, 25), 266.670000],
			[Date.UTC(2017, 9, 25), 266.670000],
			[Date.UTC(2017, 9, 25), 266.670000],
			[Date.UTC(2017, 9, 25), 277.780000],
			[Date.UTC(2017, 9, 25), 277.780000],
			[Date.UTC(2017, 9, 25), 288.890000],
			[Date.UTC(2017, 9, 25), 288.890000],
			[Date.UTC(2017, 9, 25), 288.890000],
			[Date.UTC(2017, 9, 25), 288.890000],
			[Date.UTC(2017, 9, 25), 288.890000],
			[Date.UTC(2017, 9, 25), 311.110000],
			[Date.UTC(2017, 9, 30), 188.890000],
			[Date.UTC(2017, 9, 30), 200.000000],
			[Date.UTC(2017, 9, 30), 200.000000],
			[Date.UTC(2017, 9, 30), 200.000000],
			[Date.UTC(2017, 9, 30), 211.110000],
			[Date.UTC(2017, 9, 30), 211.110000],
			[Date.UTC(2017, 9, 30), 211.110000],
			[Date.UTC(2017, 9, 30), 211.110000],
			[Date.UTC(2017, 9, 30), 222.220000],
			[Date.UTC(2017, 9, 30), 222.220000],
			[Date.UTC(2017, 9, 30), 222.220000],
			[Date.UTC(2017, 9, 30), 222.220000],
			[Date.UTC(2017, 9, 30), 222.220000],
			[Date.UTC(2017, 9, 30), 222.220000],
			[Date.UTC(2017, 9, 30), 233.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 24), 122.220000],
			[Date.UTC(2017, 9, 24), 122.220000],
			[Date.UTC(2017, 9, 24), 133.330000],
			[Date.UTC(2017, 9, 25), 111.110000],
			[Date.UTC(2017, 9, 25), 111.110000],
			[Date.UTC(2017, 9, 25), 111.110000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 122.220000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 25), 133.330000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 122.220000],
			[Date.UTC(2017, 9, 30), 133.330000],
			[Date.UTC(2017, 9, 30), 133.330000],
			[Date.UTC(2017, 9, 30), 133.330000],
			[Date.UTC(2017, 9, 30), 133.330000],
			[Date.UTC(2017, 9, 30), 133.330000],
			[Date.UTC(2017, 9, 30), 133.330000],
		]    }]
}