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
        'Ext.data.proxy.Rest'
        // 'Ext.data.proxy.Rest'
    ],

    autoLoad: true,

    proxy: {
        type: 'rest',
        url:'http://192.168.110.103:8080/bimehtech/api/getMonthWeather',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});