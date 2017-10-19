Ext.define('CEPLFront.model.TestModel', {
    extend: 'Ext.data.Model',
    xtype: 'testModel',

    fields: [
        {name: 'os' , type: 'string'},
        {name: 'data1' , type: 'float'}
        // {name: 'userName' , type: 'string', reference: 'User'}
    ],

    belongsTo: 'User'
});