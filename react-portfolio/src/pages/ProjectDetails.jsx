import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <main>
          <section className="project-details">
            <h1>Project Not Found</h1>
            <p>The requested project does not exist.</p>

            <Link to="/projects">
              <button>Back to Projects</button>
            </Link>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="project-details">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>

          <h1>{project.name}</h1>

          <img
            src={project.image}
            alt={project.name}
            className="project-details-image"
          />

          <p className="project-description">
            {project.description}
          </p>

          <div className="details-card">
            <h3>Category</h3>
            <p>{project.category}</p>
          </div>

          <div className="details-card">
            <h3>Technologies</h3>
            <p>{project.technologies.join(", ")}</p>
          </div>

          <div className="details-card">
            <h3>Features</h3>

            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              Project Link
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetails;