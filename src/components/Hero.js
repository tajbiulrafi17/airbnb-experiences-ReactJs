import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={require("../images/experiences-background.png")}
        alt="airbnb-experiences"
        className="hero--photo"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
