import React from "react";

class AppFooterLogo extends React.Component {
  render() {
    return (
      <div className="col-12 col-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="d-block mb-2"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Product</title>
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
        </svg>
        <small className="d-block mb-3 text-muted">© 2017–2021</small>
      </div>
    );
  }
}

export default AppFooterLogo;
