import React from "react";
import ButtonRow from "../templates/buttonRow";

const ListenSection = ({}) => {
  return (
    <React.Fragment>
      <h3 className="button-container__title">LISTEN</h3>
      <ButtonRow
        href={
          "https://open.spotify.com/track/5xuyQVfVuk8T38cEtf4s2j?si=b03f0bedb44a4fba"
        }
        img={"/spotify.svg"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
      <ButtonRow
        href={"https://music.apple.com/us/song/without-you/6774369615"}
        img={"/apple.svg"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
      <ButtonRow
        href={
          "https://music.youtube.com/playlist?list=OLAK5uy_leW8H-T_jy7kgyChyVxv4MdqnFYI3CKmo&si=b48SWOzUeIRpRZge"
        }
        img={"/youtubemusic.svg"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
      <ButtonRow
        href={
          "https://music.amazon.com/tracks/B0H386VBWR?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_qF2VlCa8BP1loyRCeqJwTGwO6"
        }
        img={"/amazonmusic.png"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
      <ButtonRow
        href={"https://tidal.com/album/528846614/track/528846615"}
        img={"/tidal.svg"}
        title={"TURNLEFT"}
        buttonTitle={"LISTEN"}
      />
    </React.Fragment>
  );
};

export default ListenSection;
