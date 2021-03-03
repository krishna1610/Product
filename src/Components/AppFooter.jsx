import React from "react";
import AppFooterLabel from "./AppFooterLabel";
import AppFooterLogo from "./AppFooterLogo";

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [
        {
          headerName: "Features",
          lists: [
            "Cool stuff",
            "Random feature",
            "Team feature",
            "Stuff for developers",
            "Another one",
            "Last time",
          ],
        },
        {
          headerName: "Resources",
          lists: [
            "Resource name",
            "Resource",
            "Another resource",
            "Final resource",
          ],
        },
        {
          headerName: "Resources",
          lists: ["Business", "Education", "Government", "Gaming"],
        },
        {
          headerName: "About",
          lists: ["Team", "Locations", "Privacy", "Terms"],
        },
      ],
    };
  }
  render() {
    return (
      <footer className="container py-5">
        <div className="row">
          <AppFooterLogo />
          {this.state.labels.map((label) => {
            return <AppFooterLabel label={label} />;
          })}
        </div>
      </footer>
    );
  }
}

export default AppFooter;
