import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LowerSection from "./components/LowerSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import CreationsSection from "./components/CreationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";

// ✅ Import images from /src/assets
import AbayImg from "./assets/abay.png"; // ✅ correct if App.jsx is in /src
import BunaMarImg from "./assets/BunaMar.png";
import SomeImg from "./assets/image.png";
import MailSvg from "./assets/mail.svg";
import LogoSvg from "./assets/z-logo.svg";
import ZynLogo from "./assets/zyn-logo.svg";

function App() {
  const [loading, setLoading] = useState(true);

  const images = [AbayImg, BunaMarImg, SomeImg, MailSvg, LogoSvg, ZynLogo];

  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
      );
      setLoading(false);
    };
    preload();
  }, []);

  if (loading) {
    return <div className="preloader">Loading...</div>; // Add spinner styling here
  }

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <LowerSection />
      <WhatWeDoSection />
      <CreationsSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}

export default App;
