Ext.define('CEPLFront.model.User', {
    extend: 'Ext.data.Model',
    xtype: 'userModel',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    fields: [
        "id",
        "username",
        "birthDate",
        "gender",
        "certificateYear",
        "email",
        "education",
        "nationalid",
    ],

    // proxy: {
    //     type: 'rest',
    //     url: 'http://192.168.43.142:8080/bimehtech/api/getAllUser',
    //     reader: {
    //         type: 'json'
    //     },
    //     noCache: true
    // }
});