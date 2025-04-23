import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Header() {
  // Assurer que le scroll fonctionne correctement avec l'id
  useEffect(() => {
    // Récupère l'identifiant de fragment de l'URL
    const { hash } = window.location;
    
    // Si un hash existe, faites défiler jusqu'à cet élément après le chargement
    if (hash) {
      // Petit délai pour s'assurer que tous les éléments sont chargés
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <header>
      {/* Navbar sticky - reste visible pendant le scroll */}
      <div className="sticky top-0 w-full z-50 bg-white">
        <Navbar />
      </div>
      
      {/* Hero section avec id pour la navigation */}
      <section id="home">
        <Hero />
      </section>
    </header>
  );
}

export default Header;
