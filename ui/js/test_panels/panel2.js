panel2 = new Ext.Panel({
    title: 'Задание 2',
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
                '<p>Работа с комбобоксами</p>',
                'Сделать комбобокс (1) со store type=local,и поместить в нее несколько записей. Справа от комбо сделать кнопку, при ее нажатии в комбо будет добавлятся новая запись',
                'Сделать комбобокс (2) со store type=remote и справа от него кнопка (обновить)',
                'В комбобокс (2) грузятся данные с сервера (любые, тестовые) по нажатию кнопки обновить'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            layout: {
                type: 'hbox'
            },
            //html: 'Тут решение'
            items: [{
                xtype: 'combo',
                id: 'combo',
                mode: 'local',
                store: new Ext.data.ArrayStore ({
                    storeId: 'myStore',
                    id: 0,
                    fields: [
                        'myId',
                        'displayText'
                    ],
                    data: [[1, 'test1'], [2, 'test2']]
                }),
                valueField: 'myId',
                displayField: 'displayText',
                triggerAction: 'all'
            }, {
                xtype: 'button',
                text: 'Добавить',
                width: 70,
                height: 30,
                handler: function () {
                    var data = [['3', 'test3']];
                    Ext.getCmp('combo').getStore().add(data)
                }
            }]
        }
    ]
});