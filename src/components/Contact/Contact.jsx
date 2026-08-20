import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const [sending, setSending] =
    useState(false);

  const [sent, setSent] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email =
        "Enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSending(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setSending(false);
    setSent(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >

      <h2>Contact Me</h2>

      <h2>
        <p>Have a project in mind</p>
      </h2>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Your Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error-msg">
              {errors.name}
            </span>
          )}

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Your Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-msg">
              {errors.email}
            </span>
          )}

        </div>

        <div className="form-group">

          <label htmlFor="subject">
            Subject
          </label>

          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          >

            <option value="">
              Select a topic
            </option>

            <option value="hire">
              I want to hire you
            </option>

            <option value="collab">
              I want to collaborate
            </option>

            <option value="others">
              Others
            </option>

          </select>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="Tell me about your project.."
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error-msg">
              {errors.message}
            </span>
          )}

        </div>

        <button
          type="submit"
          disabled={sending}
        >
          {sending
            ? "Sending..."
            : sent
            ? "✅ Message sent"
            : "Send Message 👍"}
        </button>

      </form>

      <p>
        Email:{" "}
        <a href="mailto:avapeksha@gmail.com">
          avapeksha@gmail.com
        </a>
      </p>

    </section>
  );
}

export default Contact;