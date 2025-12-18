import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.ok) throw new Error(data.error || "Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="title">
        Get In Touch<div className="underline"></div>
      </h2>
      <div className="contact-grid">
        <div className="contact-card contact-profile">
          <div className="contact-photo-wrap">
            <img
              src="/portfolio-react/assests/arnav.jpg"
              alt="Arnav Kaneriya"
            />
          </div>
          <p className="contact-tagline">
            Need a dev, a teammate, or just a meme partner? I’m available.
          </p>
          <div className="contact-info">
            <p>
              <i className="bx bxs-phone"></i> +91 798998850
            </p>
            <p>
              <i className="bx bxs-map"></i> Indore, Madhya Pradesh, India
            </p>
          </div>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/arnav-kaneriya"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/Arnav-techh"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/arnav_kaneriya/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>

        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={{ marginTop: "1rem", color: "#4ade80", fontSize: "1.4rem" }}>
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p style={{ marginTop: "1rem", color: "#f97373", fontSize: "1.4rem" }}>
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
