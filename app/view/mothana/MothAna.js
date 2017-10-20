/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.view.mothana.MothAna', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.model.Month',
        'CEPLFront.view.mothana.AnaylysisGrid',
        'CEPLFront.view.mothana.MothAnaController',
        'CEPLFront.view.mothana.MothAnaModel',
        'Ext.button.Button'
    ],

    xtype: 'mothana',

    viewModel: {
        type: 'mothana'
    },

    controller: 'mothana',

    items: [
        {
            xtype:'analysisGrid',
        },
        {
            xtype: "button",
            html:'نمایش',
            handler: function() {
                var store = Ext.getStore('analysisStoreId');
                Ext.Ajax.request({
                    url : 'http://192.168.110.103:8080/bimehtech/api/analyzeMonth',
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