import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Accordion from "./components/Accordion";
// import ContactUs from "./components/ContactUs";
import TermsModal from "./components/TermsModal";
import PrivacyModal from "./components/PrivacyModal";
import Footer from "./components/Footer";
import Solution from "./components/Solution";

function App() {
  const [showPolicies, setShowPolicies] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const openModalPolicies = () => {
    setShowPolicies(true);
  };

  const closeModalPolicies = () => {
    setShowPolicies(false);
  };

  const openModalTerms = () => {
    setShowTerms(true);
  };

  const closeModalTerms = () => {
    setShowTerms(false);
  };

  return (
    <div className="font-anek">
      <Header />

      <main className="w-full mt-16 md:mt-28 justify-center p-0 m-0 flex flex-col gap-0 ">
        {/* Hero section avec id pour la navigation */}
        <section id="home" className=" ">
          <Hero />
        </section>
        <section id="testimonials" className="mb-12 ">
          <Testimonials />
        </section>

        <section id="about" className="mb-8 ">
          <AboutUs />
        </section>

        <section id="features" className="">
          <Solution />
        </section>

        <section id="contact" className="">
          <Accordion />
        </section>
        {/* <section id="contact" className="py-16 bg-gray-50">
          <ContactUs />
        </section>   */}
      </main>

      <Footer
        openModalPolicies={openModalPolicies}
        openModalTerms={openModalTerms}
      />

      {/* Modales */}
      {showPolicies && <PrivacyModal closeModalPolicies={closeModalPolicies} />}
      {showTerms && <TermsModal closeModalTerms={closeModalTerms} />}
    </div>
  );
}

export default App;
