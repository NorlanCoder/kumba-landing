import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import BG_Header from "../assets/img/BG.png";
import { useTranslation } from "react-i18next";
import service_1 from "../assets/img/1.png";
import service_2 from "../assets/img/2.png";
import service_3 from "../assets/img/3.png";
import testimonial_img from "../assets/img/test.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Testimonials() {
  const [t] = useTranslation("global");

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }) // 4000ms = 4s
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      containScroll: "trimSnaps", // ← C'est ça qui lisse la fin
      align: "start",
      speed: 10,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-10 overflow-hidden gap-20">
      {/* Image d'arrière-plan */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Texte centré */}
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl md:text-4xl font-medium text-[#23273a] font-anek"
          variants={itemVariants}
        >
          {t("testimonial.title")}
        </motion.h2>

        <motion.p
          className="mt-2 text-xl md:text-3xl font-bold text-terre font-myriad"
          variants={itemVariants}
        >
          {t("testimonial.subtitle")}
        </motion.p>
      </motion.div>

      {/* Contenue Principale */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 relative z-10 max-w-[1800px] mx-auto md:px-10 md:mt-20 px-4 lg:-mt-16">
        {/* Texte + statistiques */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex items-center justify-between w-[70%] mx-auto">
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold text-terre font-myriad"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              {t("testimonial.stat_title")}
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm md:text-xl font-anek text-left font-medium  max-w-[60%]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("testimonial.stat_subtitle")}
            </motion.p>
          </div>

          {/* Statistiques */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-between w-[70%] mx-auto ">
            {[service_1, service_2, service_3].map((icon, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center w-[100px]"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-[#c0976b] flex items-center justify-center mb-2">
                  <img
                    src={icon}
                    alt={`service_${index + 1}`}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#c0976b]">
                  {t(`testimonial.icon${index + 1}.number`)}
                </h3>
                <p className="text-lg text-[#c0976b] font-semibold">
                  {t(`testimonial.icon${index + 1}.label`)}
                </p>
              </motion.div>
            ))}

            {/* Texte de satisfaction */}
            <div className="relative w-full mx-auto  flex justify-center ">
              {/* Background */}
              <div className="absolute  w-[200vw] h-full bg-heroBackground opacity-60  right-0"></div>
              <div className="absolute  w-[200vw] h-full bg-heroBackground opacity-60  left-0"></div>
              {/* Texte */}
              <div className="relative z-10  w-full py-4 text-start">
                <motion.h3
                  className="text-2xl md:text-4xl font-semibold mb-4 text-terre"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {t("testimonial.satisfaction_title")}
                </motion.h3>

                <motion.p
                  className="text-base md:text-lg text-gray-700"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {t("testimonial.satisfaction_text")}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 hidden md:block justify-center z-10"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src={testimonial_img}
            alt="testimonial"
            className="w-full md:max-w-xl lg:max-w-2xl rounded-xl"
          />
        </motion.div>
      </div>

      {/* --- Nouveau bloc : Témoignages en carrousel --- */}
      <div className="select-none cursor-grab w-full md:w-[90%] xl:w-[80%] mx-auto px-4 mt-16">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex snap-x snap-mandatory ">
            {t("testimonial.testimonials", { returnObjects: true }).map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  className="embla__slide snap-start flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] px-4"
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
                    <p className="mb-2 md:mb-4 text-sm md:text-base">
                      {testimonial.title}
                    </p>
                    <p className="text-xs md:text-sm">{testimonial.text}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Indicateurs */}
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
      </div>
    </section>
  );
}
export default Testimonials;
