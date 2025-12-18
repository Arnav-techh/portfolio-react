const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="title">
        Experience<div className="underline"></div>
      </h2>

      <div className="exp-card">
        <div className="exp-content">
          <div>
            <h3>Web Developer Intern</h3>
            <span>Digital Savers Pvt. Ltd. | Jan 2025 – May 2025</span>
            <ul>
              <li>Developed responsive UIs using React.js</li>
              <li>Integrated REST APIs for real‑time data</li>
              <li>Worked in agile sprints and code reviews</li>
            </ul>
          </div>
          <a
            href="/portfolio-react/assests/web-dev-internship.pdf"
            className="exp-doc-link"
            target="_blank"
            rel="noreferrer"
            title="View certificate"
          >
            <div className="exp-doc-inner">
              <i className="bx bxs-file-pdf"></i>
            </div>
          </a>
        </div>
      </div>

      <div className="exp-card">
        <div className="exp-content">
          <div>
            <h3>Industrial Training – RPA (UiPath)</h3>
            <span>June 2024 – Aug 2024</span>
            <ul>
              <li>Built automation workflows using UiPath</li>
              <li>Automated repetitive business processes</li>
              <li>Hands‑on experience with bots & orchestration</li>
            </ul>
          </div>
          <a
            href="/portfolio-react/assests/uipath-training.pdf"
            className="exp-doc-link"
            target="_blank"
            rel="noreferrer"
            title="View certificate"
          >
            <div className="exp-doc-inner">
              <i className="bx bxs-file-pdf"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
