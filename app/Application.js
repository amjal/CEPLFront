/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('CEPLFront.Application', {
    extend: 'Ext.app.Application',

    name: 'TutorialApp',
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
        var loggedIn = localStorage.getItem("loggedIn");
        alert(loggedIn);
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    }
});


