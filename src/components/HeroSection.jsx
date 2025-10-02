import React from "react";
import LogoSvg from "../src/assets/z-logo.svg";
import ZynLogo from "../src/assets/zyn-logo.svg";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-left">
          <div className="brand-name">
            <img src="./src/assets/zyn-logo.svg" alt="ZYN" />
          </div>
          <p className="hero-description">
          We are a team of passionate creators and problem-solvers, dedicated to turning bold
            ideas into meaningful experiences. Combining innovation, design, and technology, we
            strive to build solutions that simplify life.
          </p>
          <div className="headline-line1">Crafting Timeless Luxury</div>
        </div>
        <div className="hero-right">
          <p className="hero-description">
          We are a team of passionate creators and problem-solvers, dedicated to turning bold
            ideas into meaningful experiences. Combining innovation, design, and technology, we
            strive to build solutions that simplify life.
          </p>
          <a className="contact-btn" href="#contact">Contact us</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
