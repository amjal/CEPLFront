/**
 * Created by sarb on 10/20/17.
 */
Ext.define('CEPLFront.view.mothana.MothAna', {
    extend: 'Ext.Container',

    requires: [
        'CEPLFront.model.Month',
        'CEPLFront.view.mothana.MothAnaController',
        'CEPLFront.view.mothana.MothAnaModel',
        'Ext.button.Button'
    ],

    xtype: 'mothana',

    viewModel: {
        type: 'mothana'
    },

    controller: 'mothana',

    items: [
        {
            xtype: "button",
            handler: function() {
                var modell = Ext.create('CEPLFront.model.Month');

                modell.load({
                    failure: function(record, operation) {
                        // do something if the load failed
                    },
                    success: function(record, operation) {
                        var obj = JSON.parse(operation._response.responseText);
                        console.log(obj);
                    },
                    callback: function(record, operation, success) {
                        // do something whether the load succeeded or failed
                    }
                });
            }
        }
    ]
});