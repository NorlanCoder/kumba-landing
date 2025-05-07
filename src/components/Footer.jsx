import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import facebook_icon from "../assets/img/facebook-circular-logo.png";
import twiter_icon from "../assets/img/twitter (6).png";
import instagram_icon from "../assets/img/instagram (2).png";
import tiktok_icon from "../assets/img/tiktok (3).png";

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
    if (typeof openModalPolicies === "function") {
      openModalPolicies();
    }
  };

  const handleClickTerms = (e) => {
    e.preventDefault();
    if (typeof openModalTerms === "function") {
      openModalTerms();
    }
  };

  return (
    <footer
      style={{
        backgroundImage: `url(${BG_Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full flex flex-col gap-8 items-start text-gray-700"
    >
      {/* max-w-6xl mx-auto  */}
      <div className="w-full px-6 lg:px-14 py-4 lg:py-6 bg-[#f1eee9] bg-opacity-50 space-y-8">
        <div className="max-w-full lg:max-w-4xl mx-auto w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-start">
            <h3 className="text-terre font-bold mb-2">
              {t("footer.ressources")}
            </h3>

            <ul className="space-y-1">
              <li>
                <a href="#" onClick={handleClickPolicies} className="text-sm">
                  {t("footer.ressources3")}
                </a>
              </li>

              <li>
                <a href="#" onClick={handleClickTerms} className="text-sm">
                  {t("footer.ressources4")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:text-center text-end">
            <h3 className="text-terre font-bold mb-2">
              {t("footer.adresses")}
            </h3>

            <p className="text-sm">{t("footer.adresse1")}</p>

            <p className="text-sm">{t("footer.adresse2")}</p>
          </div>

          <div className="text-start lg:text-end">
            <h3 className="text-terre font-bold mb-2">
              {t("footer.contactus")}
            </h3>

            <p className="text-sm">{t("footer.tel")}</p>

            <p className="text-sm">{t("footer.mail")}</p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center"
            >
              {/* <FaFacebookF className="text-gray-700" /> */}
              <img
                src={facebook_icon}
                alt="Facebook Icon"
                className="w-full h-auto object-cover"
              />
            </a>

            <a
              href="#"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center"
            >
              {/* <RiTwitterXFill className="text-gray-700" /> */}
              <img
                src={twiter_icon}
                alt="Twitter Icon"
                className="w-full h-auto object-cover"
              />
            </a>

            <a
              href="#"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center"
            >
              {/* <FaTiktok className="text-gray-700" /> */}
              <img
                src={tiktok_icon}
                alt="Tiktok Icon"
                className="w-full h-auto object-cover"
              />
            </a>

            <a
              href="#"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center"
            >
              {/* <FaInstagram className="text-gray-700" /> */}
              <img
                src={instagram_icon}
                alt="Instagram Icon"
                className="w-full h-auto object-cover"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
              alt="Google Play"
              className="h-10"
            />

            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="App Store"
              className="h-8"
            />
          </div>
        </div>
      </div>

      <p className="w-full text-center py-2 lg:py-6 text-sm">
        {t("footer.copyright")}
      </p>
    </footer>
  );
}

export default Footer;
