Ext.define('CEPLFront.model.User', {
    extend: 'Ext.data.Model',
    xtype: 'userModel',

    fields: [
        {name: 'certificateYear' , type: 'date'},
        {name: 'email' , type: 'string'},
        {name: 'educationGrade' , type: 'float'},
        {name: 'nationalid' , type: 'string'}
    ],

    proxy: {
        type: 'rest',
        url : 'http://192.168.43.142:8080/bimehtech/api/getAllUser',
        reader:{
            type:'json'
        },
        noCache:true
    }
});