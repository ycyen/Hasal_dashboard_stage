var windows10_gauge_data = {
    chart: {
        type: 'solidgauge',
        backgroundColor: '#1a1a1a'
    },

    title: null,

    pane: {
        center: ['50%', '100%'],
        size: '200%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:'#1a1a1a',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#ff0000'], // red
            [0.5, '#ffff00'], // yellow
            [0.9, '#00ff00']  // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 0,
        tickPixelInterval: 0,
        labels: {
            enabled: false
        },
        min: 0,
        max: 100,
        tickInterval: 0.01,
        tickWidth: 0
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'windows10', //code add here
        data: [46], // code add here
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}%</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>'
        },
        tooltip: {
            valueSuffix: ''
        }
    }]
};