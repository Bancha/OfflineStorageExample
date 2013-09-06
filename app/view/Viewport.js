
Ext.define('OfflineStorage.view.Viewport', {
    extend: 'Ext.tab.Panel',

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'container',
                iconCls: 'home',
                title: 'Introduction',
                html: [
                    '<h2>Offline Storage Example</h2>',
                    '<p>When building mobile apps, supporting offline mode can ',
                    'be a critical feature. This example leverages ',
                    '<a href="https://github.com/SwarmOnline/Ext.ux.OfflineSyncStore/">',
                    'Ext.ux.OfflineSyncStore</a> to demonstrate an easy approach ',
                    'for making your app offline-ready.<br><br>In this example we ',
                    'create an locale storage proxy for keeping data in offline mode, ',
                    'and we use our Bancha proxy for retrieving data from the server.',
                    '</p><p>',
                    'An easy way to try this is:',
                    '</p><ul>',
                    '<li>Open the example and load data from the server. Now the data ',
                    'get\'s cached in the local storage.</li>',
                    '<li>Close the browser and set your phone to flight mode/disconnect ',
                    'your internet.</li>',
                    '<li>Open this app again and load from local storage</li></ul>'
                ].join(''),
                styleHtmlContent: true
            },
            {
                xtype: 'container',
                iconCls: 'star',
                title: 'Example',
                layout: 'fit',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    Ext.StoreMgr.get('Users').loadServer();
                                },
                                flex: 1,
                                iconCls: 'download',
                                text: 'Load f. server'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    Ext.StoreMgr.get('Users').loadLocal();
                                },
                                flex: 1,
                                iconCls: 'organize',
                                text: 'Load local data'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        store: 'Users',
                        disableSelection: true,
                        itemTpl: [
                            '<div>{name}</div>'
                        ]
                    }
                ]
            }
        ]
    }

});
