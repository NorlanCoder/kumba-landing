import React, { useEffect, useCallback, useState } from "react";
// import Section from "./Section";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import testimonial_img from "../assets/img/test.png";
import BG_Header from "../assets/img/BG.png";
import service_1 from "../assets/img/1.png";
import service_2 from "../assets/img/2.png";
import service_3 from "../assets/img/3.png";

function Testimonials() {
  const [t] = useTranslation("global");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialisation du carrousel Embla
  const autoplay = Autoplay({
    delay: 6000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      startIndex: 0,
      dragFree: false,
      speed: 15,
      skipSnaps: false,
    },
    [autoplay]
  );

  // Fonctions de navigation du carrousel
  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  // Mettre à jour l'index sélectionné lorsque le carrousel change
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Initialiser avec la valeur actuelle

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative overflow-x-hidden flex flex-col justify-center items-center gap-10 py-5 w-full   mx-auto">
      <motion.div
        className="text-center leading-10 relative z-10 px-4"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-normal text-[#23273a]"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          {t("testimonial.title")}
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl mx-auto font-extrabold text-terre"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("testimonial.subtitle")}
        </motion.p>
      </motion.div>
      {/* image d'arriere plan */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className=" flex md:flex-row flex-col justify-between items-center md:items-end relative z-10 w-full md:px-28 px-10 ">
        {/* Partie statistiques */}
        <div className="w-full md:w-1/2  flex flex-col text-center sm:text-start md:items-start items-center gap-3 ">
          <div className="flex flex-col item-center md:items-start  justify-center lg:justify-between lg:flex-row w-full gap-y-4 lg:gap-x-8">

            <motion.h2
              className="text-3xl lg:text-5xl font-extrabold text-terre flex-shrink-0 text-center  md:text-left"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              {t("testimonial.stat_title")}
            </motion.h2>

            <motion.p
              className="text-gray-500 text-xl font-bold w-full md:w-[70%]  "
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("testimonial.stat_subtitle")}
            </motion.p>
          </div>

          <div className=" w-full flex flex-wrap justify-center md:justify-start gap-8 sm:gap-5 md:gap-12 ">
            {/* Icônes avec chiffres */}
            <motion.div
              className="flex flex-col items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 md:!w-16 md:!h-16 lg:w-24 lg:h-24 rounded-full border-2 border-[#c0976b] flex items-center justify-center mb-2">
                <img
                  src={service_1}
                  className="w-10 h-10 md:!w-8 md:!h-8 lg:w-12 lg:h-12"
                  alt="service 1"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-[#c0976b]">
                {t("testimonial.icon1.number")}
              </h3>

              <p className="text-xs md:text-base text-[#c0976b] font-extrabold">
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
              <div className="w-20 h-20 md:!w-16 md:!h-16 lg:w-24 lg:h-24 rounded-full border-2 border-[#c0976b] flex items-center justify-center mb-2">
                <img
                  src={service_2}
                  className="w-10 h-10 md:!w-8 md:!h-8 lg:w-12 lg:h-12"
                  alt="service 2"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#c0976b]">
                {t("testimonial.icon2.number")}
              </h3>

              <p className="text-xs md:text-base text-[#c0976b] font-extrabold">
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
              <div className="w-20 h-20 md:!w-16 md:!h-16 lg:w-24 lg:h-24 rounded-full border-2 border-[#c0976b] flex items-center justify-center mb-2">
                <img
                  src={service_3}
                  className="w-10 h-10 md:!w-8 md:!h-8 lg:w-12 lg:h-12"
                  alt="service 3"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#c0976b]">
                {t("testimonial.icon3.number")}
              </h3>

              <p className="text-xs md:text-base text-[#c0976b] font-extrabold">
                {t("testimonial.icon3.label")}
              </p>
            </motion.div>
          </div>

          {/* Wrapper pour la section de satisfaction avec fond pleine largeur */}
          <div className="relative w-full py-8 flex flex-col items-start justify-center">
            <div className="absolute  w-[200vw] h-full bg-heroBackground opacity-60  right-0"></div>
            <div className="absolute  w-[200vw] h-full bg-heroBackground opacity-60  left-0"></div>

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
          className="w-full md:w-1/2 absolute right-0  justify-center md:block hidden "
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <img
            src={testimonial_img}
            className="h-auto   w-[70%] max-w-full relative "
            alt="testimonial"
          />
        </motion.div>
      </div>

      {/* Témoignages - Transformé en carrousel */}
      {/* <div className="select-none cursor-grab max-w-6xl mx-auto relative z-10 px-4 md:px-6"> */}
      <div className="select-none cursor-grab w-full md:w-[90%] xl:w-[80%] mx-auto px-4">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex snap-x snap-mandatory ">
            {t("testimonial.testimonials", { returnObjects: true }).map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  className="embla__slide snap-start flex-[0_0_97%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33%] px-4"

                  // className="embla__slide snap-start flex-[0_0_97%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33%] lg:flex-[0_0_33%] lg:px-5 xl:flex-[0_0_33%] xl:px-8 mx-1 px-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  <div className="border-2 border-[#c0976b] rounded-3xl md:rounded-[6rem] p-4 md:p-8 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-sm md:text-base bg-[#c0976b] w-full h-full flex items-center justify-center">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold">
                      {testimonial.name}
                    </h3>

                    <p className=" mb-2 md:mb-4 text-sm md:text-base">
                      {testimonial.title}
                    </p>

                    <p className="text-xs md:text-sm">{testimonial.text}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Indicateurs de défilement */}
        <div className="flex justify-center mt-6 gap-2">
          {t("testimonial.testimonials", { returnObjects: true }).map(
            (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  selectedIndex === index ? "bg-[#c0976b]" : "bg-gray-300"
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            )
          )}
        </div>

        {/* Boutons de navigation du carrousel */}
        {/* <div className="flex justify-center mt-6 gap-4">
     <button
            className="absolute left-4 lg:-left-10 top-1/2 transform -translate-y-1/2 bg-[#c0976b] text-white px-6 py-3 rounded-full hover:bg-[#a37d53] transition-colors"
            onClick={scrollPrev}
            aria-label="Précédent"
          >
            &lt;
          </button>

          <button
            className="absolute right-4 lg:-right-10 top-1/2 transform -translate-y-1/2 bg-[#c0976b] text-white px-6 py-3 rounded-full hover:bg-[#a37d53] transition-colors"
            onClick={scrollNext}
            aria-label="Suivant"
          >
            &gt;
          </button>     
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
