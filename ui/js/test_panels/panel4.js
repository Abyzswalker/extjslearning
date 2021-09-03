panel4 = new Ext.Panel({
    title: 'Задание 4',
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
                '<p>Работа с датапикером</p>',
                'Сделать выбор даты. После выбора даты отображать ниже результат',
                'в датапикере отрбражать дату в формате 27.04.2020 а результат',
                'отображать в формате Y-m-d'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            items: [{
                xtype: 'datefield',
                id: 'datefield1',
                format: 'd.m.y',
                listeners: {
                    select: function (picker, date) {
                        var click = Ext.getCmp('datefield1').getValue();
                        var nd = new Date (click);
                        var dt = nd.format('Y-m-d');
                        Ext.getCmp('textpanel4').update(click);
                        Ext.getCmp('datefield2').setValue(dt)
                    }
                }
            }, {
                xtype: 'datefield',
                id: 'datefield2',
                format: 'Y-m-d'
            }, {
                xtype: 'panel',
                id: 'textpanel4',
                html: []
            }]
        }
    ]
});