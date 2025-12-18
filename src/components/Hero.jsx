import { useEffect, useState } from "react";

const roles = [
  "a Python Developer",
  "a Web Developer",
  "an AI/ML Enthusiast",
  "a Salesforce Administrator",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 60 : 120;
    const pauseAfterWord = 800;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, charIndex === current.length && !isDeleting ? pauseAfterWord : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h4 className="hero-tag">Hello!, I'm</h4>

          <h1>
            Arnav <span>Kaneriya</span>
          </h1>

          <p className="hero-subtitle-top hero-main-subtitle">
            Bridging data, design and cloud to build scalable digital experiences.
          </p>

          <h3 className="typing-text hero-role">
            I am <span>{text}</span>
          </h3>

          <div className="btns">
            <a
              href="/portfolio-react/assests/Arnav_Kaneriya_Resume.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s Talk
            </a>

            <div className="hero-socials">
              <a
                href="https://github.com/Arnav-techh"
                className="icon-btn hero-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/arnav-kaneriya"
                className="icon-btn hero-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/arnav_kaneriya/"
                className="icon-btn hero-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-circle">
            <img
              src="/portfolio-react/assests/profile.jpg"
              alt="Arnav Kaneriya"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
