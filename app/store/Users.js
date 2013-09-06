
Ext.define('OfflineStorage.store.Users', {
    extend: 'Ext.ux.OfflineSyncStore',

    requires: [
        'Bancha.model.User'
    ],

    config: {
        model: 'Bancha.model.User',
        storeId: 'Users',

        // to demonstrate this better, don't autoSync to the server
        autoServerSync: false,

        // define a LOCAL proxy for saving the store's data locally
        localProxy: {
            type: 'localstorage',
            id: 'offline-sync-store'
        },

        // define a SERVER proxy for saving the store's data on the server
        serverProxy: Bancha.model.User.getProxy()
    }
});
