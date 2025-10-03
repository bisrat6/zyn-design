import React from "react";
import { useState, useEffect } from "react";
import LogoSvg from "../assets/z-logo.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Logo />
      <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Hamburger toggleMenu={toggleMenu} />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={LogoSvg} alt="logo" />
    </div>
  );
}

function Nav({ menuOpen, toggleMenu }) {
  return (
    <nav className={`nav ${menuOpen ? "open" : ""}`}>
      <NavLink href="#home" toggleMenu={toggleMenu}>
        Home
      </NavLink>
      <NavLink href="#about" toggleMenu={toggleMenu}>
        About
      </NavLink>
      <NavLink href="#services" toggleMenu={toggleMenu}>
        Services
      </NavLink>
      <NavLink href="#projects" toggleMenu={toggleMenu}>
        Projects
      </NavLink>
    </nav>
  );
}

function Hamburger({ toggleMenu }) {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

function NavLink({ href, children, toggleMenu }) {
  return (
    <a href={href} className="nav-link" onClick={toggleMenu}>
      {children}
    </a>
  );
}

export default Header;
