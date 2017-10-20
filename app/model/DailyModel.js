/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.model.DailyModel', {
    extend: 'Ext.data.Model',

    fields: [
        "count",
        "drivingTime",
        "averageSpeed",
        "distance",
        "violationTime",
        "date"
    ]
});