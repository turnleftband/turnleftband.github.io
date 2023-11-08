import React from "react";
import MenuEntry from "./menuEntry";

const containerStyle = {
  backgroundColor: "#232023",
  opacity: "80%",
  width: "100%",
  "text-align": "center",
  "margin-top": "12px",
};

const sizeWrapperStyle = {
  display: "inline-block",
};

const style = {
  display: "flex",
  gap: "16px",
  padding: "16px",
  margin: "0 auto",
};

const Menu = ({ activeTab }) => {
  return (
    <div style={containerStyle}>
      <div style={sizeWrapperStyle}>
        <div style={style}>
          <MenuEntry to="/" title={"LISTEN"} isActive={activeTab == "listen"} />
          <MenuEntry
            to="/follow/"
            title={"FOLLOW"}
            isActive={activeTab == "follow"}
          />
          <MenuEntry
            to="/lyrics/"
            title={"LYRICS"}
            isActive={activeTab == "lyrics"}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
