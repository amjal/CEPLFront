/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CEPLFront.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    rtl: true,
    plugins: 'viewport',

    requires: [
        'CEPLFront.view.chart.Chart',
        'CEPLFront.view.main.List',
        'CEPLFront.view.main.MainController',
        'CEPLFront.view.main.MainModel',
        'Ext.button.Button',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],

    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'خروج',
            align: 'right',
            margin: '10 0',
            padding: '1 30',
            handler: 'onLogoutButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'جستوجوی بیمه گذار',
        iconCls: 'fa-search',
        xtype: 'insuredSearch'
    }, {
        title: 'رتبه بندی',
        iconCls: 'fa-trophy',
        xtype: 'ranking'

    }, {
        title: 'تست...',
        iconCls: 'fa-tint',
        xtype: 'test'
    }, {
        title: 'نمودار',
        iconCls: 'fa-area-chart',
        xtype: 'pie-donut'
    }]
});
