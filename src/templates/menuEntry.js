import React from "react";

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

const MenuEntry = ({ id, title, isActive, onSelect }) => {
  const href = `/#${id}`;

  const lineStyle = {
    height: "2px",
    width: "100%",
    backgroundColor: isActive ? "#FFFFFF" : "transparent",
  };

  const handleClick = (event) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    onSelect(id);
    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={containerStyle}>
      <a href={href} style={linkStyle} onClick={handleClick}>
        {title}
      </a>
      <div style={lineStyle}></div>
    </div>
  );
};

export default MenuEntry;
