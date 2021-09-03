var myStore = new Ext.data.ArrayStore ({
        storeId: 'myStore',
        fields: [
            'id',
            'name'
        ],
        data: [[1, 'test1'], [2, 'test2']],
    });


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
            layout: 'hbox',
            items: [{
                xtype: 'combo',
                id: 'combo',
                mode: 'local',
                store: myStore,
                valueField: 'id',
                displayField: 'name',
                triggerAction: 'all',
            }, {
                xtype: 'button',
                text: 'Добавить',
                width: 70,
                height: 30,
                handler: function () {
                    var id = myStore.getTotalCount()
                    var data = Ext.getCmp('combo').getValue();
                    var rec = new Ext.data.Record({id: id++, name:data});

                    myStore.add(rec);
                }
            }]
        }, {
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                xtype: 'combo',
                id: 'combo2',
                fieldLabel: "",
                mode: 'remote',
                store: new Ext.data.Store({
                    proxy: new Ext.data.HttpProxy({url: "api.php"}),
                    baseParams: {param1: 1},
                    reader: new Ext.data.JsonReader(
                        {root: 'data', totalProperty: 'total', id: 'id'},
                        ['id', 'name']
                    ),
                    remoteSort: true,
                    autoLoad: false
                }),
                listeners: {
                    'select': function(combo, record) {
                    }, scope: this,
                    'beforequery': function (evt) {
                        evt.combo.query = null
                    }
                },
                valueField:'id',
                displayField:'name',
                pageSize: this.pageSize,
                allowBlank: true,
                anchor: '100%',
                minChars: 0,
                triggerAction: 'all'
            }, {
                xtype: 'button',
                text: 'Обновить',
                width: 70,
                height: 30,
                handler: function (btn) {
                     // var combo = panel.findByType('combo')[0];
                        var combo = Ext.getCmp('combo2');
                        if (combo) {
                            var store = combo.getStore();
                            console.log(combo)
                            store.baseParams.block_id = 123;
                            store.load({params: {param1: 2}});
                            //console.error("combo=", combo.getStore());
                        }
                    }
            }]
        }
    ]
});
