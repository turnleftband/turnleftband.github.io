import React, { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState(activeTab);

  useEffect(() => {
    setActiveSection(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const sectionIds = ["listen", "follow", "lyrics"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const hashSection = window.location.hash.replace("#", "");

    if (sectionIds.includes(hashSection)) {
      setActiveSection(hashSection);
    }

    const updateActiveSection = () => {
      const activationLine = Math.min(window.innerHeight * 0.35, 220);
      const active = sections.reduce((current, section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          return section.id;
        }

        return current;
      }, sections[0].id);

      setActiveSection(active);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <Layout>
      <div className="background">
        <div className="blur">
          <div style={imageContainerStyle}>
            <img src="/640.jpg" width="260" height="260" />
          </div>
          <Menu activeTab={activeSection} onSelect={setActiveSection} />
          <div className="content">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
