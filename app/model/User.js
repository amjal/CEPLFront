Ext.define('CEPLFront.model.User', {
    extend: 'Ext.data.Model',
    xtype: 'userModel',

    fields: [
        {name: 'userName' , type: 'string'},
        {name: 'ID' , type: 'int'},
        {name: 'birthDate' , type: 'date'},
        {name: 'gender' , type: 'string'},
        {name: 'tripDate' , type: 'date'},
        {name: 'tripPeriod' , type: 'float'},
        {name: 'aveSpeed' , type: 'float'},
        {name: 'distance' , type: 'float'},
        {name: 'road' , type: 'string'},
        {name: 'violationTime' , type: 'date'},
        {name: 'weather' , type: 'string'}
    ],

    proxy: {
        type: 'rest',
        url : 'http://192.168.43.142:8080/bimehtech/api/getMonthWeather',
        reader:{
            type:'json'
        },
        noCache:true
    }
});