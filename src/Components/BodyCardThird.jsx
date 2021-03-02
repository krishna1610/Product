import React from "react";

class BodyCardThird extends React.Component {
  render() {
    const mystyle = {
      width: "80%",
      height: "300px",
    };
    return (
      <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto custom" style={mystyle}></div>
      </div>
    );
  }
}

export default BodyCardThird;
