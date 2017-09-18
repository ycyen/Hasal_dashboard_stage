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
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 366.670000],
			[Date.UTC(2017, 8, 15), 377.780000],
			[Date.UTC(2017, 8, 15), 433.330000],
			[Date.UTC(2017, 8, 15), 577.780000],
			[Date.UTC(2017, 8, 15), 111.110000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 288.890000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 16), 155.560000],
			[Date.UTC(2017, 8, 16), 255.560000],
			[Date.UTC(2017, 8, 16), 288.890000],
			[Date.UTC(2017, 8, 16), 344.440000],
			[Date.UTC(2017, 8, 16), 400.000000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 455.560000],
			[Date.UTC(2017, 8, 17), 122.220000],
			[Date.UTC(2017, 8, 17), 133.330000],
			[Date.UTC(2017, 8, 17), 711.110000],
			[Date.UTC(2017, 8, 17), 122.220000],
			[Date.UTC(2017, 8, 17), 122.220000],
			[Date.UTC(2017, 8, 17), 133.330000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 322.220000],
			[Date.UTC(2017, 8, 18), 511.110000],
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
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 388.890000],
			[Date.UTC(2017, 8, 15), 533.330000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 16), 200.000000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 233.330000],
			[Date.UTC(2017, 8, 16), 244.440000],
			[Date.UTC(2017, 8, 16), 466.670000],
			[Date.UTC(2017, 8, 16), 200.000000],
			[Date.UTC(2017, 8, 16), 333.330000],
			[Date.UTC(2017, 8, 17), 200.000000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 17), 244.440000],
			[Date.UTC(2017, 8, 17), 244.440000],
			[Date.UTC(2017, 8, 17), 255.560000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 244.440000],
			[Date.UTC(2017, 8, 18), 300.000000],
			[Date.UTC(2017, 8, 18), 388.890000],
		]    }]
}