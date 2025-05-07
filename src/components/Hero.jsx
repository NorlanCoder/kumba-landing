import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useCallback, useState } from "react";
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from "embla-carousel-react";
import hero_img from "../assets/img/img_header_1.png";
import BG_Header from "../assets/img/BG.png";
import google_app from "../assets/img/dispo-gplay.png";
import app_store from "../assets/img/dispo-ios.png";

function Hero() {
  const [t] = useTranslation("global");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialisation du carrousel Embla pour l'image
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      speed: 8,
      dragFree: false,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  // Navigation du carrousel
  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  // Mettre à jour l'index sélectionné quand le carrousel change
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative overflow-hidden  flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#c0976b]/10 "></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-6 md:py-14 relative z-10 flex items-center  justify-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-5 "
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.h1
              className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-terre  space-y-2 text-center md:text-start"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              {t("header.titre1")}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-[#23273a] text-center md:text-start"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("header.description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-8"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <img src={google_app} alt="Google Play" className="h-10" />

                <img src={app_store} alt="App Store" className="h-10" />
              </div>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              className="flex items-center justify-center"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {t("header.nbre")}
              </h2>
              <p className="text-xs sm:text-sm ml-2 font-light leading-tight">
                {t("header.texte1")}
                <span className="block">{t("header.texte2")}</span>
              </p>
            </motion.div> */}
          </motion.div>

          {/* Image transformée en carrousel */}
          <motion.div
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.8 }}
          >
            <div
              className="embla overflow-hidden rounded-3xl relative"
              ref={emblaRef}
            >
              <div className="embla__container flex">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="embla__slide flex-[0_0_100%] min-w-0"
                  >
                    <img
                      className="w-full h-auto max-w-none max-h-[500px] md:max-h-[650px] lg:max-h-[700px] rounded-3xl object-cover shadow-lg"
                      src={hero_img}
                      alt={`Hero slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Boutons de navigation du carrousel */}
              {/* <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#c0976b]/80  text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10  transition-colors"
                onClick={scrollPrev}
                aria-label="Image précédente"
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
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#c0976b]/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10 transition-colors"
                onClick={scrollNext}
                aria-label="Image suivante"
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
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button> */}
            </div>

            {/* Indicateurs du carrousel */}
            <div className="flex justify-center mt-4 gap-3">
              {[...Array(4)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    selectedIndex === index ? "bg-[#c0976b] w-6" : "bg-gray-300"
                  }`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
