import React from "react";
import Main from "../templates/main";
import FollowSection from "../templates/followSection";
import ListenSection from "../templates/listenSection";

export default function Listen() {
  return (
    <Main activeTab={"listen"}>
      <div className="button-container">
        <ListenSection />
        <FollowSection />
      </div>
    </Main>
  );
}
