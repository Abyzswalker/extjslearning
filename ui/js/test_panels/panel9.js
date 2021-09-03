panel9 = new Ext.Panel({
    title: 'Задание 9',
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
                'Сделать форму с 2 радиобатона, 2 чекбокса, 2 текстовых поля и 1 комбобокс',
                'Ниже кнопка загрузить, при нажатии на нее с сервера грузятся данные и подставляются в форму'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //layout: 'column',
            //html: 'Тут решение'
            items: [{
                xtype: 'form',
                id: 'form9',
                title: 'Form Layout',
                bodyStyle: 'padding:15px',
                width: 350,
                defaultType: 'textfield',
                defaults: {
                    width: 230,
                    msgTarget: 'side'
                },
                items: [{
                    fieldLabel: 'Radio',
                    xtype: 'radiogroup',
                    id: 'radio9',
                    items: [{
                        name: 'radio',
                        inputValue: '1',
                        boxLabel: '1',
                        //checked: true
                    },{
                        name: 'radio',
                        inputValue: '2',
                        boxLabel: '2'
                    }]
                },{
                    fieldLabel: 'Checkbox',
                    xtype: 'checkboxgroup',
                    id: 'checkbox9',
                    items: [{
                        name: '1',
                        boxLabel: '1',
                        inputValue: '1'
                        //checked: true
                    }, {
                        name: '2',
                        boxLabel: '2',
                        inputValue: '2'
                    }]
                },{
                    id: 'name9',
                    fieldLabel: 'Name',
                    name: 'name',
                    allowBlank: false,
                    //monitorValid:true
                },{
                    id: 'age9',
                    fieldLabel: 'Age',
                    name: 'age',
                    allowBlank: false,
                    //monitorValid:true
                }, {
                    xtype: 'combo',
                    id: 'combo9',
                    fieldLabel: "",
                    mode: 'remote',
                    store: new Ext.data.Store({
                        proxy: new Ext.data.HttpProxy({url: "api.php"}),
                        baseParams: {param1: '1'},
                        reader: new Ext.data.JsonReader(
                            {root: 'data', totalProperty: 'total', id: 'id'},
                            ['id', 'name', 'age']
                        ),
                        remoteSort: true,
                        autoLoad: false
                    }),
                    listeners: {
                        'select': function(combo, record) {
                        }, scope: this
                    },
                    valueField:'id',
                    displayField:'name',
                    pageSize: this.pageSize,
                    allowBlank: true,
                    anchor: '100%',
                    minChars: 0
                }
                ],
                buttons: [
                    {
                        text: 'Load',
                        formBind: true,
                        handler: function () {
                            var combo9 = Ext.getCmp('combo9');
                            var store9 = combo9.getStore()
                            //var form = Ext.getCmp('form9').getForm().getValues();
                            var id = combo9.getValue();
                            var record = store9.getById(id);

                            Ext.getCmp('name9').setValue(record['data']['name']);
                            Ext.getCmp('age9').setValue(record['data']['age']);
                            Ext.getCmp('radio9').setValue(id);
                            Ext.getCmp('checkbox9').setValue(id);

                            //console.log(record);
                        }
                    },
                    //{text: 'Cancel'}
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
            }]
        }
    ]
});