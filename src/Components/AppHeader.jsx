import React from "react";
import AppHeaderLabel from "./AppHeaderLabel";
import AppHeaderLogo from "./AppHeaderLogo";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        "Tour",
        "Product",
        "Features",
        "Enterprise",
        "Support",
        "Pricing",
        "Cart",
      ],
    };
  }
  render() {
    return (
      <header className="site-header sticky-top py-1">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <AppHeaderLogo />
          {this.state.links.map((name) => {
            return <AppHeaderLabel label={name} />;
          })}
        </nav>
      </header>
    );
  }
}

export default AppHeader;
