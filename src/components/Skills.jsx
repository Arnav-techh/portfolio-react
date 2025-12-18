const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="title">
        Skills &amp; Expertise<div className="underline"></div>
      </h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h4>Programming Languages</h4>
          <span>Python, C/C++, Java, R</span>
        </div>
        <div className="skill-card">
          <h4>Web Development</h4>
          <span>HTML, CSS, JavaScript, React.js</span>
        </div>
        <div className="skill-card">
          <h4>Data &amp; ML</h4>
          <span>NumPy, Pandas, Matplotlib, Streamlit</span>
        </div>
        <div className="skill-card">
          <h4>Databases</h4>
          <span>MySQL, PostgreSQL</span>
        </div>
        <div className="skill-card">
          <h4>Version Control</h4>
          <span>Git, GitHub, Bitbucket</span>
        </div>
        <div className="skill-card">
          <h4>Tools &amp; Platforms</h4>
          <span>VS Code, PyCharm, Jupyter, Anaconda, Salesforce</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
