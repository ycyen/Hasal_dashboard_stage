var gsearch_ail_type_searchbox_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_type_searchbox_windows10'
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
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 211.110000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 14), 177.780000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 177.780000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 44.440000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 16), 11.110000],
			[Date.UTC(2017, 8, 16), 11.110000],
			[Date.UTC(2017, 8, 16), 200.000000],
			[Date.UTC(2017, 8, 16), 211.110000],
			[Date.UTC(2017, 8, 16), 22.220000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 11.110000],
			[Date.UTC(2017, 8, 16), 88.890000],
			[Date.UTC(2017, 8, 17), 200.000000],
			[Date.UTC(2017, 8, 17), 211.110000],
			[Date.UTC(2017, 8, 17), 22.220000],
			[Date.UTC(2017, 8, 17), 200.000000],
			[Date.UTC(2017, 8, 17), 266.670000],
			[Date.UTC(2017, 8, 17), 266.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 311.110000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 14), 155.560000],
			[Date.UTC(2017, 8, 14), 155.560000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 177.780000],
			[Date.UTC(2017, 8, 15), 188.890000],
			[Date.UTC(2017, 8, 15), 44.440000],
			[Date.UTC(2017, 8, 15), 166.670000],
			[Date.UTC(2017, 8, 15), 166.670000],
			[Date.UTC(2017, 8, 16), 155.560000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 17), 5.560000],
		]    }]
}