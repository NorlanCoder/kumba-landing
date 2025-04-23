import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo_kumba from "../assets/img/logo.png";
import frFlag from "../assets/img/fr.png";

function Navbar() {
  const [t] = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Empêcher le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e) => {
    closeMenu();
    // Optional: scroll to the section
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`w-full bg-white py-3 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <div className="logo z-10">
          <a href="#" onClick={handleLinkClick}>
            <img className="h-10 sm:h-12 w-auto" src={logo_kumba} alt="Kumba Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-light">
          <a href="#home" onClick={handleLinkClick} className="text-black border-b-2 border-[#c0976b] pb-1 font-medium">Accueil</a>
          <a href="#about" onClick={handleLinkClick} className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1">À propos</a>
          <a href="#faq" onClick={handleLinkClick} className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1">FAQ</a>
          <a href="#contact" onClick={handleLinkClick} className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1">Contactez-nous</a>
        </div>

        {/* Flag and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Flag visible on all screens */}
          <img src={frFlag} alt="Français" className="w-6 h-6 sm:w-8 sm:h-8" />
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-black focus:outline-none"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button 
          onClick={closeMenu} 
          className="absolute top-4 right-4 text-black focus:outline-none"
          aria-label="Fermer le menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Menu items */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <a href="#home" onClick={handleLinkClick} className="text-black border-b-2 border-[#c0976b] pb-1">Accueil</a>
          <a href="#about" onClick={handleLinkClick} className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1">À propos</a>
          <a href="#faq" onClick={handleLinkClick} className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1">FAQ</a>
          <a href="#contact" onClick={handleLinkClick} className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1">Contactez-nous</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 