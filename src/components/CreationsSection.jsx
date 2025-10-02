import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AbayImg from "../assets/abay.png";
import BunaMarImg from "../assets/BunaMar.png";

function CreationsSection() {
  const creationsData = [
    {
      name: "BUNA",
      highlight: "MAR",
      image: BunaMarImg, // ← use imported variable
      alt: "Buna Mar",
      description:
        "We are a team of passionate creators and problem-solvers, dedicated to turning bold ideas into meaningful experiences. Combining innovation, design, and technology, we strive to build solutions that simplify life, inspire growth, and connect people to what truly matters.",
    },
    {
      name: "ABAY",
      highlight: "TV",
      image: AbayImg, // ← use imported variable
      alt: "Abay TV",
      description:
        "We are a team of passionate creators and problem-solvers, dedicated to turning bold ideas into meaningful experiences. Combining innovation, design, and technology, we strive to build solutions that simplify life, inspire growth, and connect people to what truly matters.",
    },
    {
      name: "BUNA",
      highlight: "MAR",
      image: BunaMarImg,
      alt: "Buna Mar",
      description:
        "We are a team of passionate creators and problem-solvers, dedicated to turning bold ideas into meaningful experiences. Combining innovation, design, and technology, we strive to build solutions that simplify life, inspire growth, and connect people to what truly matters.",
    },
    {
      name: "ABAY",
      highlight: "TV",
      image: AbayImg,
      alt: "Abay TV",
      description:
        "We are a team of passionate creators and problem-solvers, dedicated to turning bold ideas into meaningful experiences. Combining innovation, design, and technology, we strive to build solutions that simplify life, inspire growth, and connect people to what truly matters.",
    },
  ];

  return (
    <section className="creations-section" id="projects">
      <h2 className="creations-title">
        OUR <span className="creations-highlight">CREATIONS</span>
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="creations-swiper"
      >
        {creationsData.map((creation, index) => (
          <SwiperSlide key={index}>
            <div className="creation-card">
              <div className="creation-image">
                <img src={creation.image} alt={creation.alt} />
              </div>
              <div className="creation-content">
                <h3 className="creation-name">
                  {creation.name}{" "}
                  <span className="creation-name-highlight">
                    {creation.highlight}
                  </span>
                </h3>
                <p className="creation-description">{creation.description}</p>
                <button className="creation-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CreationsSection;
