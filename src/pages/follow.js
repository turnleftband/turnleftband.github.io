import React from "react";
import Main from "../templates/main";
import FollowSection from "../templates/followSection";
import ListenSection from "../templates/listenSection";

export default function Follow() {
  return (
    <Main activeTab={"follow"}>
      <div className="button-container">
        <FollowSection />
        <ListenSection />
      </div>
    </Main>
  );
}
