import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        src={require("../images/messi.jpg")}
        alt="messi"
        className="card--image"
      />
      <div className="card--stats">
        <img src={require("../images/star.png")} height="14px" />
        <span> 5.0 </span>
        <span className="gray"> (6) | </span>
        <span className="gray"> Argentina</span>
      </div>
      <p>Messis WC wining Photo</p>
      <p>
        <span className="bold">From $50</span> / person
      </p>
    </div>
  );
}
