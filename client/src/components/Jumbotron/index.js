import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (

    <div
      style={{ height: 200, clear: "both", textAlign: "center", color: "black"}}
      className="jumbotron">
      {children}
    </div>

  );
}

export default Jumbotron;
