import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LowerSection from "./components/LowerSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import CreationsSection from "./components/CreationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { BeatLoader } from "react-spinners";
import LogoSvg from "../src/assets/z-logo.svg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple loading delay to show the spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show spinner for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <img src={LogoSvg} alt="logo" />
        <BeatLoader color="red" size={20} />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <HeroSection />
        <LowerSection />
        <WhatWeDoSection />
        <CreationsSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
