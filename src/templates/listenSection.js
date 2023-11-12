import React from "react";
import ButtonRow from "../templates/buttonRow";

const ListenSection = ({}) => {
  return (
    <React.Fragment>
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
      <ButtonRow
        href={
          "https://music.youtube.com/watch?v=gHnhK9cG6YE&si=odD4Z16rYbrWxRgS"
        }
        img={"/youtubemusic.svg"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
      <ButtonRow
        href={"https://tidal.com/browse/track/324889390"}
        img={"/tidal.svg"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
      <ButtonRow
        href={
          "https://music.amazon.com/albums/B0CLZF1PYT?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=SE&ref=dm_sh_KzKQVH1hTPfStYttHj5ahBsYe&trackAsin=B0CLZB84HH"
        }
        img={"/amazonmusic.png"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
    </React.Fragment>
  );
};

export default ListenSection;
