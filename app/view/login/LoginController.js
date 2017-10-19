/**
 * Created by amir on 10/19/17.
 */
Ext.define('CEPLFront.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'CEPLFront.model.UserLoginModel',
        'CEPLFront.view.main.Main'
    ],

    /**
     * Called when the view is created
     */
    onLoginClick:function(){
        var p = this.lookupReference('password').getValue();
        var u = this.lookupReference('username').getValue();
        var model = Ext.create('CEPLFront.model.UserLoginModel',{
            username:u,
            password:p,
            role:'agent'
        });
        model.save({
            success:function(){
                this.getView().destroy();
                localStorage.setItem('loggedIn',true);
                Ext.create('CEPLFront.view.main.Main');
            },
            failure:function(){

            }
        })
    }
});