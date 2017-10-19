Ext.define('CEPLFront.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    requires: [
        'CEPLFront.model.Person'
    ],

    model:'CEPLFront.model.Person',
    storeId:'personnelStore',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'rest',
        url:'personnel.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
