/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.model.Month', {
    extend: 'Ext.data.Model',

    fields: [
        "countDayOfMonth",
        "countAllDay",
        "drivingTime",
        "averageSpeed",
        "distance",
        "violationTime",
        "month"
    ],

    proxy: {
        type: 'rest',
        url : 'http://192.168.110.103:8080/bimehtech/api/analyzeMonth',
        reader:{
            type:'json'
        },
        noCache:true
    }

});