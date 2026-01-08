import React from "react";
import Navbar from "./components/Navbar";
import ParallaxSection from "./components/ParallaxSection";
import { Footer } from "./components/Footer";
import SophisticatedHero from "./sections/SophisticatedHero";
import ReasonsToPartner from "./sections/ReasonsToPartnerProps";
import { reasons } from "./data";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ParallaxSection />
      <div className="bg-primary z-10 h-1"></div>
      <SophisticatedHero
        imageSrc="/images/module1_image.jpg"
        imageAlt="48 Wall Street grand lobby with chandelier and marble staircase"
      />
      <div className="bg-primary z-10 h-1"></div>
      <ReasonsToPartner reasons={reasons} />
      <Footer />
    </>
  );
};

export default App;
