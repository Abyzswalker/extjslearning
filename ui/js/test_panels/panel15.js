var cmp = 0;

var tab = new Ext.TabPanel({
    //activeTab: 0,
    height: this.moduleHeight,
    width: this.moduleWidth,
    items: [{
        title: 'Tab 1',
        html: 'A simple tab',
        listeners: {
            activate: function () {
                var counter = Ext.get('tab-counter');
                if (counter != null && typeof counter != 'undefined') {
                    cmp++;
                    counter.update(cmp);
                }
            }
        }
    },{
        title: 'Tab 2',
        html: 'Another one',
        listeners: {
            activate: function () {
                var counter = Ext.get('tab-counter');
                if (counter != null && typeof counter != 'undefined') {
                    cmp++;
                    counter.update(cmp);
                }
            }
        }
    },{
        title: 'Tab 3',
        html: 'Another one',
        listeners: {
            activate: function () {
                var counter = Ext.get('tab-counter');
                if (counter != null && typeof counter != 'undefined') {
                    cmp++;
                    counter.update(cmp);
                }
            }
        }
    }],
    border: false,
    itemTpl: new Ext.XTemplate(
        '<li class="{cls}" id="{id}">',
        '<a class="x-tab-strip-close"></a>',
        '<a class="x-tab-right" href="#">',
        '<div class="tab-counter" style="color: red; display: inline; float: left; clear: both" id="tab-counter" ></div>',
        '<em class="x-tab-left">',
        '<span class="x-tab-strip-inner">',
        '<span class="x-tab-strip-text {iconCls}">{text}</span>',
        '</span>',
        '</em>',
        '</a>',
        '</li>'
    )
});


panel15 = new Ext.Panel({
    title: 'Задание 15',
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
                'Сделать табпанел, в одном из них сделать отображение счетчика https://prnt.sc/s6z6ll',
                'при открытии любого таба счетчик должен увеличиватся'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            //html: 'Тут решение'
            items: [tab]
        }
    ]
});