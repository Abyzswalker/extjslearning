myStore6 = new Ext.data.Store({
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

var sm6 = new Ext.grid.CheckboxSelectionModel({
    listeners: {
        selectionchange: function(sm) {
            if (sm.getCount()) {
                grid6.Button.enable();
            } else {
                grid6.Button.disable();
            }
        }
    }
});


var grid6 = new Ext.grid.GridPanel({
    id:'button-grid',
    store: myStore6,
    cm: new Ext.grid.ColumnModel([
        sm6,
        {header: 'id', width: 200, sortable: true, dataIndex: 'id'},
        {header: 'name', dataIndex: 'name'},
        {header: 'age', dataIndex: 'age'},
    ]),
    sm: sm6,

    viewConfig: {
        forceFit:true
    },
    columnLines: true,


    buttons: [{text:'Save'},{text:'Cancel'}],
    buttonAlign:'center',

    tbar:['-',{
        text:'Button',
        tooltip:'Test button',
        iconCls:'test',
        listeners: {
            click: function () {
                var arr = sm6.getSelections();
                var html = '';

                Ext.each(arr, function (item, index) {
                    html += '<table> <tr> <td>' + item.get('id') + '&nbsp;&nbsp;' + '</td> <td>' + item.get('name') + '&nbsp;&nbsp;' + '</td> <td>' + item.get('age') + '</td> </tr> </table>';
                    Ext.getCmp('textpanel6').update(html);
                    //console.log(html);
                })
            }
        },
        ref: '../Button',
        disabled: true
    }, '-',],

    width:600,
    height:300,
    frame:true,
    title:'Test Panel',
    iconCls:'icon-grid',
});


panel6 = new Ext.Panel({
    title: 'Задание 6',
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
                'Сделать топ тулбар в гриде. В него добавить кнопку (изначально задизейбленная).',
                'При выделении строки в гриде (кнопка активируется)',
                'При нажатии на кнопку под гридом пишется текстом то что выбрано в гриде'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            items: [
                grid6,
                {
                xtype: 'panel',
                id: 'textpanel6',
                html: '.'
            }]
        }
    ]
});