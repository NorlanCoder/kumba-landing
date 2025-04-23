import React from "react";

import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
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
{/* 
        <section id="features" className="py-16 bg-gray-50">
          <Features />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <Contact />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
