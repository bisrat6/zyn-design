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
    "We are a team of passionate creators and problem solvers, turning bold ideas into impactful experiences. By blending innovation, design, and technology, we build solutions that make life easier, encourage growth, and connect people to what matters most.";
  const aboutText2 =
    "As a team of creators and innovators, we transform bold ideas into meaningful experiences. Through the power of design, innovation, and technology, we craft solutions that simplify everyday life, spark growth, and bring people closer to what truly inspires them.";

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
