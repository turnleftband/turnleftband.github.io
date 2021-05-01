// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-listen-js": () => import("./../../../src/pages/listen.js" /* webpackChunkName: "component---src-pages-listen-js" */),
  "component---src-templates-lyric-js": () => import("./../../../src/templates/lyric.js" /* webpackChunkName: "component---src-templates-lyric-js" */)
}

