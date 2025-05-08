import React, { useEffect } from "react";
import Navbar from "./Navbar";

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
      <div className="fixed top-0 w-full z-50 bg-white shadow-md font-anek ">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
