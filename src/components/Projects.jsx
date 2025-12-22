const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        Featured Projects<div className="underline"></div>
      </h2>

      <div className="proj-grid" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
        
        {/* First Row */}
        <div className="proj-row" data-aos="fade-up" data-aos-delay="300">
          
          {/* MediTrack */}
          <article className="proj-card" data-aos="zoom-in" data-aos-delay="350" data-aos-duration="800">
            <div className="proj-thumb">
              <img
                src="/portfolio/assests/meditrack.jpg"
                alt="MediTrack – Say No to Drugs"
              />
            </div>
            <div className="proj-body">
              <h3>MediTrack – Say No to Drugs</h3>
              <p className="proj-tagline">
                Digital health platform promoting safe medication and anti-drug awareness.
              </p>
              <p className="proj-tech">
                React · Bootstrap · MUI · Framer Motion · Google Maps API
              </p>
              <a
                href="https://github.com/Arnav-techh/MediTrack"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                View on GitHub
              </a>
            </div>
          </article>

          {/* SMS Spam */}
          <article className="proj-card" data-aos="zoom-in" data-aos-delay="450" data-aos-duration="800">
            <div className="proj-thumb">
              <img
                src="/portfolio/assests/sms-spam.jpg"
                alt="SMS Spam Detection"
              />
            </div>
            <div className="proj-body">
              <h3>SMS Spam Detection</h3>
              <p className="proj-tagline">
                ML app that classifies SMS as spam or ham with a full end-to-end pipeline.
              </p>
              <p className="proj-tech">
                Python · Pandas · Scikit-learn · NLTK · Streamlit
              </p>
              <a
                href="https://github.com/Arnav-techh/SMS-Spam-Detection"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                View on GitHub
              </a>
            </div>
          </article>

          {/* Python Paint */}
          <article className="proj-card" data-aos="zoom-in" data-aos-delay="550" data-aos-duration="800">
            <div className="proj-thumb">
              <img
                src="/portfolio/assests/py-paint.jpg"
                alt="Python Paint Application"
              />
            </div>
            <div className="proj-body">
              <h3>Python Paint Application</h3>
              <p className="proj-tagline">
                Tkinter-based desktop drawing app with multiple tools and color controls.
              </p>
              <p className="proj-tech">Python · Tkinter</p>
              <a
                href="https://github.com/Arnav-techh/Python-Paint-Project"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                View on GitHub
              </a>
            </div>
          </article>
        </div>

        {/* Second Row - Centered */}
        <div className="proj-row" data-aos="fade-up" data-aos-delay="650">
          
          {/* SaaS Builder */}
          <article className="proj-card" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="800">
            <div className="proj-thumb">
              <img
                src="/portfolio/assests/saas-web.jpeg"
                alt="SaaS Website Builder"
              />
            </div>
            <div className="proj-body">
              <h3>SaaS Website Builder</h3>
              <p className="proj-tagline">
                Drag-and-drop platform for creating responsive websites without code.
              </p>
              <p className="proj-tech">
                React · Node · Express · MongoDB · AWS
              </p>
              <a
                href="https://github.com/Arnav-techh/SAAS-Website-Builder"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                View on GitHub
              </a>
            </div>
          </article>

          {/* Salesforce Portal */}
          <article className="proj-card" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="900">
            <div className="proj-thumb">
              <img
                src="/portfolio/assests/salesforce-p.jpeg"
                alt="Salesforce Project Management Portal"
              />
            </div>
            <div className="proj-body">
              <h3>Salesforce Project Management Portal</h3>
              <p className="proj-tagline">
                Role-based portal on Experience Cloud for managing projects, sprints and backlogs.
              </p>
              <p className="proj-tech">
                Apex · LWC · Experience Cloud · Custom Objects · Triggers
              </p>
              <a href="#" target="_blank" rel="noreferrer" className="proj-link">
                Case Study / Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
