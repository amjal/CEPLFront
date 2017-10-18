/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.ranking.Ranking', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.view.ranking.RankingModel',
		'CEPLFront.view.ranking.RankingController'
    ],

    xtype: 'ranking',

    viewModel: {
        type: 'ranking'
    },

    controller: 'ranking',

    items: [
        /* include child components here */
    ]
});