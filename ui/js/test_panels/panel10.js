panel10 = new Ext.Panel({
    title: 'Задание 10',
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
                '<p>Работа с табпанелом</p>',
                'Добавить табпанел с 3мя табами, последний панел задизейбленный',
                'При переключении на 2й активировать 3й таб. При переходе на 3й таб, задизейблить 1й таб'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            items: [{
                xtype: 'tabpanel',
                id: 'tabpanel10',
                activeTab: 0,
                items: [{
                    title: 'Tab 1',
                    id: 'tab1',
                    html: 'A simple tab'
                },{
                    title: 'Tab 2',
                    id: 'tab2',
                    html: 'Another one',
                    listeners: {
                        activate: function () {
                            var tabpanel = Ext.getCmp('tabpanel10');
                            tabpanel.items['items'][2].enable();
                        }
                    }
                },{
                    title: 'Tab 3',
                    id: 'tab3',
                    html: 'Another one',
                    disabled: 'true',
                    listeners: {
                        activate: function () {
                            var tabpanel = Ext.getCmp('tabpanel10');
                            tabpanel.items['items'][0].disable();
                        }
                    }
                }]
            }]
        }
    ]
});