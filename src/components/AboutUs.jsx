// import Iphone15 from "../assets/img/iphone15_mockup2.webp";
// import Forme4 from "../assets/img/forme4.webp";
import { useTranslation } from "react-i18next";
import img1 from "../assets/img/Logo Kumba_Mars 2025_Luxe_Plan de travail 1 copie 11.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [t, i18n] = useTranslation("global");

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // const shapeVariants = {
  //   hidden: { opacity: 0, rotate: 0 },
  //   visible: { opacity: 0.5, rotate: 12 },
  // };

  return (
    <section
      className=" flex flex-col justify-center gap-12 max-w-6xl mx-auto relative select-none"
      id="about"
    >
      {/* Titre */}
      <motion.div
        className="text-center leading-10 relative z-10 px-4 flex flex-col gap-2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={textVariants}
      >
        <h2 className="text-2xl md:text-3xl font-normal text-[#23273a] uppercase">
          {t("about.titre")}
        </h2>
        <p className="text-2xl md:text-3xl mx-auto font-extrabold text-terre">
          {t("about.soustitre")}
        </p>
      </motion.div>

      {/* Contenu principal */}
      <section className="bg-white mx-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row item-center md:items-start justify-between gap-8">
        {/* Image (logo) */}
        <motion.div
          className="relative mb-8 md:mb-0 md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={imageVariants}
        >
          <img
            src={img1}
            alt="Téléphone mobile avec application Kumba"
            className="z-10 relative w-[17rem] md:w-[28rem] h-auto"
          />
        </motion.div>

        <div className="md:w-1/2 flex flex-col text-center md:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={textVariants}
          >
            <p className="text-gray-600 mb-12 ">
              {t("about.description")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            variants={textVariants}
          >
            <h2 className="text-terre text-2xl font-semibold sm:text-3xl mb-6">
              {t("about.section2")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("solutions.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* <motion.section
        className="hidden sm:block opacity-50 absolute right-10 -top-10 z-20 rotate-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={shapeVariants}
      >
        <img
          src={Forme4}
          className="w-[1.5rem]"
          alt="Forme décorative"
          title="Forme décorative"
        />
      </motion.section> */}
    </section>
  );
};

export default AboutUs;
