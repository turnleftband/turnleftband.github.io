import React from 'react';
import Layout from '../layouts/layout';

const Lyric = ({ pageContext: { lyric } }) => {
  const { title, parts } = lyric;
  return (
    <Layout>
      <h1>{title}</h1>
      <div class="lyric-content">
        {parts.map((part) => (
          <p class="lyric-part">{part}</p>
        ))}
      </div>
    </Layout>
  );
};
export default Lyric;
