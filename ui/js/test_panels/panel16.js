var myStore16 = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy(new Ext.data.Connection({url: "api.php", timeout:20000})),
    baseParams: {param1: 1},
    reader: new Ext.data.JsonReader(
        {root: 'api/api16', totalProperty: 'total', id: 'id'},
        ['id', 'name', 'age']
    ),
    remoteSort: true,
    autoLoad: false
});


var grid16 = new Ext.grid.GridPanel({
    id:'grid16',
    store: myStore16,
    loadMask: {
        msg:"Please wait..."
    },

    cm: new Ext.grid.ColumnModel([
        {header: 'id', width: 200, sortable: true, dataIndex: 'id'},
        {header: 'name', dataIndex: 'name'},
        {header: 'age', dataIndex: 'age'},
    ]),

    viewConfig: {
        forceFit:true,
        enableRowBody:true,
        showPreview:true,
    },

    columnLines: true,

    frame:true,
    title:'Test Panel',
    iconCls:'icon-grid',
});

var window16 = new Ext.Window({
    closable: true,
    minimizable: true,
    title: 'Constrained Window',
    id: 'window',
    height: 300,
    modal: true, //MODAL WINDOW, MASKS THE WHOLE DOCUMENT BODY?
    width: 700,
    layout: 'fit',
    constrain: true,
    //html: 'I am in a Container',
    itemId: 'center-window',
    buttons: [{
        text: 'Btn',
        handler: function () {
            //myStore16.load();
        }
    }],
    listeners: {
        show: function (window) {
            myStore16.load();
        }
    },
    items: [grid16]
});


panel16 = new Ext.Panel({
    title: 'Задание 16',
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
                '<p>Работа с Window</p>',
                'Открыть модальное окно, после открытия посылать запрос на сервер для загрузки данных',
                'после отправки показывать лоад маску. На сервере сделать sleep(3) чтоб имитировать долгую загрузку',
                'После того как данные пришли с сервера, прятать лоад маску'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            items: [{
                xtype: 'button',
                text: 'Кнопка',
                id: 'btn16',
                width: 70,
                height: 30,
                handler: function () {
                    Ext.getCmp('window').show();
                }
            }, window16]
        }
    ]
});