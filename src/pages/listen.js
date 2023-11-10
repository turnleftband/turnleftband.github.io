import React from "react";
import Main from "../templates/main";
import ButtonRow from "../templates/buttonRow";

export default function Listen() {
  return (
    <Main activeTab={"listen"}>
      <div className="button-container">
        <h3 className="button-container__title">LISTEN</h3>
        <ButtonRow
          href={
            "https://open.spotify.com/track/092yVrjhaE0hiXEl8WZM3n?si=3075016b2b994ad6"
          }
          img={"/spotify.svg"}
          title={"TURNLEFT"}
          buttonTitle={"LISTEN"}
        />
        <ButtonRow
          href={
            "https://music.apple.com/us/album/wont-be-back/1714026753?i=1714026754"
          }
          img={"/apple.svg"}
          title={"TURNLEFT"}
          buttonTitle={"LISTEN"}
        />
        <h3 className="button-container__title">FOLLOW</h3>
        <ButtonRow
          href={"https://youtu.be/gHnhK9cG6YE?si=uQ2RupLvNjlqDecV"}
          img={"/youtube.svg"}
          title={"@TURNLEFTBAND"}
          buttonTitle={"WATCH"}
        />
        <ButtonRow
          href={"https://www.tiktok.com/@turnleftband"}
          img={"/tiktok.svg"}
          title={"@TURNLEFTBAND"}
          buttonTitle={"FOLLOW"}
        />
        <ButtonRow
          href={"https://instagram.com/turnleftband"}
          img={"/instagram.svg"}
          title={"@TURNLEFTBAND"}
          buttonTitle={"FOLLOW"}
        />
        <ButtonRow
          href={"https://facebook.com/turnleftband"}
          img={"/facebook.svg"}
          title={"@TURNLEFTBAND"}
          buttonTitle={"FOLLOW"}
        />
      </div>
    </Main>
  );
}
