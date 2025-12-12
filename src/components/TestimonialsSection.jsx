import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function TestimonialsSection() {
  const testimonials = [
    {
      img: "https://ui-avatars.com/api/?name=ABAY+TV&background=8b4513&color=fff&size=100",
      text: "They delivered a modern studio that looks stunning and works flawlessly for our broadcasts.",
      name: "Abay TV",
      role: "BROADCASTER",
      company: "Abay Media",
    },
    {
      img: "https://ui-avatars.com/api/?name=GYM+TIME&background=8b4513&color=fff&size=100",
      text: "The design keeps our members energized and motivated—exactly what we wanted.",
      name: "Gym",
      role: "FITNESS CENTER",
      company: "Gym Time",
    },
    {
      img: "https://ui-avatars.com/api/?name=OLKAI+COFFEE&background=8b4513&color=fff&size=100",
      text: "ZYN Interior Design brought our vision to life—our customers love the atmosphere.",
      name: "Olkai Coffee",
      role: "COFFEE SHOP",
      company: "Olkai Coffee",
    },
    {
      img: "https://ui-avatars.com/api/?name=ELA+TV&background=8b4513&color=fff&size=100",
      text: "ZYN Interior Design brought our vision to life—our customers love the atmosphere.",
      name: "Ela TV",
      role: "MEDIA COMPANY",
      company: "Ela Media",
    },
    {
      img: "https://ui-avatars.com/api/?name=BUNA+MAR&background=8b4513&color=fff&size=100",
      text: "They created a space that feels both professional and welcoming—beyond our expectations.",
      name: "Buna Mar",
      role: "COFFEE SHOP",
      company: "Buna Mar",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">
        WHAT <span className="testimonials-highlight">OUR CLIENTS</span> SAY?
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          // ← this enables auto-swiping
          delay: 4000, // 3 seconds per slide
          disableOnInteraction: false,
        }}
        loop={true} // infinite loop
        spaceBetween={30}
        slidesPerView={3} // number of cards visible
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="testimonial-card" itemScope itemType="https://schema.org/Review">
              <div className="testimonial-header">
                <img
                  src={item.img}
                  alt={`${item.name} - ${item.role} testimonial for ZYN Interior Design`}
                  className="testimonial-img"
                />
                <div className="testimonial-company" itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                  <span itemProp="name">{item.company}</span>
                </div>
              </div>
              <p className="testimonial-text" itemProp="reviewBody">"{item.text}"</p>
              <div className="testimonial-footer" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span className="testimonial-name" itemProp="name">{item.name}</span>
                <span className="testimonial-role" itemProp="jobTitle">{item.role}</span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestimonialsSection;
