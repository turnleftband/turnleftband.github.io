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
            "https://open.spotify.com/track/270iDGNmxJh7zw3axFFKQ7?si=c896b65dfdbc429e"
          }
          img={"/spotify.svg"}
          title={"TURNLEFT"}
          buttonTitle={"LISTEN"}
        />
        <ButtonRow
          href={
            "https://music.apple.com/us/album/me-myself-and-i/1458248127?i=1458248135"
          }
          img={"/apple.svg"}
          title={"TURNLEFT"}
          buttonTitle={"LISTEN"}
        />
        <h3 className="button-container__title">FOLLOW</h3>
        <ButtonRow
          href={"https://www.youtube.com/watch?v=2MfHniGa-1I"}
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
