import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import testimonial_img from "../assets/img/test.png";
import BG_Header from "../assets/img/BG.png";
import service_1 from "../assets/img/1.png";
import service_2 from "../assets/img/2.png";
import service_3 from "../assets/img/3.png";

function Testimonials() {
  const [t] = useTranslation("global");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative overflow-x-hidden">
      <motion.div
        className="text-center relative z-10 mt-24 px-4"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[#23273a]"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          {t("testimonial.title")}
        </motion.h2>

        <motion.p
          className="text-2xl md:text-4xl max-w-xl mx-auto mb-4 text-terre"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("testimonial.subtitle")}
        </motion.p>
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-6 md:h-auto lg:h-[90vh] flex md:flex-row flex-col justify-between items-center md:bg-transparent bg-transparent relative z-10">
        {/* Partie statistiques */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="flex-col items-center md:flex-row flex w-full md:gap-x-8">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-terre mb-4 md:mb-10"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              {t("testimonial.stat_title")}
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-8 md:mb-12 w-full md:w-[60%]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("testimonial.stat_subtitle")}
            </motion.p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:space-x-8 mb-12">
            {/* Icônes avec chiffres */}
            <motion.div
              className="flex flex-col items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#c0976b] bg-gray-100 flex items-center justify-center mb-2">
                <img src={service_1} className="w-10 h-10 md:w-12 md:h-12" alt="service 1" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#c0976b]">
                {t("testimonial.icon1.number")}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {t("testimonial.icon1.label")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#c0976b] bg-gray-100 flex items-center justify-center mb-2">
              <img src={service_2} className="w-10 h-10 md:w-12 md:h-12" alt="service 2" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#c0976b]">
                {t("testimonial.icon2.number")}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {t("testimonial.icon2.label")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#c0976b] bg-gray-100 flex items-center justify-center mb-2">
              <img src={service_3} className="w-10 h-10 md:w-12 md:h-12" alt="service 3" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#c0976b]">
                {t("testimonial.icon3.number")}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {t("testimonial.icon3.label")}
              </p>
            </motion.div>
          </div>
          {/* Wrapper pour la section de satisfaction avec fond pleine largeur */}
          <div className="relative w-full py-8 flex flex-col items-start justify-center">
            <div className="absolute inset-x-[-50vw] w-[200vw] h-full bg-terre opacity-10"></div>
            <motion.h3
              className="text-xl md:text-2xl font-semibold mb-4 text-terre relative z-10 px-4 md:px-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t("testimonial.satisfaction_title")}
            </motion.h3>
            <motion.p
              className="text-gray-700 max-w-md relative z-10 px-4 md:px-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t("testimonial.satisfaction_text")}
            </motion.p>
          </div>
        </div>
        {/* Image de l'application */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center z-20"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
            <img src={testimonial_img} className="h-auto max-h-[580px] w-auto max-w-full" alt="testimonial" />
        </motion.div>
      </div>

      {/* Témoignages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {t("testimonial.testimonials", { returnObjects: true }).map(
          (testimonial, index) => (
            <motion.div
              key={index}
              className="border-2 border-[#c0976b] rounded-full p-4 md:p-8 flex flex-col items-center text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#c0976b] mb-4 flex items-center justify-center">
                <span className="text-white text-sm md:text-base">Photo</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-terre">
                {testimonial.name}
              </h3>
              <p className="text-terre mb-2 md:mb-4 text-sm md:text-base">{testimonial.title}</p>
              <p className="text-xs md:text-sm">{testimonial.text}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Testimonials;
