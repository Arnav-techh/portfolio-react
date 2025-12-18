const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="title">
        Education<div className="underline"></div>
      </h2>
      <div className="edu-grid">
        <div className="edu">
          <span className="edu-pill">2021 – 2025</span>
          <h3>B.Tech CSE</h3>
          <p>Medi‑Caps University, Indore</p>
          <p className="edu-meta">CGPA 7.3 / 10</p>
        </div>
        <div className="edu">
          <span className="edu-pill">Completed 2021</span>
          <h3>Class XII</h3>
          <p>R.R.M.B Gujarati School, Indore</p>
          <p className="edu-meta">73%</p>
        </div>
        <div className="edu">
          <span className="edu-pill">Completed 2019</span>
          <h3>Class X</h3>
          <p>R.R.M.B Gujarati School, Indore</p>
          <p className="edu-meta">72%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
