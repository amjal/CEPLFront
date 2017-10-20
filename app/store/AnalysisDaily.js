/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.store.AnalysisDaily', {
    extend: 'Ext.data.Store',

    requires: [
        'CEPLFront.model.DailyModel',
        'Ext.data.proxy.Rest'
    ],

    model: 'CEPLFront.model.DailyModel',
    storeId:'dailyStore',
    alias:'store.dailyStore',
    proxy: {
        type: 'rest',
        url : 'http://192.168.110.103:8080/bimehtech/api/analyzeDay',
        reader:{
            type:'json'
        }
    }
});