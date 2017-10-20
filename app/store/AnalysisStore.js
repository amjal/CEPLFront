/**
 * Created by amir on 10/20/17.
 */
Ext.define('CEPLFront.store.AnalysisStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CEPLFront.model.Month'
    ],

    model: 'CEPLFront.model.Month',
    storeId:'analysisStoreId',
    alias:'store.analysisStore',
    proxy: {
        type: 'rest',
        url : 'http://192.168.110.103:8080/bimehtech/api/analyzeMonth',
        reader:{
            type:'json'
        }
    }
});