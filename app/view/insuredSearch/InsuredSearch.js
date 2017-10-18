/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.insuredSearch.InsuredSearch', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.view.insuredSearch.InsuredSearchModel',
		'CEPLFront.view.insuredSearch.InsuredSearchController'
    ],

    xtype: 'insuredSearch',

    viewModel: {
        type: 'insuredsearch'
    },

    controller: 'insuredsearch',

    items: [
        /* include child components here */
    ]
});