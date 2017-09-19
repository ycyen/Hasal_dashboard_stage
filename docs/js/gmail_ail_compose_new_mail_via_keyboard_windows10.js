var gmail_ail_compose_new_mail_via_keyboard_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows10'
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
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 266.670000],
			[Date.UTC(2017, 8, 12), 433.330000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 255.560000],
			[Date.UTC(2017, 8, 13), 155.560000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 211.110000],
			[Date.UTC(2017, 8, 14), 211.110000],
			[Date.UTC(2017, 8, 14), 211.110000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 255.560000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 233.330000],
			[Date.UTC(2017, 8, 15), 255.560000],
			[Date.UTC(2017, 8, 15), 255.560000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 477.780000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 233.330000],
			[Date.UTC(2017, 8, 16), 233.330000],
			[Date.UTC(2017, 8, 16), 244.440000],
			[Date.UTC(2017, 8, 16), 255.560000],
			[Date.UTC(2017, 8, 16), 255.560000],
			[Date.UTC(2017, 8, 16), 255.560000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 233.330000],
			[Date.UTC(2017, 8, 17), 222.220000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 244.440000],
			[Date.UTC(2017, 8, 18), 266.670000],
			[Date.UTC(2017, 8, 18), 266.670000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 19), 200.000000],
			[Date.UTC(2017, 8, 19), 211.110000],
			[Date.UTC(2017, 8, 19), 311.110000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 11), 188.890000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 133.330000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 155.560000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 166.670000],
			[Date.UTC(2017, 8, 15), 166.670000],
			[Date.UTC(2017, 8, 15), 188.890000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 16), 144.440000],
			[Date.UTC(2017, 8, 16), 155.560000],
			[Date.UTC(2017, 8, 16), 166.670000],
			[Date.UTC(2017, 8, 16), 166.670000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 17), 144.440000],
			[Date.UTC(2017, 8, 17), 155.560000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 19), 133.330000],
			[Date.UTC(2017, 8, 19), 133.330000],
			[Date.UTC(2017, 8, 19), 133.330000],
		]    }]
}