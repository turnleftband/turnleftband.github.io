import React from "react";
import Main from "../templates/main";
import FollowSection from "../templates/followSection";
import ListenSection from "../templates/listenSection";
import SocialUnlockWidget from "../templates/socialUnlockWidget";

export default function Listen() {
  return (
    <Main activeTab={"listen"}>
      <div className="button-container">
        <SocialUnlockWidget />
        <ListenSection />
        <FollowSection />
      </div>
    </Main>
  );
}
