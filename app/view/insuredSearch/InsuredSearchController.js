/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.insuredSearch.InsuredSearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.insuredsearch',
    statics:{
        showingGrid:false
    },
    requires: [
        'CEPLFront.view.main.List'
    ],

    searchClicked:function(){
        if(!CEPLFront.view.insuredSearch.InsuredSearchController.showingGrid) {
            var list = Ext.create('CEPLFront.view.main.List');
            Ext.getCmp('insuredSearchId').add(list);
            CEPLFront.view.insuredSearch.InsuredSearchController.showingGrid = true;
        }
        var store = Ext.getStore('personnelStore');
        Ext.Ajax.request({
            url: 'http://192.168.110.103:8080/bimehtech/api/getAllUser',
            success: function(){
                store.load();
            },
            failure: function(){
            }
        });
    }
});