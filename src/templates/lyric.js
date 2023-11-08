import React from "react";
import Main from "./main";

const lyricContentStyle = {
  "text-align": "center",
};

const lyricPartStyle = {
  color: "#232023",
  "margin-bottom": "1rem",
  "white-space": "pre-line",
  "line-height": "1.8",
  "margin-top": 0,
};

const titleStyle = {
  color: "#232023",
  "margin-bottom": 0,
};

const Lyric = ({ pageContext: { lyric } }) => {
  const { title, parts } = lyric;
  return (
    <Main activeTab={"lyrics"}>
      <h1 style={titleStyle}>{title}</h1>
      <div style={lyricContentStyle}>
        {parts.map((part) => (
          <p style={lyricPartStyle}>{part}</p>
        ))}
      </div>
    </Main>
  );
};
export default Lyric;
