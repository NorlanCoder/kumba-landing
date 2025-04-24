import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import Accordion from "./components/Accordion";
import ContactUs from "./components/ContactUs";

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

      {/* Modal de politique de confidentialité */}
      {showPolicies && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Politique de confidentialité</h2>
            <p className="mb-4">Contenu de la politique de confidentialité...</p>
            <button 
              onClick={closeModalPolicies}
              className="bg-terre text-white px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Modal des termes et conditions */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Termes et conditions</h2>
            <p className="mb-4">Contenu des termes et conditions...</p>
            <button 
              onClick={closeModalTerms}
              className="bg-terre text-white px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
