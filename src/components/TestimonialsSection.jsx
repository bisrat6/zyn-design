import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';  // ✅ import modules
import 'swiper/css';
import 'swiper/css/pagination';

function TestimonialsSection() {
    const testimonials = [
      {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Working with this team was a dream! They transformed my living room into a space I never want to leave.",
        name: "Sarah M.",
        role: "Homeowner",
      },
      {
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Their attention to detail and creative ideas made our office not only functional but stunning.",
        name: "John S.",
        role: "Business Owner",
      },
      {
        img: "https://randomuser.me/api/portraits/men/21.jpg",
        text: "Working with this team was a dream! They transformed my living room into a space I never want to leave.",
        name: "David K.",
        role: "Startup Founder",
      },
      {
        img: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Working with this team was a dream! They transformed my living room into a space I never want to leave.",
        name: "David K.",
        role: "Startup Founder",
      },
      {
        img: "https://randomuser.me/api/portraits/women/41.jpg",
        text: "Working with this team was a dream! They transformed my living room into a space I never want to leave.",
        name: "David K.",
        role: "Startup Founder",
      },
      // add as many as you like here
    ];
  
    return (
      <section className="testimonials-section">
        <h2 className="testimonials-title">
          WHAT <span className="testimonials-highlight">OUR CLIENTS</span> SAY?
        </h2>
  
        <Swiper
         modules={[Navigation, Autoplay]}   
         autoplay={{      // ← this enables auto-swiping
           delay: 4000,   // 3 seconds per slide
           disableOnInteraction: false,
         }}
         loop={true}      // infinite loop
         spaceBetween={30}
         slidesPerView={3}  // number of cards visible
         breakpoints={{
           0: { slidesPerView: 1 },     // mobile
           768: { slidesPerView: 2 },   // tablet
           1024: { slidesPerView: 3 }   // desktop
         }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="testimonial-img"
                  />
                  <div className="testimonial-company">COMPANY NAME</div>
                </div>
                <p className="testimonial-text">”{item.text}”</p>
                <div className="testimonial-footer">
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-role">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  export default TestimonialsSection;  
  