import React from "react";
import Layout from "../layouts/layout";
import Menu from "../templates/menu";

const imageContainerStyle = {
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
  width: "100%",
  "margin-top": "24px",
};

const Main = ({ activeTab, children }) => {
  return (
    <Layout>
      <div className="background">
        <div className="blur">
          <div style={imageContainerStyle}>
            <img src="/640.jpg" width="260" height="260" />
            <Menu activeTab={activeTab} />
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
