import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import BG_Header from "../assets/img/BG.png";

function Footer({ openModalPolicies, openModalTerms }) {
  const [t, i18n] = useTranslation("global");
  const storedLang = localStorage.getItem("langvalue");

  const [selectedLang, setSelectedLang] = useState(() => {
    return storedLang || "fr";
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  const handleChangeLanguage = (event) => {
    const newLang = event.target.value;
    setSelectedLang(newLang);
    localStorage.setItem("langvalue", newLang);
    i18n.changeLanguage(newLang);
  };

  const handleClickPolicies = (e) => {
    e.preventDefault();
    if (typeof openModalPolicies === 'function') {
      openModalPolicies();
    }
  };

  const handleClickTerms = (e) => {
    e.preventDefault();
    if (typeof openModalTerms === 'function') {
      openModalTerms();
    }
  };

  return (
    <footer className="bg-white text-gray-700 pt-10 pb-5"
    style={{
      backgroundImage: `url(${BG_Header})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-terre font-bold mb-2">{t("footer.ressources")}</h3>
            <ul className="space-y-1">
              <li><a href="#" onClick={handleClickPolicies} className="text-sm">{t("footer.ressources3")}</a></li>
              <li><a href="#" onClick={handleClickTerms} className="text-sm">{t("footer.ressources4")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-terre font-bold mb-2">{t("footer.adresses")}</h3>
            <p className="text-sm">{t("footer.adresse1")}</p>
            <p className="text-sm">{t("footer.adresse2")}</p>
          </div>
          
          <div>
            <h3 className="text-terre font-bold mb-2">{t("footer.contactus")}</h3>
            <p className="text-sm">{t("footer.tel")}</p>
            <p className="text-sm">{t("footer.mail")}</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-3 mb-4 sm:mb-0">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-300">
                <FaFacebookF className="text-gray-700" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-300">
                <RiTwitterXFill className="text-gray-700" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-300">
                <FaTiktok className="text-gray-700" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-300">
                <FaInstagram className="text-gray-700" />
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png" alt="Google Play" className="h-10" />
              <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="App Store" className="h-8" />
            </div>
          </div>
          
          <div className="text-center mt-5">
            <p className="text-sm">{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

