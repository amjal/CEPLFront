/**
 * Created by sarb on 10/18/17.
 */
//TODO model alias
Ext.define('CEPLFront.view.insuredSearch.InsuredSearch', {
    extend: 'Ext.panel.Panel',

    requires: [
        'CEPLFront.view.insuredSearch.InsuredSearchModel',
		'CEPLFront.view.insuredSearch.InsuredSearchController',
        'Ext.layout.container.VBox',
        'Ext.rtl.*'
    ],
    layout: {
        type:'vbox',
        pack: 'start',
        align: 'stretch'
    },
    xtype: 'insuredSearch',
    id:'insuredSearchId',
    rtl:true,

    controller: 'insuredsearch',

    bodyPadding:10,
    items: [{
        title: "جست و جوی بیمه گذار",
        x: 50,
        y: 50,
        items:[{
            xtype: 'fieldset',
            title: 'مشخصات را وارد کنید',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'نام بیمه گذار',
                    name: 'searchWithName',
                    listeners: {
                        focus: 'onFieldSelected'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'شناسه بیمه گذار',
                    name:'searchWithId'
                }
            ]
        }
        ,{
                xtype: 'button',
                iconCls: 'x-fa fa-search',
                text: 'جست و جو',
                scale: 'medium',
                listeners:{
                    click:'searchClicked'
                }
            }
        ]
    }
    ]
});
