# Code Splitting Example

This is an example sample app that shows how to perform code splitting in Webpack and Parcel. To install, simply `git clone` and run `npm install`. From there, you can go with any number of commands:

- To generate an optimized production build, run `npm run build`.
- To perform a production build _and_ run the app on a local server, run `npm start`, and the app will be available at http://localhost:8080/

There are several branches, each of which demonstrate a different kind of code splitting or performance optimization for apps using code splitting:

- [`master`](https://github.com/malchata/code-splitting-example) is the starting point, where no code splitting or other performance optimizations are set up.
- [`webpack-entry-point-splitting`](https://github.com/malchata/code-splitting-example/tree/webpack-entry-point-splitting) show how to split code [by entry point in Webpack](https://webpack.js.org/guides/code-splitting/#entry-points).
- [`webpack-dynamic-splitting`](https://github.com/malchata/code-splitting-example/tree/webpack-dynamic-splitting) shows how to split code [by dynamic `import()`s in Webpack](https://webpack.js.org/guides/code-splitting/#dynamic-imports). This branch is related to three others that demonstrate various performance enhancements you can use with this type of code splitting:
  - [`webpack-dynamic-splitting-precache`](https://github.com/malchata/code-splitting-example/tree/webpack-dynamic-splitting-precache) shows how to use [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin) to generate a service worker that precaches dynamic chunks when a service worker is installed.
  - [`webpack-dynamic-splitting-prefetch`](https://github.com/malchata/code-splitting-example/tree/webpack-dynamic-splitting-prefetch) shows how to use [`rel=prefetch`](https://www.w3.org/TR/resource-hints/#prefetch) to idly fetch dynamic chunks ahead of time to reduce request latency.
  - [`webpack-dynamic-splitting-preload`](https://github.com/malchata/code-splitting-example/tree/webpack-dynamic-splitting-preload) shows how to use [preload-webpack-plugin](https://github.com/GoogleChromeLabs/preload-webpack-plugin) to inject [`rel=preload`](https://www.w3.org/TR/preload/) hints into the document for render-critical initial chunks.
- [`parcel-dynamic-splitting`](https://github.com/malchata/code-splitting-example/tree/parcel-dynamic-splitting) shows how to split code by dynamic `import()`s in with [Parcel.js](https://parceljs.org/).

Hope you find this example useful!
