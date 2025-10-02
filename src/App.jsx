import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LowerSection from "./components/LowerSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import CreationsSection from "./components/CreationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";

function App() {
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

