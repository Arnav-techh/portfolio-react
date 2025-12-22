// src/components/Achievements.jsx

const Certificate = () => {
  return (
<section id="certificates" className="achievements">
      <h2
        className="title"
        data-aos="fade-up"
        data-aos-duration="800"
      >Certifications<div className="underline"></div>
      </h2>

      <div
        className="ach-grid"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
      >
        {/* Row 1: 3 cards */}
        <div className="ach-row">
          {/* Full Stack Development */}
          <article
            className="ach-card"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <div className="ach-body">
              <div className="ach-header">
                <div className="ach-badge-icon">★</div>
                <h3>Full Stack Development</h3>
              </div>
              <p className="ach-tagline">
                Training covering frontend and backend web development with
                hands-on projects.
              </p>
              <p className="ach-meta">Certificate</p>
              <div className="ach-links-row">
                <a
                  href="assests/full-stack-cert.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="ach-link"
                >
                  View Certificate (PDF)
                </a>
              </div>
            </div>
          </article>

          {/* Python Essentials + Django */}
          <article
            className="ach-card"
            data-aos="zoom-in"
            data-aos-delay="350"
            data-aos-duration="700"
          >
            <div className="ach-body">
              <div className="ach-header">
                <div className="ach-badge-icon">★</div>
                <h3>Python Essentials &amp; Python + Django</h3>
              </div>
              <p className="ach-tagline">
                Core Python foundations and web development with Django.
              </p>
              <p className="ach-meta">Certificate &amp; Online Assessment</p>
              <div className="ach-links-row">
                <a
                  href="/portfolio/assests/Python_cert.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="ach-link"
                >
                  View Certificate (PDF)
                </a>
                <a
                  href="https://www.hackerrank.com/profile/ArnavKaneriya"
                  target="_blank"
                  rel="noreferrer"
                  className="ach-link secondary"
                >
                  HackerRank Profile
                </a>
              </div>
            </div>
          </article>

          {/* Cloud Computing */}
          <article
            className="ach-card"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <div className="ach-body">
              <div className="ach-header">
                <div className="ach-badge-icon">☁</div>
                <h3>Cloud Computing</h3>
              </div>
              <p className="ach-tagline">
                Fundamentals of cloud platforms, services and deployment models.
              </p>
              <p className="ach-meta">Certificate</p>
              <div className="ach-links-row">
                <a
                  href="/portfolio/assests/Cloud_Computing_Essentials.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="ach-link"
                >
                  View Certificate (PDF)
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Row 2: 2 cards */}
        <div className="ach-row">
          {/* Specialized AI Associate Training */}
          <article
            className="ach-card"
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-duration="700"
          >
            <div className="ach-body">
              <div className="ach-header">
                <div className="ach-badge-icon">🤖</div>
                <h3>Specialized AI Associate Training</h3>
              </div>
              <p className="ach-tagline">
                Industrial training focused on AI workflows, model building and
                deployment.
              </p>
              <p className="ach-meta">Industrial Training Certificate</p>
              <div className="ach-links-row">
                <a
                  href="/portfolio/assests/AI_Training.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="ach-link"
                >
                  View Certificate (PDF)
                </a>
              </div>
            </div>
          </article>

          {/* Automated Machine Learning */}
          <article
            className="ach-card"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <div className="ach-body">
              <div className="ach-header">
                <div className="ach-badge-icon">⚙</div>
                <h3>Automated Machine Learning</h3>
              </div>
              <p className="ach-tagline">
                Built ML solutions using AutoML tools for automated model
                selection.
              </p>
              <p className="ach-meta">Certificate</p>
              <div className="ach-links-row">
                <a
                  href="/portfolio/assests/Automated Machine Learning.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="ach-link"
                >
                  View Certificate (PDF)
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
