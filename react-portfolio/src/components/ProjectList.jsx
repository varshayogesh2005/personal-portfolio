import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h2>My Projects</h2>

      <div className="project-controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button onClick={() => setCategory("All")}>All</button>

        <button onClick={() => setCategory("Web")}>Web</button>

        <button onClick={() => setCategory("JavaScript")}>
          JavaScript
        </button>

        <button onClick={() => setCategory("React")}>React</button>
      </div>

      <div className="project-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              category={project.category}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default ProjectList;