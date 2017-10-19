Ext.define('CEPLFront.store.InsuredStore', {
    extend: 'Ext.data.Store',
    //storeId: 'insuredStore',
    alias: 'store.insured',
    model: 'CEPLFront.model.User',

    proxy: {
        type: 'rest',
        url : 'http://192.168.43.142:8080/bimehtech/api/getAllUser',
        noCache: false,
        reader: {
            type: 'json'
        }
    },

    autoLoad: true,

});