import React from "react";

class AppHeaderLabels extends React.Component {
  render() {
    return (
      <a className="py-2 d-none d-md-inline-block" href="#">
        {this.props.label}
      </a>
    );
  }
}

export default AppHeaderLabels;
