import React from "react";

function Error(props) {
  return (
    <>
      <div className="container">
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "90px" }}
        >
          <h2>Error: Can not fetch data - Too many requests.</h2>
        </div>
      </div>
    </>
  );
}

export default Error;
