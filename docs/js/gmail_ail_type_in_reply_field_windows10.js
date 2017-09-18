var gmail_ail_type_in_reply_field_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_type_in_reply_field_windows10'
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
			[Date.UTC(2017, 8, 12), 11.110000],
			[Date.UTC(2017, 8, 12), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 44.440000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 33.330000],
			[Date.UTC(2017, 8, 16), 33.330000],
			[Date.UTC(2017, 8, 16), 33.330000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 17), 22.220000],
			[Date.UTC(2017, 8, 17), 44.440000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 5.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 12), 77.780000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 15), 5.560000],
			[Date.UTC(2017, 8, 16), 11.110000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
		]    }]
}