import React from "react";
import Main from "./main";

const Lyrics = ({ pageContext: { pagePath, lyrics } }) => {
  return (
    <Main activeTab={"lyrics"}>
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
    </Main>
  );
};

export default Lyrics;
