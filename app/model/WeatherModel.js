/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.model.WeatherModel', {
    extend: 'Ext.data.Model',

    fields: [
        'weatherName', 'percent'
    ],

    // proxy: {
    //     type: 'rest',
    //     url : 'http://192.168.43.142:8080/bimehtech/api/getMonthWeather',
    //     reader:{
    //         type:'json'
    //     },
    //     noCache:true
    // }

});