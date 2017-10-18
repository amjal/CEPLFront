/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.insuredSearch.InsuredSearch', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.view.insuredSearch.InsuredSearchModel',
		'CEPLFront.view.insuredSearch.InsuredSearchController',
        'Ext.layout.container.Absolute',
        'Ext.rtl.*'
    ],
    layout:'absolute',
    xtype: 'insuredSearch',
    rtl:true,

    viewModel: {
        type: 'insuredsearch'
    },

    controller: 'insuredsearch',

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
                        focus: function () {
                            alert("hello");
                        }
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
                scale: 'medium'
            }
        ]
    }
    ]
});
