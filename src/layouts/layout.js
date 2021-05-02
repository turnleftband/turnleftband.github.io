import React from 'react';
import './layout.css';
import { Helmet } from 'react-helmet';
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Turnleft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Layout;
