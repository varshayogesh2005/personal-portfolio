import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <h1>My Projects</h1>

          <p>
            Here are some of the projects I have worked on while learning
            web development and React.
          </p>
        </section>

        <ProjectList />
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;