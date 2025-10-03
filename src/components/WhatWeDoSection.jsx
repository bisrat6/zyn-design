import React from "react";

function WhatWeDoSection() {
  const cards = [
    {
      title: "INTERIOR CONSULTATION",
      text: "Crafting homes that reflect your personality and lifestyle,balancing comfort with style.",
    },
    {
      title: "HOSPITALITY DESIGN",
      text: " Hotels, restaurants and lounges with guest-centric flow and identity.",
    },
    {
      title: "RESIDENTIAL DESIGN",
      text: "Full-service, from concept to design; kitchens, living rooms, whole-home schemes.",
    },
    {
      title: "COMMERCIAL DESIGN",
      text: " Offices, retail and showrooms that reflect brand and boost productivity.",
    },
  ];
  return (
    <section className="what-section" id="services">
      <div className="what-left">
        <h2 className="what-title">
          WHAT <span className="what-highlight">WE</span> DO?
        </h2>
        <p className="what-description">
          Transforming spaces into functional, stylish, and inspiring
          environments.
        </p>
        <a className="what-btn" href="#contact">
          Contact us
        </a>
      </div>
      <div className="what-right">
        {cards.map((card) => (
          <WhatCard title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
}

function WhatCard({ title, text }) {
  const [first, ...rest] = title.split(" ");
  const second = rest.join(" ");
  return (
    <div className="what-card">
      <h3 className="what-card-title">
        {first} <span className="what-card-highlight">{second}</span>
      </h3>
      <p className="what-card-text">{text}</p>
    </div>
  );
}
export default WhatWeDoSection;
