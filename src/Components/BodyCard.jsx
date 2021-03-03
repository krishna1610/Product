import React from "react";

class BodyCard extends React.Component {
  render() {
    const mystyle = {
      width: "80%",
      height: "300px",
    };
    return (
      <div
        className={`${this.props.bgClassName} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}
      >
        <div className="my-3 py-3">
          <h2 className="display-5">{this.props.headerName}</h2>
          <p className="lead">{this.props.paraText}</p>
        </div>
        <div
          className={`${this.props.deviceClassName} shadow-sm mx-auto custom`}
          style={mystyle}
        ></div>
      </div>
    );
  }
}

export default BodyCard;
