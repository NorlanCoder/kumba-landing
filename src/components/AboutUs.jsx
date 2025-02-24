import Iphone15 from '../assets/img/iphone15_mockup2.webp';
import Forme4 from '../assets/img/forme4.webp';
import { useTranslation } from 'react-i18next';
import img1 from "../assets/img/phones_mobile_kumba.webp";
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
  
    const shapeVariants = {
      hidden: { opacity: 0, rotate: 0 },
      visible: { opacity: 0.5, rotate: 12 },
    };

    return (
      <section className="py-8 sm:py-14 max-w-6xl mx-auto relative select-none" id="about">
        {/* Titre */}
        <motion.div
          className="flex item-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={textVariants}
        >
          <h2 className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia">
            {t('about.titre')}
          </h2>
        </motion.div>

        {/* Contenu principal */}
        <section className="bg-white py-12 mx-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Image (img1) */}
          <motion.div
            className="relative mb-8 md:mb-0 md:w-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={imageVariants}
          >
            <img src={img1} alt="" className="z-10 relative w-[17rem] md:w-[28rem] h-auto" />
          </motion.div>

          {/* Image de fond (Forme4) */}
          <motion.section
            className="hidden sm:block opacity-50 absolute right-10 -top-10 z-20 rotate-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={shapeVariants}
          >
            <img src={Forme4} className="w-[1.5rem]" alt="Bilan Image" title="Bilan Image" />
          </motion.section>

          {/* Contenu texte */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={textVariants}
          >
            <h3 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-6">
              {t('about.soustitre')}
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              {t('about.description')}
            </p>
          </motion.div>
        </section>
      </section>
    );
};

export default AboutUs;
