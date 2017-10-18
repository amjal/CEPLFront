/**
 * Created by sarb on 10/8/17.
 */
Ext.define('CEPLFront.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'CEPLFront.view.login.LoginController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.plugin.Viewport'
    ],

    // plugins: 'viewport',

    controller: 'login',
    bodyPadding: 10,
    title: 'ورود',
    closable: false,
    autoShow: true,

    rtl: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'نام کاربری',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'رمز عبور',
            allowBlank: false
        }],
        buttons: [{
            text: 'ورود',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});