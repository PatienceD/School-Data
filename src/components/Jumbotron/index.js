import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 155, textAlign: "center", margin: "22px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;