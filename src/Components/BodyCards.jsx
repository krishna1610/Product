import React from "react";
import BodyCard from "./BodyCard";

class AppBody extends React.Component {
  render() {
    return (
      <>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCard
            bgClassName="bg-dark text-white"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-light"
          />
          <BodyCard
            bgClassName="bg-light"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-dark"
          />
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCard
            bgClassName="bg-light"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-dark"
          />
          <BodyCard
            bgClassName="bg-primary text-white"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-light"
          />
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCard
            bgClassName="bg-light"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-body"
          />
          <BodyCard
            bgClassName="bg-light"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-body"
          />
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <BodyCard
            bgClassName="bg-light"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-body"
          />
          <BodyCard
            bgClassName="bg-light"
            headerName="Another headline"
            paraText="And an even wittier subheading."
            deviceClassName="bg-body"
          />
        </div>
      </>
    );
  }
}

export default AppBody;
