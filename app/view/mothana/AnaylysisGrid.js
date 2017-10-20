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
        {text:'تعداد روز های رانندگی در ماه', dataIndex:"countDayOfMonth", flex: 2},
        {text:'تعداد کل روز های رانندگی', dataIndex:"countAllDay", flex:2},
        {text:'سرعت متوسط', dataIndex:"averageSpeed", flex:1},
        {text:'مسافت طی شده', dataIndex:"distance", flex:1},
        {text:'زمان تخلف', dataIndex:"violationTime", flex:1},
        {text:'ماه', dataIndex:"month", flex:1},
        {text:'امتیاز', dataIndex:"point", flex:1},
    ]
});