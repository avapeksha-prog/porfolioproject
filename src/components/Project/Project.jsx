import React, { useState } from "react";
import "./project.css";

function Project() {

  const projects = [
    {
      id: 1,
      name: "Product Management",
      category: "web",
      image: "/management.jpg",
      tech: ["React", "API"]
    },

    {
      id: 2,
      name: "Video Editing ",
      category: "design",
      image: "/editing.jpg",
      tech: ["JavaScript", "React"]
    },

    {
      id: 3,
      name: "Build Robot ",
      category: "web",
      image: "/robot.jpg",
      tech: ["HTML", "CSS"]
    },

    {
      id: 4,
      name: "Human Smartness",
      category: "web",
      image: "/Human.jpg",
      tech: ["JavaScript", "react"]
    }
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );

  return (
    <section
      id="projects"
      className="project-section"
    >

      <h2>My Projects</h2>

      <div className="filter-buttons">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>

        <button
          className={
            filter === "design" ? "active" : ""
          }
          onClick={() => setFilter("design")}
        >
          Design
        </button>

      </div>

      <div className="project-grid">

        {filteredProjects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">

              <h3>{project.name}</h3>

              <p>
                {project.name ===
                "Product Management"
                  ? "Product management project using modern web technologies."
                  : project.name === "Video Editing"
                  ? "Video editing project using JavaScript."
                  : project.name === "Build Robot"
                  ? "Robot building project using HTML and CSS."
                  : "Project based on human smartness and JavaScript."}
              </p>

              <div className="project-tags">

                {project.tech.map((technology) => (

                  <span
                    className="tag"
                    key={technology}
                  >
                    {technology}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="btn btn-primary"
                >
                  Github
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Project;