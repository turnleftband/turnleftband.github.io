import React from 'react';
import Layout from '../layouts/layout';

const Lyrics = ({ pageContext: { pagePath, lyrics } }) => {
  return (
    <Layout>
      <div className="background">
        <div className="blur">
          <div className="image-container">
            <img src="/640.png" width="260" height="260" />
          </div>
          <div className="content">
            <div className="button-container">
              <h3 className="button-container__title">Lyrics</h3>
              {lyrics.map((lyric) => {
                return (
                  <a class="lyric-link" href={`${pagePath}/${lyric.url}`}>
                    {lyric.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lyrics;
