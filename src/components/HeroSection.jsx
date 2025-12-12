import React from "react";
import ZynLogo from "../assets/zyn-logo.svg";

const heroTextLeft =
  "We are a team of passionate creators and problem solvers, focused on turning big ideas into valuable experiences. By combining innovation, design, and technology, we create solutions that make life easier.";
const heroTextRight =
  "At ZYN Interior Design, we transform spaces with creativity and elegance. We craft interiors that reflect your unique style and personality. Every detail is thoughtfully designed to inspire and captivate.";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <HeroBox className={"hero-left"} heroDescription={heroTextLeft}>
          <div className="brand-name">
            <img src={ZynLogo} alt="ZYN Interior Design - Luxury Interior Design Services in Addis Ababa, Ethiopia" />
          </div>
        </HeroBox>
        <HeroBox className={"hero-right"} heroDescription={heroTextRight}>
          <a className="contact-btn" href="#contact">
            Contact us
          </a>
        </HeroBox>
      </div>
    </section>
  );
}

function HeroBox({ children, className, heroDescription }) {
  const isLeft = className === "hero-left";
  const isRight = className === "hero-right";

  return (
    <div className={className}>
      {isLeft && children}

      <p className="hero-description">{heroDescription}</p>

      {isLeft && <h1 className="headline-line1">Crafting Timeless Luxury</h1>}

      {isRight && children}
    </div>
  );
}

export default HeroSection;
