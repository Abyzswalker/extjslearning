myStore13 = new Ext.data.Store({
    storeId: 'myStore13',
    autoLoad: true,
    proxy: new Ext.data.HttpProxy({
        url: "api/api13.php"
    }),
    baseParams: {param1: 1},
    reader: new Ext.data.JsonReader(
        { root: 'data'},
        ['articles', 'likes']
    ),
    remoteSort: false,
});


var tpl13 = new Ext.XTemplate
('<h1>Users</h1>',
    '<table>',
    '<tr>',
    '<td>id</td>',
    '<td>Name</td>',
    '<td>Age</td>',
    '</tr>',
    '<tpl for=".">',
    '<tpl for="articles">',
    '<tr <tpl if="values.name%2 == 1">style="background-color: black;"</tpl>>',
    '<td {[this.isChecked(values)]}>{id}</td>',
    '<td>{name}</td>',
    '<td>{age}</td>',
    '</tr>',
    '</tpl>',
    '</tpl>',
    '</table>', {
        isChecked: function(values) {
            console.log(values);
            return '';
        }
    });


panel13 = new Ext.Panel({
    title: 'Задание 13',
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
                'Сделать Xtemplate с получением сложных данных, примерно data => [articles => [...],likes => [...]]',
                'все это грузится одним сторе. в шаблоне отображаются данные с обоих массивов',
                'также использовать if в шаблон'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            items: [{
                xtype: 'dataview',
                store: myStore13,
                tpl: tpl13,
                autoHeight:true,
                multiSelect: true,
                overClass:'x-view-over',
                itemSelector:'div.thumb-wrap',
                emptyText: 'No images to display'
            }]
        }
    ]
});