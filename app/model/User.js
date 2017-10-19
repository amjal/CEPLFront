Ext.define('CEPLFront.model.User', {
    extend: 'Ext.data.Model',
    xtype: 'userModel',

    fields: [
        {name: 'userName' , type: 'string'},
        {name: 'ID' , type: 'int'},
        {name: 'birthDate' , type: 'date'},
        {name: 'gender' , type: 'string'},
        {name: 'certificateYear' , type: 'date'}
    ]
});