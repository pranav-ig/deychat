// const { response } = require("express")

self.addEventListener("install",e=>{

    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./chat.html",
                                 "./landing.html",
                                 "./newcall.html",
                                 "./notsupported.html",
                                 "./notsupportedios.html",
                                 "./reference/additional.html",
                                 "./ipfs.html",
                                 "./images/icon64.png",
                                 "./images/icon100.png",
                                 "./css/chat.css",
                                 "./css/landing.css",
                                 "./css/newcall.css",
                                 "./css/snackbar.css"
        ])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})