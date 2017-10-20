Ext.define('CEPLFront.store.InsuredStore', {
    extend: 'Ext.data.Store',
    //storeId: 'insuredStore',
    alias: 'store.insured',

    requires: [
        'CEPLFront.model.User',
        'Ext.data.proxy.Rest'
    ],

    model: 'CEPLFront.model.User',

    proxy: {
        type: 'rest',
        url : 'http://192.168.110.103:8080/bimehtech/api/getAllUser',
        noCache: false,
        reader: {
            type: 'json'
        }
    },

    autoLoad: true,

});