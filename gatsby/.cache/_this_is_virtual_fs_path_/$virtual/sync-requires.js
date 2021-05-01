
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/eduardocastaneda/Projekt/turnleftband.github.io/gatsby/src/pages/index.js")),
  "component---src-pages-listen-js": preferDefault(require("/Users/eduardocastaneda/Projekt/turnleftband.github.io/gatsby/src/pages/listen.js")),
  "component---src-templates-lyric-js": preferDefault(require("/Users/eduardocastaneda/Projekt/turnleftband.github.io/gatsby/src/templates/lyric.js"))
}

