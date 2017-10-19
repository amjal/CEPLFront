/**
 * Created by amir on 10/19/17.
 */
Ext.define('CEPLFront.model.UserLoginModel', {
    extend: 'Ext.data.Model',

    fields: ['username','password', 'role'],

    proxy: {
        type: 'rest',
        url : 'http://192.168.43.142:8080/api/login',
        reader:{
            type:'json'
        },
        noCache:true
    }
});