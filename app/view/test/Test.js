/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.test.Test', {
    extend: 'Ext.Container',

    xtype: 'test',


    requires: [
        'CEPLFront.view.test.TestModel',
		'CEPLFront.view.test.TestController',
        'Ext.panel.Panel'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'test',
    */

    controller: 'test',

    //model: 'CEPLFront.model.Register',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    viewModel: {
        type: 'test'
    },


    items: [
        /* include child components here */
        {
            xtype: 'panel',
            frame: true,
            title: 'ثبت نام',
            bodyPadding: 10,
            scrollable:true,
            width: 355,


            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 115,
                msgTarget: 'side'
            },

            items: [{
                xtype: 'fieldset',
                title: 'اطلاعات حساب',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

                items: [
                    { allowBlank:false, fieldLabel: 'نام کاربری', name: 'userName', emptyText: 'user id', reference: 'userName' },
                    { allowBlank:false, fieldLabel: 'رمز عبور', name: 'passWord', emptyText: 'password', reference: 'passWord', inputType: 'password' },
                    { allowBlank:false, fieldLabel: 'National ID', name: 'national_id', reference: 'national_id', emptyText: 'national id' }
                ]
            }, {
                xtype: 'fieldset',
                title: 'اطلاعات شخصی',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

                items: [{
                    fieldLabel: 'پست الکترونیکی',
                    name: 'email',
                    reference: 'email',
                    vtype: 'email'
                }, {
                    fieldLabel: 'شغل',
                    name: 'job',
                    reference: 'job'
                }, {
                    fieldLabel: 'تحصیلات',
                    name: 'education',
                    reference: 'education'
                },{
                    xtype: 'radiogroup',
                    fieldLabel: 'جنسیت',
                    name: 'gender',
                    reference: 'gender',
                    items: [
                        {boxLabel: 'مرد', inputValue: 'man' },
                        {boxLabel: 'زن', inputValue: 'woman'}
                    ]
                }, {
                    xtype: 'datefield',
                    fieldLabel: 'تاریخ گواهی نامه',
                    name: 'certificateYear',
                    reference: 'certificate_year',
                    allowBlank: false,
                    maxValue: new Date()
                }, {
                    xtype: 'datefield',
                    fieldLabel: 'تاریخ تولد',
                    name: 'birthDate',
                    reference: 'birth_date',
                    allowBlank: false,
                    maxValue: new Date()
                }]
            }],

            buttons: [{
                text: 'ثبت',
                //disabled: true,
                formBind: true,
                listeners: {
                    click: 'onRegisterClick'
                }
            }]
        }
    ]
});

