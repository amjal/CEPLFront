/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.view.chart.ChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chartController',

    onPreview: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookup('chart');
        chart.preview();
    },

    onDataRender: function (v) {
        return v + '%';
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    }
});