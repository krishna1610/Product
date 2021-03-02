import React from "react";
import AppFooterLabels from "./AppFooterLabels";
import AppFooterLogo from "./AppFooterLogo";

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLabel: {
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
      secondLabel: {
        headerName: "Resources",
        lists: [
          "Resource name",
          "Resource",
          "Another resource",
          "Final resource",
        ],
      },
      thirdLabel: {
        headerName: "Resources",
        lists: ["Business", "Education", "Government", "Gaming"],
      },
      fourthLabel: {
        headerName: "About",
        lists: ["Team", "Locations", "Privacy", "Terms"],
      },
    };
  }
  render() {
    return (
      <footer className="container py-5">
        <div className="row">
          <AppFooterLogo />
          <AppFooterLabels labels={this.state.firstLabel} />
          <AppFooterLabels labels={this.state.secondLabel} />
          <AppFooterLabels labels={this.state.thirdLabel} />
          <AppFooterLabels labels={this.state.fourthLabel} />
        </div>
      </footer>
    );
  }
}

export default AppFooter;
