panel1 = new Ext.Panel({
    title: 'Задание 1',
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
                '<p>Динамическое создание кнопок.</p>',
                'Добавить кнопку, при нажатии на которую, внизу будет появлятся такая же кнопка.',
                'При этом нажатая кнопка деактивируется через 3 секунды после нажатия'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение',
            items: [{
                id: 'btn',
                xtype: 'button',
                text: 'Кнопка',
                handler: function () {
                    Ext.getCmp('btn2').setVisible(true)
                    window.setTimeout(function() {
                        Ext.getCmp('btn').setDisabled(true)
                    }, 3000);
                }
            }, {
                id: 'btn2',
                xtype: 'button',
                text: 'Кнопка 2',
                hidden: true,
            }]
        }
    ]
});