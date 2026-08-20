import React from "react";
import "./Skills.css";

function Skills() {

  const skills = [
    {
      name: "HTML",
      level: 90
    },
    {
      name: "CSS",
      level: 80
    },
    {
      name: "JAVASCRIPT",
      level: 70
    },
    {
      name: "REACT",
      level: 60
    },
    {
      name: "python",
      level: 85
    },
    {
      name: "C program",
      level: 95
    }
  ];

  return (
    <section
      id="skills"
      className="skills-section"
    >

      <h2>My Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-item"
            data-level={skill.level}
            key={skill.name}
          >
            {skill.name}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;