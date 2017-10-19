/**
 * Created by amir on 10/19/17.
 */
Ext.define('CEPLFront.model.UserLoginModel', {
    extend: 'Ext.data.Model',
    xtype:'userLoginModel',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {name:'username',type:'string'},
        {name:'password',type:'string'},
        {name:'role',type:'string'}
        ],
    proxy: {
        type: 'rest',
        url : 'http://192.168.43.142:8080/api/login',
        reader:{
            type:'json'
        },
        noCache:false
    }
});