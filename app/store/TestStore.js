/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.store.TestStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mobile-os',
    model: 'CEPLFront.model.TestModel',

    //fields: ['os', 'data1' ],
    data: [
        { os: 'آفتابی', data1: 61.3 },
        { os: 'ابری', data1: 8.7 },
        { os: 'بارانی', data1: 17.9 },
        { os: 'برفی', data1: 10.2 },
        { os: 'یخبندان', data1: 1.9 }
    ]
});