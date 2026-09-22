import { Link } from "react-router-dom";

function ProjectCard({
  id,
  name,
  description,
  technologies,
  category,
}) {
  return (
    <div className="project-card">
      <h3>{name}</h3>

      <p>{description}</p>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      <Link to={`/project/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProjectCard;