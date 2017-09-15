var gsearch_ail_select_image_cat_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows10'
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
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 13), 277.780000],
			[Date.UTC(2017, 8, 13), 377.780000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 277.780000],
			[Date.UTC(2017, 8, 13), 288.890000],
			[Date.UTC(2017, 8, 13), 788.890000],
			[Date.UTC(2017, 8, 14), 366.670000],
			[Date.UTC(2017, 8, 14), 377.780000],
			[Date.UTC(2017, 8, 14), 400.000000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 177.780000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 366.670000],
			[Date.UTC(2017, 8, 15), 377.780000],
			[Date.UTC(2017, 8, 15), 433.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 12), 155.560000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 288.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 433.330000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 388.890000],
		]    }]
}