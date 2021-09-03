// Ext.QuickTips.init();
// Ext.QuickTips.enable();
//
//
// Ext.apply(Ext.form.VTypes, {
//     Nospace: function(v) {
//         return /^[^\s]*$/i.test(v);
//     },
//     NospaceText: "Must not contain spaces",
//     NospaceMask: /[^\s]/i
// });



panel8 = new Ext.Panel({
    title: 'Задание 8',
    listeners: {
        scope: this,
        activate: function (a) {
            console.log('activate');
            a.doLayout();
        }
    },
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            autoHeight: true,
            padding: 10,
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                color: 'green'
            },
            html: [
                '<p>Работа с формами</p>',
                'Добавить форму, с полями для ввода, фио, пароля, имейла и описания. Все поля обязательны для ввода',
                'Ниже кнопка субмит, при нажатии на нее с формы берутся все данны и отображаются ниже в виде текста'
            ].join('<br/>')
        }, {
            xtype: 'form',
            id: 'form8',
            title: 'Form Layout',
            bodyStyle: 'padding:15px',
            width: 350,
            defaultType: 'textfield',
            defaults: {
                width: 230,
                msgTarget: 'side'
            },
            items: [{
                id: 'first',
                fieldLabel: 'First Name',
                name: 'first',
                allowBlank: false,
                labelSeparator: ':', // override labelSeparator layout config
                monitorValid:true,
                // vtype: 'Nospace',
                // validator: function(v) {
                //     if (v === "abc") {
                //         return "No abc's.";
                //     }
                //     return true;
                // }
            },{
                id: 'last',
                fieldLabel: 'Last Name',
                name: 'last',
                allowBlank: false,
                monitorValid:true
            },{
                id: 'email',
                fieldLabel: 'Email',
                name: 'email',
                vtype:'email',
                allowBlank: false,
                monitorValid:true
            },{
                id: 'pass',
                fieldLabel: 'Password',
                name: 'password',
                allowBlank: false,
                monitorValid:true
            }, {
                id: 'textarea',
                xtype: 'textarea',
                hideLabel: true,     // override hideLabels layout config
                name: 'msg',
                anchor: '100% -53',
                allowBlank: false,
                monitorValid:true
            }
            ],
            buttons: [
                {
                    text: 'Save',
                    formBind: true,
                    handler: function () {
                        Ext.getCmp('form8').getForm().isValid();
                        var data = Ext.getCmp('form8').getForm().getValues();
                        var text = data['first'] + ' ' + data['last'] + ' ' + data['email'] + ' ' + data['password'] + ' ' + data['msg'];
                        //debugger;
                        // console.log(data);
                        // console.log(text);
                        if (Ext.getCmp('form8').getForm().isValid() === true) {
                            Ext.getCmp('textpanel8').update(text);
                        }
                    }
                },
                {text: 'Cancel'}
            ],
            layoutConfig: {
                labelSeparator: '~' // superseded by assignment below
            },
            // config options applicable to container when layout='form':
            hideLabels: false,
            labelAlign: 'left',   // or 'right' or 'top'
            labelSeparator: ':', // takes precedence over layoutConfig value
            labelWidth: 65,       // defaults to 100
            labelPad: 8           // defaults to 5, must specify labelWidth to be honored
        },{
            xtype: 'panel',
            id: 'textpanel8',
            width: 75,
            html: '.'
        }]
});