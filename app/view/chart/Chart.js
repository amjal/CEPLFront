/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.view.chart.Chart', {
    extend: 'Ext.Panel',
    xtype: 'weatherChart',

    requires: [
        'CEPLFront.store.WeatherStore',
        'CEPLFront.view.chart.ChartController',
        'Ext.chart.PolarChart',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.series.Pie',
        'Ext.toolbar.Fill'
    ],


    controller: 'chartController',

    width: 650,

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    items: [{
        xtype: 'polar',
        reference: 'chart',
        captions: {
            title: 'Donut Charts - Basic',
            credits: {
                text: 'Data: IDC Predictions - 2017\n' +
                'Source: Internet',
                align: 'left'
            }
        },
        width: '100%',
        height: 500,
        innerPadding: 20,
        store: {
            type: 'weather'
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate', 'itemhighlight'],
        series: [{
            type: 'pie',
            angleField: 'percent',
            donut: 50,
            label: {
                field: 'weatherName',
                display: 'outside'
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
});