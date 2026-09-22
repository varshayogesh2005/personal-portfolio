import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="about-page">
          <h1>About Me</h1>

          <p>
            I am a Computer Science and Design Engineering student interested
            in software development, web technologies, UI design, and building
            practical projects.
          </p>

          <p>
            I enjoy learning new technologies and applying them to real-world
            projects. My current focus includes JavaScript, React, frontend
            development, Git, and modern web development.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h2>Education</h2>

              <h3>Computer Science and Design Engineering</h3>

              <p>
                Currently pursuing my undergraduate degree with an interest in
                software development, design, and modern technology.
              </p>
            </div>

            <div className="about-card">
              <h2>What I Do</h2>

              <ul>
                <li>Frontend Web Development</li>
                <li>React Development</li>
                <li>JavaScript Programming</li>
                <li>UI and Responsive Design</li>
                <li>Git and GitHub</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;