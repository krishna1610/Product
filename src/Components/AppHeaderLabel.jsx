import React from "react";

class AppHeaderLabel extends React.Component {
  render() {
    return (
      <a className="py-2 d-none d-md-inline-block" href="#">
        {this.props.label}
      </a>
    );
  }
}

export default AppHeaderLabel;
