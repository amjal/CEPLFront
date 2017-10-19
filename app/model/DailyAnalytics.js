/**
 * Created by sarb on 10/19/17.
 */
Ext.define('CEPLFront.model.DailyAnalytics', {
    extend: 'Ext.data.Model',

    fields: [
        'tripDate',
        'tripPeriod',
        'aveSpeed',
        'distance',
        'road',
        'violationTime',
        'weather'
    ]

});