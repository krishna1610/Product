import React from "react";
import BodyCardFirst from "./BodyCardFirst";
import BodyCardFourth from "./BodyCardFourth";
import BodyCardSecond from "./BodyCardSecond";
import BodyCardThird from "./BodyCardThird";
import BodyCardWhite from "./BodyCardWhite";

class AppBody extends React.Component {
  render() {
    return (
      <>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCardFirst />
          <BodyCardSecond />
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCardThird />
          <BodyCardFourth />
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCardWhite />
          <BodyCardWhite />
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCardWhite />
          <BodyCardWhite />
        </div>
      </>
    );
  }
}

export default AppBody;
