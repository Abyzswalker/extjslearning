var data = [
    {
        position: 1,
        title: 'C',
        rate: '19.224%'
    }, {
        position: 2,
        title: 'Java',
        rate: '17.455%'
    }, {
        position: 3,
        title: 'Objective-C',
        rate: '10.383%'
    }, {
        position: 4,
        title: 'C++',
        rate: '9.689%'
    }, {
        position: 5,
        title: 'PHP',
        rate: '5.732%'
    }];


var tpl11 = new Ext.XTemplate
    ('<h1>TIOBE Rate</h1>',
        '<table>',
        '<tr>',
        '<td>Позиция на Ноябрь 2012</td>',
        '<td>Язык программирования</td>',
        '<td>Рейтинг</td>',
        '</tr>',
        '<tpl for=".">',
        '<tr>',
        '<td>{position}</td>',
        '<td>{title}</td>',
        '<td>{rate}</td>',
        '</tr>',
        '</tpl>',
        '</table>');
//tpl.overwrite(Ext.getBody(), data);


panel11 = new Ext.Panel({
    title: 'Задание 11',
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
                '<p>Работа с Xtemplate</p>',
                'Создать шаблон используя Xtemplate в котором какая-то хтмл верстка'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            html: tpl11.apply(data)
        }
    ]
});