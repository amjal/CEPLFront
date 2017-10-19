/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.view.chart.Chart', {
    extend: 'Ext.Panel',
    xtype: 'pie-donut',

    requires: [
        'CEPLFront.store.TestStore',
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
            type: 'mobile-os'
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate', 'itemhighlight'],
        series: [{
            type: 'pie',
            angleField: 'data1',
            donut: 50,
            label: {
                field: 'os',
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