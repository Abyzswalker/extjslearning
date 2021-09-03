myStore5 = new Ext.data.Store({
    storeId: 'myStore',
    autoLoad: true,
    proxy: new Ext.data.HttpProxy({
        url: "api.php"
    }),
    baseParams: {param1: 1},
    reader: new Ext.data.JsonReader(
        {root: 'data', totalProperty: 'total', id: 'id'},
        ['id', 'name', 'age']
    ),
    remoteSort: false
});

var sm5 = new Ext.grid.CheckboxSelectionModel();
var grid5 = new Ext.grid.GridPanel({
    store: myStore5,
    autoHeight: true,
    loadMask: true,
    cm: new Ext.grid.ColumnModel({
        defaults: {
            width: 120,
            sortable: true
        },
        columns: [
            sm5,
            {header: 'id', width: 200, sortable: true, dataIndex: 'id'},
            {header: 'name', dataIndex: 'name'},
            {header: 'age', dataIndex: 'age'},
        ]
    }),

    viewConfig: {
        forceFit: true,
    },

    sm: sm5,
    columnLines: true,
    width:600,
    height:300,
    frame:true,
    title:'Test grid',
    iconCls:'icon-grid',
});



panel5 = new Ext.Panel({
    title: 'Задание 5',
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
                '<p>Работа с гридом</p>',
                'Сделать грид с 3-мя колонками, который грузит тестовые данные с сервера',
                'В гриде должна быть возможность выбрать много строк, через checkboxselectionmodel'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            items: [grid5]
        }
    ]
});