panel7 = new Ext.Panel({
    title: 'Задание 7',
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
                '<p>Работа с лайаутами</p>',
                'Добавить бордер лаяут, все части должны схлопываться',
                'В левой части добавить панельку с лаяут акордеон (из 3х панелек)',
                'В правой части добавить панельку с лаяут колумн (из 2х панелек)'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            layout: 'fit',
            //html: 'Тут решение'
            items: [{
                xtype: 'panel',
                width: 700,
                height: 500,
                title: 'Border Layout',
                layout: 'border',
                items: [{
                    //title: 'East',
                    region: 'east',
                    width: 400,
                    //split: true,         // enable resizing
                    collapsible: true,
                    minSize: 75,         // defaults to 50
                    maxSize: 150,
                    margins: '0 5 5 5',
                    layout: 'column',
                    items: [{
                        xtype: 'panel',
                        title: 'Panel 1',
                        columnWidth:.5,
                        html: '<p>Panel content!</p>'
                    },{
                        xtype: 'panel',
                        title: 'Panel 2',
                        height: '300',
                        columnWidth:.5,
                        html: '<p>Panel content!</p>'
                    }]
                },{
                    // xtype: 'panel' implied by default
                    //title: 'West',
                    region:'west',
                    margins: '5 0 0 5',
                    width: 500,
                    collapsible: true,
                    cmargins: '5 5 0 5',
                    id: 'west-region-container',
                    layout: 'fit',
                    //unstyled: true,
                    items: [{
                        title: 'Accordion Layout',
                        layout:'accordion',
                        defaults: {
                            bodyStyle: 'padding:15px'
                        },
                        layoutConfig: {
                            titleCollapse: false,
                            animate: true,
                            activeOnTop: true
                        },
                        items: [{
                            title: 'Panel 1',
                            html: '<p>Panel content!</p>'
                        },{
                            title: 'Panel 2',
                            html: '<p>Panel content!</p>'
                        },{
                            title: 'Panel 3',
                            html: '<p>Panel content!</p>'
                        }]
                    }]
                },{
                    title: 'Center Region',
                    region: 'center',
                    xtype: 'container',
                    layout: 'fit',
                    margins: '5 5 0 0'
                }]
            }]
        }
    ]
});