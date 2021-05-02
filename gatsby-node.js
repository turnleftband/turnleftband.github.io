const lyrics = require('./data/lyrics');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const lyricTemplate = path.resolve('src/templates/lyric.js');
  const lyricsTemplate = path.resolve('src/templates/lyrics.js');

  createPage({
    path: '/lyrics',
    component: lyricsTemplate,
    context: {
      pagePath: '/lyrics',
      lyrics: lyrics,
    },
  });

  lyrics.forEach((lyric) => {
    const path = '/lyrics/' + lyric.url;
    createPage({
      path,
      component: lyricTemplate,
      context: {
        pagePath: path,
        lyric: lyric,
      },
    });
  });
};
