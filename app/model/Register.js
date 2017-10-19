Ext.define('CEPLFront.model.Register', {
    extend: 'Ext.data.Model',
    xtype: 'registerModel',

    fields: [
        {name: 'userName' , type: 'string'},
        {name: 'national_id' , type: 'int'},
        {name: 'passWord' , type: 'string'},
        {name: 'gender' , type: 'string'},
        {name: 'certificateYear' , type: 'date'},
        {name: 'birthDate' , type: 'date'},
        {name: 'job' , type: 'string'},
        {name: 'email' , type: 'string'},
        {name: 'education' , type: 'string'}
    ]

});