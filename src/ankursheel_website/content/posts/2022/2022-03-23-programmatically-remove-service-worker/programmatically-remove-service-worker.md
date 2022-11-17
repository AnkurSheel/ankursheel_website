---
title: "How to programmatically unregister a service worker"
excerpt: "Sometimes you just want to remove a service worker either because something is wrong with it or you don't need it anymore. Lets see how we can do it programmatically"
tags:
- "javascript"
- "snippet"
- "web development"
category: "programming"
---

## Problem

Sometimes you just want to remove a service worker either because something is wrong with it or you don't need it anymore.

## Solution

To remove a service worker entirely, you can replace the code with code to unregister the service worker.
Replace the following snippets in the service worker file.

```javascript
self.addEventListener('install', function (e) {
    self.skipWaiting();
});
```

The install event is triggered when the browser sees the service worker for the first time.

The `skipWaiting()` method tells the service worker to skip the waiting state and move directly to activate (once it has been installed). Otherwise, the service worker will become active once the currently active service worker is released and becomes redundant.

```javascript

self.addEventListener('activate', function (e) {
    console.log(`Unregistering service worker`)
    self.registration.unregister()
        .then(function () {
            return self.clients.matchAll();
        })
        .then(function (clients) {
            clients.forEach(client => {
                console.log(`Navigating ${client.url}`)
                client.navigate(client.url)
            })
        });
});
```

The activate event is triggered when the old version of the service worker is gone.
The `self.registration.unregister()` function unregisters the service worker and returns a promise. The promise resolves to `false` if no registration was found; otherwise, it resolves to `true`. If the service worker was not found, it was already unregistered.

The `self.clients.matchAll()` method returns a Promise for a list of the service worker clients controlled by the service worker.

Next, the code loops through all the active clients, and it forces the browser to reload the page, which should remove the service worker.


## References

- [Self-destroying ServiceWorker](https://github.com/NekR/self-destroying-sw)
