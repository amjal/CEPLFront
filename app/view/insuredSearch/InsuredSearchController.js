/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.insuredSearch.InsuredSearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.insuredsearch',

    requires: [
        'CEPLFront.view.main.List'
    ],

    /**
     * Called when the view is created
     */
    searchClicked:function(){
        Ext.create('CEPLFront.view.main.List');
    }
});