import React from "react";

function LowerSection() {
  return (
    <section className="lower-section" id="about">
      <StatsCard />
      <AboutCard />
    </section>
  );
}

function StatsCard() {
  return (
    <div className="stats-card">
      <p className="stats-description">
        Kingsguard protect him, and word eventually spreads that Rhaegar's heir
        is alive.
      </p>
      <div className="stats-numbers">
        <Stats statNum={"150+"} label={"Completed Projects"} />
        <Stats statNum={"35+"} label={"Happy Clients"} />
      </div>
    </div>
  );
}

function Stats({ statNum, label }) {
  return (
    <div className="stat-item">
      <div className="stat-number">{statNum}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function AboutCard() {
  const aboutText1 =
    "We are a team of passionate creators and problem-solvers, dedicated to turning bold ideas into meaningful experiences. At ZYN Interior Design, we blend innovation, design, and craftsmanship to create spaces that not only look extraordinary but also feel effortless to live in.";
  const aboutText2 =
    "Our approach goes beyond aesthetics—we build solutions that simplify life, inspire growth, and connect people to what truly matters. Every project is a collaboration, every detail intentional, and every space a reflection of those who inhabit it.";

  return (
    <div className="about-card">
      <h2 className="about-title">
        <span className="title-who">WHO </span>
        <span className="title-we">WE ARE?</span>
      </h2>
      <AboutDescription aboutDescription={aboutText1} />
      <AboutDescription aboutDescription={aboutText2} />
    </div>
  );
}

function AboutDescription({ aboutDescription }) {
  return <p className="about-description">{aboutDescription}</p>;
}
export default LowerSection;
