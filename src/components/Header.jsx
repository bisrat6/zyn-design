import React from "react";
import { useState, useEffect } from "react";
import LogoSvg from "../assets/z-logo.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);

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
  }, [])
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className='logo'>
      <img src={LogoSvg} alt='logo'/>
      </div>
      <nav className="nav">
        <div className="logo">
        </div>
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#servies" className="nav-link">Service</a>
        <a href="#projects" className="nav-link">Projects</a>
      </nav>
    </header>
  )
}

export default Header;
