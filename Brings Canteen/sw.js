var cacheName = "brings-canteen-v1";
var compareName = "brings-canteen";
var dependencies = [
  "/Home/Image"
];
var imageUrl = "/Image";

self.addEventListener('install',function(event) {
    
    event.waitUntil(
      caches.open(cacheName).then(cache => {
          console.log("installing...");
          //cache.addAll(dependencies);
          return Promise.resolve();
      })
    );
})

self.addEventListener('activate', event => {
    console.log("activated");
    event.waitUntil(
      caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.filter(function (cacheNm) {
                return (cacheNm.startsWith(compareName) && cacheNm != cacheName)
            }).map(function (cacheNm) {
                console.log("about to delete cache")
                return caches.delete(cacheNm);
            })
          )
      })
    );
})

self.addEventListener('fetch', event => {
    
    var requestUrl = event.request.url;


    console.log(requestUrl);
    if (requestUrl.toLowerCase().indexOf(imageUrl.toLowerCase()) != -1) {
        console.log("Url match found, Yay!!! " + requestUrl);
        event.respondWith(
            caches.match(event.request).then(function (response) {

                if (response) {
                    console.log("Image was found in cached, returning the cached version...");

                    return response;
                }
                else {
                    return fetch(event.request).then(function (networkResponse) {
                        if (networkResponse.ok) {
                            return caches.open(cacheName).then(function (cache) {
                                return cache.put(requestUrl, networkResponse.clone())
                                    .then(function () {
                                        return networkResponse;
                                    });
                            });
                        }
                    });
                }
                 
            })
        );
        
    } 
    
    // if the request is not an Image request
    //event.respondWith(fetch(event.request))
    
})
