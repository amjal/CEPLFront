/**
 * Created by sarb on 10/18/17.
 */
Ext.define('CEPLFront.view.test.TestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.test',

    requires: [
        'CEPLFront.model.Register'
    ],

    init: function ()
    {

    },

    onRegisterClick: function ()
    {
        var username = this.lookupReference('userName').getValue();
        var password = this.lookupReference('passWord').getValue();
        var nationalid = this.lookupReference('national_id').getValue();
        var emailid = this.lookupReference('email').getValue();
        var work = this.lookupReference('job').getValue();
        var educate = this.lookupReference('education').getValue();
        var gen = this.lookupReference('gender').getValue();
        var certificateyear = this.lookupReference('certificate_year').getValue();
        var birthdate = this.lookupReference('birth_date').getValue();

        var model = Ext.create('CEPLFront.model.Register', {
            userName: username,
            national_id: nationalid,
            passWord: password,
            gender: gen,
            certificateYear: certificateyear,
            birthDate: birthdate,
            education: educate,
            job: work,
            email: emailid
        });
        model.save();

    }

});