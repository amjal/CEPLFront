/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.view.daily.DailyGrid', {
    extend: 'Ext.grid.Panel',
    xtype:'dailyGrid',

    requires: [
        'CEPLFront.store.AnalysisDaily',
    ],

    store:{
        type:'dailyStore'
    },
    columns:[
        {text:'تعداد سفر های رانندگی در روز', dataIndex:"count", flex: 2},
        {text:'زمان رانندگی', dataIndex:"drivingTime", flex:2},
        {text:'سرعت متوسط', dataIndex:"averageSpeed", flex:1},
        {text:'مسافت طی شده', dataIndex:"distance", flex:1},
        {text:'زمان تخلف', dataIndex:"violationTime", flex:1},
        {text:'تاریخ', dataIndex:"date", flex:1}
    ]
});