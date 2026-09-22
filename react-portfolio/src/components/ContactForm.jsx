import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="contact-page">
          <h1>Contact Me</h1>

          <p>
            Have a project idea, question, or opportunity? Feel free to get
            in touch.
          </p>

          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;