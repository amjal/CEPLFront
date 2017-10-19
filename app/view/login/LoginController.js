/**
 * Created by sarb on 10/8/17.
 */
Ext.define('CEPLFront.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'CEPLFront.model.UserLoginModel',
        'CEPLFront.view.main.Main'
    ],
    onLoginClick: function () {
        /*var u = this.lookupReference('username').getValue();
        var p = this.lookupReference('password').getValue();
        var loginModel = Ext.create('CEPLFront.model.UserLoginModel',{
            username:u,
            password:p,
            role: 'agent'
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
        });*/
        Ext.getCmp('loginPage').destroy();
        Ext.create({
            xtype: 'app-main'
        });
        
    }
});
