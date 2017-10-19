/**
 * Created by sarb on 10/8/17.
 */
Ext.define('CEPLFront.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'CEPLFront.model.UserLoginModel'
    ],

    onLoginClick: function ()
    {
        var loginModel=Ext.create('CEPLFront.model.UserLoginModel',{
            username: Ext.getCmp('userField').value,
            password: Ext.getCmp('passField').value,
            role: "agent"
        });
        loginModel.save({
                success: function (response, opts) {
                var responseTxt = JSON.parse(response.responseText);

                if (responseTxt.logged === true)
                {

                    localStorage.setItem("loggedIn", true);

                    Ext.getCmp('loginPage').destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });

                }
                else
                {
                    console.log("wrong username or password!!");
                }
                },

                failure: function (response, opts)
                {
                    //TODO wrong user pass
                }
        });
    }
});
