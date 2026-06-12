import React from "react";
import Main from "../templates/main";
import FollowSection from "../templates/followSection";
import ListenSection from "../templates/listenSection";
import lyrics from "../../data/lyrics";

export default function Listen() {
  return (
    <Main activeTab={"listen"}>
      <div className="button-container">
        <section id="listen" className="page-section">
          <ListenSection />
        </section>
        <section id="follow" className="page-section">
          <FollowSection />
        </section>
        <section id="lyrics" className="page-section">
          <h3 className="button-container__title">LYRICS</h3>
          {lyrics.map((lyric) => {
            return (
              <a
                className="lyric-link"
                href={`/lyrics/${lyric.url}`}
                key={lyric.url}
              >
                {lyric.title}
              </a>
            );
          })}
        </section>
      </div>
    </Main>
  );
}
