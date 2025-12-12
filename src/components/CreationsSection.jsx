import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AbayImg from "../assets/abay.png";
import BunaMarImg from "../assets/BunaMar.png";
import Gym from "../assets/gym.jpg";
import Ela from "../assets/ela.png";
import Lkai from "../assets/lkai.png";

function CreationsSection() {
  const creationsData = [
    {
      name: "BUNA",
      highlight: "MAR",
      image: BunaMarImg,
      alt: "Buna Mar Coffee Shop Interior Design by ZYN Interior Design - Modern coffee shop with natural warmth, wooden accents, and amber-toned details in Addis Ababa",
      description:
        "The Bio Lab Interior: A clean, modern aesthetic infused with natural warmth. White walls, wooden accents, and soft lighting are complemented by potted plants and amber-toned details. A central bar area with sleek seating and display shelves creates a functional yet inviting space, subtly enhanced with brand identity.",
    },
    {
      name: "ABAY",
      highlight: "TV",
      image: AbayImg,
      alt: "Abay TV Broadcast Studio Interior Design by ZYN Interior Design - Modern broadcast studio with circular lighting and professional broadcasting facilities in Ethiopia",
      description:
        "Modern Broadcast Studio Design: A sophisticated space for Abay Radio and HFI News, featuring sleek circular lighting, integrated branding, and strategic illumination. The design balances contemporary aesthetics with optimal acoustic functionality for professional broadcasting.",
    },
    {
      name: "GYM",
      highlight: "TIME",
      image: Gym,
      alt: "Gym Time Fitness Center Interior Design by ZYN Interior Design - Dynamic gym with industrial lighting and motivating aesthetics in Addis Ababa",
      description:
        "Dynamic Gym Interior Design: A functional and inspiring space combining robust equipment layouts with motivating aesthetics. Industrial lighting, custom wall graphics, and a durable material palette create an energetic environment for focused workouts.",
    },
    {
      name: "ELA",
      highlight: "TV",
      image: Ela,
      alt: "Ela TV Office Interior Design by ZYN Interior Design - Modern collaborative workspace with open workstations and innovative design in Ethiopia",
      description:
        "A sleek and collaborative workspace that balances functionality with modern design. Featuring open workstations, bold branding, and a welcoming reception, the office fosters creativity, productivity, and innovation.",
    },
    {
      name: "OLKAI",
      highlight: "COFFEE ROASTERS",
      image: Lkai,
      alt: "Olkai Coffee Roasters Interior Design by ZYN Interior Design - Cozy modern coffee shop with natural textures and warm lighting in Addis Ababa",
      description:
        "A cozy and modern coffee shop designed with natural textures, warm lighting, and open layouts. The space blends comfort with sophistication, creating the perfect atmosphere to enjoy coffee and connection.",
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
            <article className="creation-card">
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
                <button className="creation-btn" aria-label={`View ${creation.name} ${creation.highlight} project details`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CreationsSection;
