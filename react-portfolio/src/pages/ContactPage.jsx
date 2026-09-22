import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Your message has been submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setSuccess("");
    }
  }

  function handleReset() {
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
    setSuccess("");
  }

  return (
    <>
      <Navbar />

      <main>
        <section>
          <h1>Contact Me</h1>

          <p>
            Have a project idea, question, or opportunity? Feel free to get
            in touch.
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name</label>
              <br />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <p>{errors.fullName}</p>
            </div>

            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p>{errors.email}</p>
            </div>

            <div>
              <label>Subject</label>
              <br />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <p>{errors.subject}</p>
            </div>

            <div>
              <label>Message</label>
              <br />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <p>{errors.message}</p>
            </div>

            <button type="submit">Submit</button>

            <button type="button" onClick={handleReset}>
              Reset
            </button>

            {success && <p>{success}</p>}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;