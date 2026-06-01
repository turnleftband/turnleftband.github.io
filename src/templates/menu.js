import React from "react";
import MenuEntry from "./menuEntry";

const containerStyle = {
  backgroundColor: "#232023",
  width: "100%",
  "text-align": "center",
  "margin-top": "12px",
  opacity: "95%",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  transform: "translateZ(0)",
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

const sections = [
  { id: "listen", title: "LISTEN" },
  { id: "follow", title: "FOLLOW" },
  { id: "lyrics", title: "LYRICS" },
];

const Menu = ({ activeTab, onSelect = () => {} }) => {
  return (
    <div style={containerStyle}>
      <div style={sizeWrapperStyle}>
        <div style={style}>
          {sections.map(({ id, title }) => (
            <MenuEntry
              key={id}
              id={id}
              title={title}
              isActive={activeTab == id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
