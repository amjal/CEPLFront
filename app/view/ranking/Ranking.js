/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.ranking.Ranking', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.view.ranking.RankingModel',
		'CEPLFront.view.ranking.RankingController',
        'CEPLFront.store.InsuredStore',
        'Ext.data.StoreManager',
        'Ext.grid.Panel'
    ],

    xtype: 'ranking',

    viewModel: {
        type: 'ranking'
    },

    controller: 'ranking',

    items: [
        /* include child components here */
        {
            xtype: 'fieldset',
            title: 'رتبه بندی ها',
            items: [
                {
                    xtype: 'grid',
                    // store: Ext.data.StoreManager.lookup('insuredStore'),
                    scrollable: true,
                    frame: true,
                    store: {
                        type: 'insured'
                    },
                    columns: [
                        { text: 'Name', dataIndex: 'userName' , flex: 2 },
                        { text: 'Gender', dataIndex: 'gender', flex: 1 },
                        { text: 'BirthDay', dataIndex: 'birthDate' , flex: 3 }
                    ],
                    height: 300,
                    width: 1000
                }
            ]
        }

    ]
});