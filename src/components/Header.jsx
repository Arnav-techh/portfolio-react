import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [activeNav, setActiveNav] = useState('#about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // NEW

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

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    document.querySelector(navId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);  // Mobile menu close on click
  };

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
    <header className="transparent-header">
      <div className="nav">
        <div className="logo-wrap">
          <div className="logo">Arnav Kaneriya</div>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={theme === "light" ? "bx bx-sun" : "bx bx-moon"}></i>
          </button>
          
          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className='bx bx-menu'></i>
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#about" 
            className={activeNav === '#about' ? 'active' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeNav === '#skills' ? 'active' : ''}
            onClick={() => handleNavClick('#skills')}
          >
            Skills
          </a>
          <a 
            href="#certificates"
            className={activeNav === '#certificates' ? 'active' : ''}
            onClick={() => handleNavClick('#certificates')}
          >
            Certifications
          </a>
          <a 
            href="#projects" 
            className={activeNav === '#projects' ? 'active' : ''}
            onClick={() => handleNavClick('#projects')}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={activeNav === '#experience' ? 'active' : ''}
            onClick={() => handleNavClick('#experience')}
          >
            Experience
          </a>
          <a 
            href="#education" 
            className={activeNav === '#education' ? 'active' : ''}
            onClick={() => handleNavClick('#education')}
          >
            Education
          </a>
          <a 
            href="#contact" 
            className={activeNav === '#contact' ? 'active' : ''}
            onClick={() => handleNavClick('#contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
