import React from "react";
import ButtonRow from "../templates/buttonRow";

const FollowSection = ({}) => {
  return (
    <React.Fragment>
      <h3 className="button-container__title">FOLLOW</h3>
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
        href={"https://youtu.be/r8It1mms5_M?si=7k9vfCE5XeS_7yt3"}
        img={"/youtube.svg"}
        title={"@TURNLEFTBAND"}
        buttonTitle={"WATCH"}
      />
      <ButtonRow
        href={"https://facebook.com/turnleftband"}
        img={"/facebook.svg"}
        title={"@TURNLEFTBAND"}
        buttonTitle={"FOLLOW"}
      />
    </React.Fragment>
  );
};

export default FollowSection;
