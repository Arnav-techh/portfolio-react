import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  // Initial load: localStorage se theme uthao
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initial = savedTheme === "light" ? "light" : "dark";
    setTheme(initial);

    if (initial === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);

  // Button click pe theme toggle
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);

    if (next === "light") {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header>
      <div className="nav">
        <div className="logo-wrap">
          <div className="logo">Arnav Kaneriya</div>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={theme === "light" ? "bx bx-sun" : "bx bx-moon"}></i>
          </button>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
