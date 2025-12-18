const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">
        About Me<div className="underline"></div>
      </h2>
      <div className="about-grid">
        <div>
          <p>
            I'm an ambitious Computer Science graduate from Indore, India, with a deep interest
            in Artificial Intelligence and Machine Learning.
          </p>
          <p>
            With experience across Python, C++, React.js, AI/ML and Salesforce, I enjoy building
            scalable, real‑world solutions.
          </p>
          <p>
            I constantly strive to grow as a software engineer and build technology that creates impact.
          </p>
        </div>
        <div className="facts">
          <h3>Quick Facts</h3>
          <ul>
            <li>📍 Indore, India</li>
            <li>🎓 B.Tech CSE (2021‑2025)</li>
            <li>📊 Python | Web Development | AI/ML | Salesforce Admin</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
