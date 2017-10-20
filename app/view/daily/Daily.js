/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.view.daily.Daily', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.view.daily.DailyController',
        'CEPLFront.view.daily.DailyGrid',
        'Ext.button.Button'
    ],


    controller: 'daily',
    xtype: 'dailyView',

    items: [
        {
            xtype:'dailyGrid',
        },
        {
            xtype: "button",
            html:'نمایش',
            handler: function() {
                var store = Ext.getStore('dailyStore');
                Ext.Ajax.request({
                    url : 'http://192.168.110.103:8080/bimehtech/api/analyzeDay',
                    success: function(){
                        store.load();
                    },
                    failure: function(){
                    }
                });
            }
        }
    ]
});