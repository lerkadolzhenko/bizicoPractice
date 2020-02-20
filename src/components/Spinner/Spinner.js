import React from "react";
import "./spinner.scss";

export const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-container">
        <div className="spinner-border spinner-decor" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
