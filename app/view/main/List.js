/**
 * This view is an example list of people.
 */
Ext.define('CEPLFront.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id:'searchListId',
    requires: [
        'CEPLFront.store.Personnel',
        'Ext.plugin.Viewport'
    ],

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'نام',  dataIndex: 'name' },
        { text:'ایمیل', dataIndex: 'email', flex: 1 },
        { text: 'شماره تلفن', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
