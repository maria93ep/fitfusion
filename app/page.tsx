"use client";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProcess from "../components/OurProcess";
import About from "../components/About";
import Classes from "../components/Classes";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // starea pentru clasa activă
  const [activeClass, setActiveClass] = useState<string | null>(null);

  // funcția pentru resetarea selecției
  const clearSelection = () => setActiveClass(null);

  return (
    <>
      {/* Headerul primește callback pentru când se selectează o clasă */}
      <Header
        onSelectClass={(title) => {
          setActiveClass(title); // setează clasa activă
          setTimeout(() => {
            // scroll către secțiunea Classes
            document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      />

      <Hero />
      <Intro />
      <WhyChooseUs />
      <OurProcess />
      <About />
      
      {/* Classes primește props corecte ca să dispară eroarea */}
      <Classes activeClass={activeClass} clearSelection={clearSelection} />

      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
