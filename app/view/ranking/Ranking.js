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
    scrollable: true,


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
                        { text: 'Name', dataIndex: 'userName' , flex: 1 },
                        { text: 'Gender', dataIndex: 'gender', flex: 1 }
                    ],
                    height: 300,
                    width: 1000,

                    listeners: {
                        select: 'onItemSelected'
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'اطلاعات فرد انتخاب شد',
            items: [
                {
                    xtype: 'polar',
                    reference: 'chart',
                    captions: {
                        title: 'Donut Charts - Basic',
                        credits: {
                            text: 'Data: IDC Predictions - 2017\n' +
                            'Source: Internet',
                            align: 'left'
                        }
                    },
                    width: '100%',
                    height: 500,
                    innerPadding: 20,
                    store: {
                        type: 'mobile-os'
                    },
                    legend: {
                        docked: 'bottom'
                    },
                    interactions: ['rotate', 'itemhighlight'],
                    series: [{
                        type: 'pie',
                        angleField: 'data1',
                        donut: 50,
                        label: {
                            field: 'os',
                            display: 'outside'
                        },
                        highlight: true,
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
                        }
                    }]
                }
            ]
        }

    ]
});