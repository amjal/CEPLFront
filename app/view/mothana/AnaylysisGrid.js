/**
 * Created by amir on 10/20/17.
 */
Ext.define('CEPLFront.view.mothana.AnaylysisGrid', {
    extend: 'Ext.grid.Panel',
    xtype:'analysisGrid',

    requires: [
        'CEPLFront.store.AnalysisStore'
    ],

    store:{
        type:'analysisStore'
    },
    columns:[
        {text:'تعداد روز های رانندگی در ماه', dataIndex:"countDayOfMonth"},
        {text:'تعداد کل روز های رانندگی', dataIndex:"countAllDay"},
        {text:'سرعت متوسط', dataIndex:"averageSpeed"},
        {text:'مسافت طی شده', dataIndex:"distance"},
        {text:'زمان تخلف', dataIndex:"violationTime"},
        {text:'ماه', dataIndex:"month"}
    ]
});