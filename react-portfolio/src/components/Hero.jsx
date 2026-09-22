import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Hello, I'm Varsha</h1>

      <h2>Computer Science and Design Engineering Student</h2>

      <p>
        I build responsive websites and interactive applications using
        modern web technologies.
      </p>

      <Link to="/projects">
        <button>Explore Projects</button>
      </Link>
    </section>
  );
}

export default Hero;