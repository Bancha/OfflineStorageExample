
// include Bancha
Ext.Loader.setConfig('enabled', true);
Ext.Loader.setPath('Bancha','/Bancha/js');
Ext.syncRequire('Bancha.Initializer');

// set the path to our plugin
Ext.Loader.setPath('Ext.ux.OfflineSyncStore', 'plugins/OfflineSyncStore/Ext.ux.OfflineSyncStore.js');

Ext.application({
    models: [
        'Bancha.model.User'
    ],
    stores: [
        'Users'
    ],
    views: [
        'Viewport'
    ],
    name: 'OfflineStorage',

    launch: function() {

        Ext.create('OfflineStorage.view.Viewport', {fullscreen: true});
    }

});
