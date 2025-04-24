import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import Accordion from "./components/Accordion";
import ContactUs from "./components/ContactUs";
import TermsModal from "./components/TermsModal";
import PrivacyModal from "./components/PrivacyModal";

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
    <div className="font-sans">
      <Header />

      <main>
        <section id="testimonials" className="py-16">
          <Testimonials />
        </section>
        <section id="about" className="py-16">
          <AboutUs />
        </section>
        <section id="features" className="py-16 bg-gray-50">
          <Solution />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
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
