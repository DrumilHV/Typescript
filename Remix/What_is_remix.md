# What is remix?

1. Remix is built on top of React Router(that is, it's React and routing). Remix is the following.

- Server side http handler
- Server framework
- Browser framework
- A compiler (as if we already did not have barbel)

## Compiler

1. Remix uses ESBUILD(100 times faster than webpack, a surer fast bundler).
2. Remix does the following things on.

- A server HTTP handler, that includes all routes and modules together to be able to render on the server and handle any other server-side requests for resources.

  - usually in server/build/index.js (it's configurable)
  - This is achived in remix as it has an action method which is a server side function you write.
  - You can disable all the js on the client side and still the app will run without any issues( because all the data and logic is on the server)
  - Remix will also take care of any other server-side requests for resources.

- A browser build, usually in public/build/\*. This includes automatic code splitting by route, fingerprinted asset imports (like CSS and images), etc. Anything needed to run an application in the browser.
- An asset manifest. Both the client and the server use this manifest to know the entire dependency graph. This is useful for preloading resources in the initial server render as well as prefetching them for client-side transitions. This is how Remix is able to eliminate the render+fetch waterfalls so common in web apps today.

## HTTP Handler

1. Remix is not a server, its a handler that sits on top of js server.
2. So you can run remix anywhere you can run javascript. like vecel, netlify etc, or also non node environment.
3. Remix is a handler which will do work for you. Your request will go to the handler, the handler will then convert it to fetch api usable form , fetch the required results and return you exactly what you need. Now you dont have to do anything just whatever you want.
4. Remix has its own adapeters for diffent servers, these adapeters get your job done .
5. If remix don't have an adatapter for your server, you can make one for urself.

## Server Framework

1. Remix based on server-side MVC architecture like ruby and Larvel, but only with View and Controller and leaves the Model on you . We could use a plathora of options in js ecosystem to fill up the gaps. We could select our own ORM, database etc.
2. Remix also has helpers around the Fetch API for cookie and session management.
3. Instead of having a split between View and Controller, Remix Route modules take on both responsibilities.
4. Most server-side frameworks are "model focused". A controller manages multiple URLs for a single model.
5. More often than not, a Remix route module can contain both the UI and the interactions with the models in the same file, which leads to really nice developer ergonomics and productivity.
6. Route modules have three primary exports: loader, action, and default (component).
7. you could use remix as a server side framework. jsut like react routes are components and an api for themsesvers(for the route.).

## Browser Framework

1. Once Remix has served the document to the browser, it "hydrates" the page with the browser build's JavaScript modules. This is where we talk a lot about Remix "emulating the browser".

2. When the user clicks a link, instead of making a round trip to the server for the entire document and all the assets, Remix simply fetches the data for the next page and updates the UI. This has many performance benefits over making a full-document request:

- Assets don't need to be re-downloaded (or pulled from cache)
- Assets don't need to be parsed by the browser again
- The data fetched is much smaller than the entire document (sometimes orders of magnitude)

4.  Remix also has some built in optimizations for client-side navigation. It knows which layouts will persist between the two URLs, so it only fetches the data for the ones that are changing.

5.  Remix can also prefetch all resources for a page when the user is about to click a link. The browser framework knows about the compiler's asset manifest. It can match the URL of the link, read the manifest, and then prefetch all data, JavaScript modules, and even CSS resources for the next page. This is how Remix apps feel fast even when networks are slow.
6.
