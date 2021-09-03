var data = [];

var btn = new Ext.Button({
    id: 'btn14',
    text: 'btn',
    width: 15,
    height: 10
});

var txt = new Ext.form.TextField({
    id: 'txt14',
    fieldLabel: 'txt',
    name: 'txt',
    allowBlank: false,
    //monitorValid:true
});

var cmb = new Ext.form.ComboBox({
    id: 'cmb14',
    fieldLabel: "",
    mode: 'local',
    allowBlank: true,
    anchor: '100%',
    minChars: 0
});

var check = new Ext.form.Checkbox({
    name: 'check14',
    boxLabel: 'Checkbox',
    inputValue: '1'
})

data.push(btn, txt, cmb, check);



var window14 = new Ext.Window({
    closable: true,
    minimizable: true,
    title: 'Constrained Window',
    id: 'window',
    height: 100,
    autoHeight: true,
    modal: true, //MODAL WINDOW, MASKS THE WHOLE DOCUMENT BODY?
    width: 100,
    autoWidth: true,
    constrain: true,
    itemId: 'center-window',
    buttons: [{
        text: '+',
        handler: function (){
            var item = data[Math.round(Math.random() * (data.length - 1))];
            window14.doLayout();
            var panel = window14.findByType('panel')[0];

            if (panel) {
                panel.add(item);
            }
            //console.log(data);
        }
    }, {
        text: '-',
        handler: function (){
            var panel = window14.findByType('panel')[0];
            var item = data[Math.round(Math.random() * (data.length - 1))];

            if (panel) {
                panel.remove(item);
            }
            window14.doLayout();
            //console.log(item);
        }
    }],
    items: [{
    }]
});


panel14 = new Ext.Panel({
    title: 'Задание 14',
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
                'Создать модальное окно. В котором будет 2 кнопки  (+ и -)',
                'при нажатии на + в окно добавляется рандомный елемент',
                'один из (кнопка, текст филд, комбобокс, чекбос). при нажатии на минус, один из них удаляется с окна',
                'Сделать чтоб при добавлении элементов размер окна изменялся и центровался.',
                'А при удалении элементов размер уменьшался (важно чтоб тень от окна тоже перестраивалась)'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            items: [{
                xtype: 'button',
                text: 'Кнопка',
                id: 'btn14',
                width: 70,
                height: 30,
                handler: function () {
                    Ext.getCmp('window').show();
                }
            }, window14]
        }
    ]
});