import React from "react";
import BodyIntro from "./BodyIntro";
import BodyCards from "./BodyCards";

class AppBody extends React.Component {
  render() {
    return (
      <main>
        <BodyIntro
          names={{ headerName: "Punny headline", btnName: "Coming soon" }}
        />
        <BodyCards />
      </main>
    );
  }
}

export default AppBody;
