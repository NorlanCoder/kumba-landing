import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import hero_img from "../assets/ressource_kumba/img_header_1.webp";
import BG_Header from "../assets/img/BG.png";

function Hero() {
  const [t] = useTranslation("global");

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative overflow-hidden flex items-center justify-center h-[90vh]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-terre opacity-10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative z-10 flex items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-start"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          > 
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-terre mb-4 space-y-2"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              {t("header.titre1")}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-[#23273a] mb-6 md:mb-8  max-w-lg"
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
              <a
                href="#"
                className="inline-flex items-center justify-center border-2 border-black rounded-xl bg-black px-3 py-2 sm:px-4 sm:py-2.5 text-white transition-all duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="flex flex-col items-start ml-3 sm:ml-4 leading-none">
                  <span className="text-xs mb-1">{t("header.btn1")}</span>
                  <span className="text-sm sm:font-semibold">{t("header.btn1-text")}</span>
                </span>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center border-2 border-black rounded-xl bg-black px-3 py-2 sm:px-4 sm:py-2.5 text-white transition-all duration-200 ease-in-out"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6">
                  <svg
                    fill="currentColor"
                    viewBox="-52.01 0 560.035 560.035"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="white"
                    className="w-full h-full"
                  >
                    <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                  </svg>
                </span>
                <span className="flex flex-col items-start ml-3 sm:ml-4 leading-none">
                  <span className="text-xs mb-1">{t("header.btn2")}</span>
                  <span className="text-sm sm:font-semibold">{t("header.btn2-text")}</span>
                </span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-center"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t("header.nbre")}</h2>
              <p className="text-xs sm:text-sm ml-2 font-light leading-tight">
                {t("header.texte1")}
                <span className="block">{t("header.texte2")}</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.8 }}
          >
            <img
              className="w-full max-w-xl mx-auto rounded-3xl"
              src={hero_img}
              alt="Hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 