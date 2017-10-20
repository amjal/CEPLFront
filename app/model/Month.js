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
        "month",
        "point"
    ]

});