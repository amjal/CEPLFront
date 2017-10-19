/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('CEPLFront.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'CEPLFront.view.login.Login',
        'CEPLFront.view.main.Main'
    ],

    name: 'TutorialApp',
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
        var loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn == "true")
            Ext.create('CEPLFront.view.main.Main');
        else
            Ext.create('CEPLFront.view.login.Login');
    }
});


