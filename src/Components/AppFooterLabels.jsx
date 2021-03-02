import React from "react";

class AppFooterLabels extends React.Component {
  render() {
    return (
      <div className="col-6 col-md">
        <h5>{this.props.labels.headerName}</h5>
        <ul className="list-unstyled text-small">
          {this.props.labels.lists.map((linkName) => {
            return (
              <li>
                <a className="link-secondary" href="#">
                  {linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AppFooterLabels;
