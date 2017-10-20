/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.ranking.RankingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ranking',


    init: function() {

    },
    
    onItemSelected: function () {

        //alert('dasfjdsa');
        //Ext.Msg.confirm('Confirm', 'مطمئنید؟', 'onConfirm', this);
        // Ext.create({
        //     xtype: 'popup'
        // });
    },

    onEditClicked: function () {

    },

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