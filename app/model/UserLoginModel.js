/**
 * Created by amir on 10/19/17.
 */
Ext.define('CEPLFront.model.UserLoginModel', {
    extend: 'Ext.data.Model',

    fields: ['username','password', 'role'],

    proxy: {
        type: 'rest',
        url : '',
        reader:{
            type:'json'
        },
        noCache:true
    }
});