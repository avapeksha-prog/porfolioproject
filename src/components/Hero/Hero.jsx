import React from "react";
import "./Hero.css";

function Hero() {

  const currentHour = new Date().getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  return (
    <section className="hero-section" id="hero">

      <h1>
        {greeting}, Hi, I'm Apeksha✌️
      </h1>

      <h2>
        <p className="tagline">
          I'm a passionate web Developer from Bengaluru
        </p>
      </h2>

      <div className="hero-button">

        <a
          href="#projects"
          className="btn btn-primary"
        >
          View my Project
        </a>

        <a
          href="#contact"
          className="btn btn-secondary"
        >
          Contact me
        </a>

      </div>

    </section>
  );
}

export default Hero;