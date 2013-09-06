Offline Storage Example with Bancha
===================================

When building mobile apps, supporting offline mode can be a critical feature.
This example leverages [Ext.ux.OfflineSyncStore](https://github.com/SwarmOnline/Ext.ux.OfflineSyncStore/)
to demonstrate an easy approach for making your app offline-ready.

In this example we create an locale storage proxy for keeping data in offline
mode, and we use our Bancha proxy for retrieving data from the server.

An easy way to try this is:

- Open the example and load data from the server. Now the data get's cached in the local storage.
- Close the browser and set your phone to flight mode/disconnect your internet.
- Open this app again and load from local storage
