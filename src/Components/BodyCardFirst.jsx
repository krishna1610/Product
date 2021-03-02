import React from "react";

class BodyCardFirst extends React.Component {
  render() {
    const mystyle = {
      width: "80%",
      height: "300px",
    };
    return (
      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-light shadow-sm mx-auto custom"
          style={mystyle}
        ></div>
      </div>
    );
  }
}

export default BodyCardFirst;
