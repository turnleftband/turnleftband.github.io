import React from "react";

const buttonRowStyle = {
  display: "flex",
  "flex-direction": "row",
  // "flex-direction": "row",
  // height: "40px",
  // width: "100%",
  "justify-content": "space-between",
  // "margin-bottom": "1.5rem",
  "align-items": "center",
  width: "100%",
};

const buttonRowImageLinkStyle = {
  display: "flex",
  "flex-direction": "row",
  gap: "12px",
  "align-items": "center",
  "padding-right": "12px",
  color: "#232023",
};

const buttonStyle = {
  color: "white",
  padding: "10px",
  "border-radius": "3px",
  "border-color": "#cccccc",
  "border-style": "solid",
  "border-width": "1px",
  "background-color": "#ffffff",
  color: "#444444",
  width: "100px",
  "text-align": "center",
  "font-weight": "500",
  "font-size": "0.97rem",
  "letter-spacing": ".05rem",
};

const imageStyle = {
  height: "40px",
  width: "40px",
};
const titleStyle = {
  width: "100%",
  "font-weight": "500",
  "letter-spacing": ".05rem",
};

const ButtonRow = ({ href, img, title, buttonTitle }) => {
  return (
    <div style={buttonRowStyle}>
      <a style={buttonRowImageLinkStyle} href={href}>
        <img src={img} style={imageStyle} />
        <p style={titleStyle}>{title}</p>
      </a>
      <a href={href}>
        <div style={buttonStyle}>{buttonTitle}</div>
      </a>
    </div>
  );
};

export default ButtonRow;
