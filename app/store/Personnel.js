Ext.define('CEPLFront.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    requires: [
        'CEPLFront.model.Person',
        'Ext.data.proxy.Rest'
    ],

    model:'CEPLFront.model.Person',
    storeId:'personnelStore',

    proxy: {
        type: 'rest',
        url:'http://192.168.110.103:8080/bimehtech/api/getAllUser',
        reader: {
            type: 'json'
        }
    }
});
