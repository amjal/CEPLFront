/**
 * Created by amir on 10/19/17.
 */
Ext.define('CEPLFront.model.Person', {
    extend: 'Ext.data.Model',
    alias:'model.person',
    fields: ['id', 'username', 'birthDate','gender','certificateYear','email','education','nationalid']
})