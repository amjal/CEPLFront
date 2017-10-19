/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.store.WeatherStore', {
    extend: 'Ext.data.Store',

    storeId: 'weatherStore',

    extend: 'Ext.data.Store',
    alias: 'store.weather',

    model: 'CEPLFront.model.WeatherModel',

    requires: [
        'CEPLFront.model.WeatherModel',
        // 'Ext.data.proxy.Rest'
    ],

    // data: [
    //     { weatherName: 'Android', percent: 61.3 },
    //     { weatherName: 'BlackBerry', percent: 8.7 },
    //     { weatherName: 'iOS', percent: 17.9 },
    //     { weatherName: 'Windows Phone', percent: 10.2 },
    // ],
    autoLoad: true,

    proxy: {
        type: 'rest',
        url:'http://192.168.43.142:8080/bimehtech/api/getMonthWeather',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});