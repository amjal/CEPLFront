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
        'CEPLFront.store.Personnel',
        'CEPLFront.view.main.List'
    ],

    /**
     * Called when the view is created
     */
    searchClicked:function(){
        if(!CEPLFront.view.insuredSearch.InsuredSearchController.showingGrid) {
            var list = Ext.create('CEPLFront.view.main.List');
            Ext.getCmp('insuredSearchId').add(list);
            CEPLFront.view.insuredSearch.InsuredSearchController.showingGrid = true;
        }else {
            var personnelStore = Ext.getStore('personnelStore');
            personnelStore.load()
        }

    }
});