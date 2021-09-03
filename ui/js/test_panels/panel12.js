myStore12 = new Ext.data.Store({
    storeId: 'myStore12',
    autoLoad: true,
    proxy: new Ext.data.HttpProxy({
        url: "api.php"
    }),
    baseParams: {param1: 1},
    reader: new Ext.data.JsonReader(
        {root: 'data', totalProperty: 'total', id: 'id'},
        ['id', 'name', 'age']
    ),
    remoteSort: false,
});

var tpl12 = new Ext.XTemplate
('<h1>Users</h1>',
    '<table>',
    '<tr>',
    '<td>id</td>',
    '<td>Name</td>',
    '<td>Age</td>',
    '</tr>',
    '<tpl for=".">',
    '<tr {[this.isChecked(values)]}>',
    '<td>{id}</td>',
    '<td>{name}</td>',
    '<td>{age}</td>',
    '</tr>',
    '</tpl>',
    '</table>', {
        isChecked: function(values) {
            console.log(values);
            return '';

        }});
//tpl.overwrite(Ext.getBody(), data);


panel12 = new Ext.Panel({
    title: 'Задание 12',
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
                'Создать шаблон используя Xtemplate в котором какая-то хтмл верстка и данные загружаются с сервера'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            //html: tpl12.apply(data)
            items: [{
                xtype: 'dataview',
                store: myStore12,
                tpl: tpl12,
                autoHeight:true,
                multiSelect: true,
                overClass:'x-view-over',
                itemSelector:'div.thumb-wrap',
                emptyText: 'No images to display'
            }]
        }
    ]
});