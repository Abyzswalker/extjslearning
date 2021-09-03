panel3 = new Ext.Panel({
    title: 'Задание 3',
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
                '<p>Работа с чекбоксами и радиобатонами</p>',
                'Создать 3 радиобатона и 4 чекбокса. Все это как-то обернуть в fieldset. Внизу сделать кнопку',
                'При нажатии на кнопку, снизу от нее отображать текстом какие радио и чекбоксы сейчас нажаты,',
                'а какие не нажаты. Текст должне быть в виде: чекбокс №1 - нажат или чекбокс№2 - не нажат',
                'Придумать красивое решение, чтоб работало на неопределенное кол-во чекбоксов и радиобатонов'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            items: [{
                xtype: 'form',
                items: [{
                        xtype:'fieldset',
                        columnWidth: 0.5,
                        title: 'Fieldset 1',
                        collapsible: true,
                        autoHeight:true,
                        defaults: {
                            anchor: '-20' // leave room for error icon
                        },
                        defaultType: 'textfield',
                        items :[{
                            fieldLabel: 'Radio',
                            xtype: 'radiogroup',
                            id: 'radio',
                            items: [{
                                name: 'radio',
                                inputValue: '1',
                                boxLabel: '1',
                                checked: true
                            },{
                                name: 'radio',
                                inputValue: '2',
                                boxLabel: '2'
                            },{
                                name: 'radio',
                                inputValue: '3',
                                boxLabel: '3'
                            }]
                        }, {
                            fieldLabel: 'Checkbox',
                            xtype: 'checkboxgroup',
                            id: 'checkbox',
                            items: [{
                                name: '1',
                                boxLabel: '1',
                                checked: true
                            }, {
                                name: '2',
                                boxLabel: '2',
                            }, {
                                name: '3',
                                boxLabel: '3',
                            }, {
                                name: '4',
                                boxLabel: '4',
                            }]
                        }]
                    },{
                        xtype:'button',
                        text: 'Обновить',
                        width: 70,
                        height: 30,
                        listeners: {
                           click: function (button, panel) {
                               var selectedRadio = [];
                               var selectedRadio2 = [];
                               var itemsRadio = Ext.query("#radio .x-form-check-wrap");
                               for (var r = 0; r < itemsRadio.length; r++) {
                                   var itemRadio = itemsRadio[r];
                                   var inputRadio = Ext.query("input", itemRadio)[0];
                                   if (inputRadio.checked) {
                                       var labelRadio = Ext.query("label", itemRadio)[0];
                                       selectedRadio.push(labelRadio.innerHTML);
                                   } else {
                                       var labelRadio2 = Ext.query("label", itemRadio)[0];
                                       selectedRadio2.push(labelRadio2.innerHTML);
                                   }
                               }
                               var selectedCheck = [];
                               var selectedCheck2 = [];
                               var itemsCheck = Ext.query("#checkbox .x-form-check-wrap");
                               for (var i = 0; i < itemsCheck.length; i++) {
                                   var itemCheck = itemsCheck[i];
                                   var inputCheck = Ext.query("input", itemCheck)[0];
                                   if (inputCheck.checked) {
                                       var labelCheck = Ext.query("label", itemCheck)[0];
                                       selectedCheck.push(labelCheck.innerHTML);
                                   } else {
                                       var labelCheck2 = Ext.query("label", itemCheck)[0];
                                       selectedCheck2.push(labelCheck2.innerHTML);
                                   }
                               }
                            Ext.getCmp('textpanel3').update('Радио нажаты - ' + selectedRadio + ' Радио не нажаты ' + selectedRadio2 + ' Кнопки нажаты ' + selectedCheck + ' Кнопки не нажаты ' + selectedCheck2);
                        }
                    }
                }, {
                    xtype: 'panel',
                    id: 'textpanel3',
                    html: ''
                }]
            }]
        }
    ]
});