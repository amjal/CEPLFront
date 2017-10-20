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
        { text: 'شناسه',  dataIndex: 'id' },
        { text:'نام کاربری', dataIndex: 'username', flex: 1 },
        { text: 'تاریخ تولد', dataIndex: 'birthDate', flex: 1 },
        { text: 'جنسیت', dataIndex: 'gender', flex: 1 },
        { text: 'تاریخ صدور', dataIndex: 'certificateYear', flex: 1 },
        { text: 'ایمیل', dataIndex: 'email', flex: 1 },
        { text: 'تحصیلات', dataIndex: 'education', flex: 1 },
        { text: 'شماره ملی', dataIndex: 'nationalid', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
