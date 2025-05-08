import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo_kumba from "../assets/img/Logo Kumba_Mars 2025_Luxe_Plan de travail 1 copie 11.png";
import frFlag from "../assets/img/fr.png";
import enFlag from "../assets/img/en.png";
import BG_Header from "../assets/img/BG.png";


function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("langvalue") || "fr";
  });

  // Empêcher le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu de langue lorsqu'on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest(".lang-selector")) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e) => {
    closeMenu();
    // Optional: scroll to the section
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("langvalue", lang);
    setCurrentLang(lang);
    setIsLangMenuOpen(false);
  };

  // const toggleLangMenu = () => {
  //   setIsLangMenuOpen(!isLangMenuOpen);
  // };

  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "#home", labelKey: "navbar.menu1" },
    { href: "#about", labelKey: "navbar.menu2" },
    { href: "#faq", labelKey: "navbar.menu3" },
    { href: "#contact", labelKey: "navbar.menu4" },
  ];

  return (
    <nav
      className={`w-full bg-cover bg-center bg-no-repeat transition-shadow duration-300 z-50 bg-white py-1  ${
        isScrolled ? "shadow-md" : ""
      }`}
      style={{
        backgroundImage: `url(${BG_Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <div className="logo z-10">
          <a href="#home" onClick={handleLinkClick}>
            <img
              className="h-16 sm:h-20 sm:w-20 md:w-24 md:h-24 "
              src={logo_kumba}
              alt="Kumba Logo"
            />
          </a>
        </div>

        {/* nav pc */}
        <div className="hidden md:flex items-center space-x-8 font-light">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={index}
                href={item.href}
                className={`relative text-black font-medium transition-all duration-300
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[70%]
                  after:bg-[#c0976b] after:transition-all after:duration-300
                  ${
                    isActive
                      ? "after:h-[2px]"
                      : "after:h-[1px] hover:after:h-[2px]"
                  }`}
              >
                {t(item.labelKey)}
              </a>
            );
          })}
        </div>

        {/* Language Selector and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeLanguage(currentLang === "fr" ? "en" : "fr")}
              className="flex items-center space-x-2 border border-gray-200 rounded-full p-1 focus:outline-none hover:border-[#c0976b] transition-colors"
            >
              <img
                src={currentLang === "fr" ? frFlag : enFlag}
                alt={currentLang === "fr" ? "Français" : "English"}
                className="w-5 h-5 md:w-8 md:h-8 rounded-full"
              />
              {/* <span className="text-sm font-medium hidden sm:inline-block">
                {currentLang === "fr" ? "Fr" : "En"}
              </span> */}
            </button>
          </div>

          {/* <div className="relative lang-selector">
            <button 
              onClick={toggleLangMenu}
              className="flex items-center space-x-2 border border-gray-200 rounded-full px-3 py-1 focus:outline-none hover:border-[#c0976b] transition-colors"
            >
              <img 
                src={currentLang === "fr" ? frFlag : enFlag} 
                alt={currentLang === "fr" ? "Français" : "English"} 
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm font-medium hidden sm:inline-block">{currentLang === "fr" ? "Fr" : "En"} </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
          {/* {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50 py-1 border border-gray-100">
                <button
                  onClick={() => changeLanguage("fr")}
                  className={`flex items-center space-x-3 w-full px-2 py-2 text-sm text-left hover:bg-gray-100 ${currentLang === "fr" ? "bg-gray-50 text-[#c0976b]" : ""}`}
                >
                  <img src={frFlag} alt="Français" className="w-5 h-5 rounded-full" />
                  <span>Français</span>
                  {currentLang === "fr" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`flex items-center space-x-3 w-full px-2 py-2 text-sm text-left hover:bg-gray-100 ${currentLang === "en" ? "bg-gray-50 text-[#c0976b]" : ""}`}
                >
                  <img src={enFlag} alt="English" className="w-5 h-5 rounded-full" />
                  <span>English</span>
                  {currentLang === "en" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div> */}

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
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-black border-b-2 border-[#c0976b] pb-1"
          >
            {t("navbar.menu1")}
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1"
          >
            {t("navbar.menu2")}
          </a>
          <a
            href="#faq"
            onClick={handleLinkClick}
            className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1"
          >
            {t("navbar.menu3")}
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="text-black hover:border-b-2 hover:border-[#c0976b] pb-1"
          >
            {t("navbar.menu4")}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
