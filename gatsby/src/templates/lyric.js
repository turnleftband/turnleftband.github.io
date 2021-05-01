import React from 'react';
import './lyric.css';

const Lyric = ({ pageContext: { lyric } }) => {
  const { title, parts } = lyric;
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {parts.map((part) => (
          <p>{part}</p>
        ))}
      </div>
    </div>
  );
};
export default Lyric;
