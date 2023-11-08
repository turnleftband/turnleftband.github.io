import React from "react";
import { Link } from "@gatsbyjs/reach-router";

const containerStyle = {
  display: "flex",
  gap: "4px",
  "flex-direction": "column",
  color: "blue",
  flex: "1",
};

const linkStyle = {
  "margin-left": "12px",
  "margin-right": "12px",
  color: "#FFFFFF",
};

const MenuEntry = ({ to, title, isActive }) => {
  const lineStyle = {
    height: "2px",
    width: "100%",
    backgroundColor: isActive ? "#FFFFFF" : "transparent",
  };

  return (
    <div style={containerStyle}>
      <Link to={to} style={linkStyle}>
        {title}
      </Link>
      <div style={lineStyle}></div>
    </div>
  );
};

export default MenuEntry;
