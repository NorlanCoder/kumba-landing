import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import facebook_icon from "../assets/img/facebook-circular-logo.png";
import twiter_icon from "../assets/img/twitter (6).png";
import instagram_icon from "../assets/img/instagram (2).png";
import tiktok_icon from "../assets/img/tiktok (3).png";
import google_app from "../assets/img/dispo-gplay.png";
import app_store from "../assets/img/dispo-ios.png"

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
      className="bg-heroBackground text-gray-700 pt-10 pb-5"
      style={{
        backgroundImage: `url(${BG_Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-14 lg:gap-24 mx-2 md:mx-2">
          <div>
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

          <div>
            <h3 className="text-terre font-bold mb-2">
              {t("footer.adresses")}
            </h3>

            <p className="text-sm">{t("footer.adresse1")}</p>

            <p className="text-sm">{t("footer.adresse2")}</p>
          </div>

          <div>
            <h3 className="text-terre font-bold mb-2">
              {t("footer.contactus")}
            </h3>

            <p className="text-sm">{t("footer.tel")}</p>

            <p className="text-sm">{t("footer.mail")}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 items-center ">
          <div className="flex flex-wrap justify-between items-center  gap-6">
            <div className="flex space-x-3 ">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
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
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
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
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
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
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
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
                src={google_app}
                alt="Google Play"
                className="h-10"
              />

              <img
                src={app_store}
                alt="App Store"
                className="h-10"
              />
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
