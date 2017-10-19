Ext.define('CEPLFront.store.InsuredStore', {
    extend: 'Ext.data.Store',
    //storeId: 'insuredStore',
    alias: 'store.insured',
    model: 'CEPLFront.model.User',

    // data: [
    //     { userName: 'عباس' , gender: 'مرد'},
    //     { userName: 'سکینه' , gender: 'زن'},
    //     { userName: 'اصغر' , gender: 'مرد'}
    // ]

    proxy: {
        type: 'rest',
        url : 'http://192.168.110.103:8080/bimehtech/api/getAlltrips',
        noCache: false,
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }

});