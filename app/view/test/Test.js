/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.test.Test', {
    extend: 'Ext.Container',

    xtype: 'test',

    requires: [
        'CEPLFront.view.test.TestModel',
		'CEPLFront.view.test.TestController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'test',
    */

    viewModel: {
        type: 'test'
    },

    controller: 'test',

    items: [
        /* include child components here */
    ]
});