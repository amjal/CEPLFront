/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.store.TestStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mobile-os',
    model: 'CEPLFront.model.TestModel',

    //fields: ['os', 'data1' ],
    data: [
        { os: 'Android', data1: 61.3 },
        { os: 'BlackBerry', data1: 8.7 },
        { os: 'iOS', data1: 17.9 },
        { os: 'Windows Phone', data1: 10.2 },
        { os: 'Others', data1: 1.9 }
    ]
});