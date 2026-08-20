import React from "react";
import "./About.css";

function About() {

  return (
    <section id="about" className="about-section">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="profile-figure">

          <img
            src="/Screenshot_20250829_004710_Samsung Internet.jpg"
            alt="profile pic"
            width="200"
          />

          <figcaption>
            <h3>Apeksha - web developer</h3>
          </figcaption>

        </figure>

        <div className="about-text">

          <h3>
            I love building things on the web.
            Currently learning HTML, CSS,
            JAVASCRIPT and REACT.
          </h3>

        </div>

      </div>

    </section>
  );
}

export default About;