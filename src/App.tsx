import React from "react";
import Navbar from "./components/Navbar";
import ParallaxSection from "./components/ParallaxSection";
import { Footer } from "./components/Footer";
import SophisticatedHero from "./sections/SophisticatedHero";
import ReasonsToPartner from "./sections/ReasonsToPartnerProps";
import { reasons } from "./data";
import ThreeImageSection from "./sections/ThreeImageSection";
import VenueManagementSection from "./sections/VenueManagementSection";
import EventCoordinationSection from "./sections/EventCoordinationSection";
import FormulaForSuccessSection from "./sections/FormulaForSuccessSection";
import NoOutOfPocketSection from "./sections/NoOutOfPocketSection";
import ComprehensiveServicesSection from "./sections/ComprehensiveServicesSection";
import MarketingServicesSection from "./sections/MarketingServicesSection";
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
      <div className="bg-primary z-10 h-1"></div>
      <ThreeImageSection />
      <div className="bg-primary z-10 h-1"></div>
      <VenueManagementSection />
      <div className="bg-primary z-10 h-1"></div>
      <EventCoordinationSection />
      <div className="bg-primary z-10 h-1"></div>
      <FormulaForSuccessSection />
      <div className="bg-primary z-10 h-1"></div>
      <NoOutOfPocketSection />
      <div className="bg-primary z-10 h-1"></div>
      <ComprehensiveServicesSection />
      <div className="bg-primary z-10 h-1"></div>
      <MarketingServicesSection />
      <div className="bg-primary z-10 h-1"></div>
      <Footer />
    </>
  );
};

export default App;
