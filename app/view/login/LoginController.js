/**
 * Created by sarb on 10/8/17.
 */
Ext.define('CEPLFront.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function ()
    {

        Ext.Ajax.request({
            url: 'https://ghiac.ir/bimehtech/api/login',

            method: 'POST',

            params: {
                ajax_req: Ext.util.JSON.encode({
                    username: 'test',
                    password: 'test',
                    role: "user"
                })
            },

            success: function (response, opts)
            {
                var obj = Ext.decode(response.responseText);

                // console.dir(obj);

                if (obj.Status === true)
                {
                    console.log("logged in!" + response);

                    localStorage.setItem("loginLoggedIn", true);

                    this.getView().destroy();
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
                // console.log('server-side failure with status code ' + response.status);
                console.log("error!");
            }
        });
    }

    // onLoginClick: function ()
    // {
    //     // Set the localStorage value to true
    //     localStorage.setItem("loggedIn", true);
    //
    //     // Remove Login Window
    //     this.getView().destroy();
    //
    //     // Add the main view to the viewport
    //     Ext.create({
    //         xtype: 'app-main'
    //     });
    // }
<<<<<<< HEAD
});
=======
});
>>>>>>> dc2ad05d07cabffae507100f592cd0873400de44
