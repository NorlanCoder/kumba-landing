import React from 'react'
import { FaRegFlag } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import Drapeau from '../assets/img/drapeau.svg';
import Service from '../assets/img/service-client.svg';
import Utilisateur from '../assets/img/utilisateurs.svg';
import Forme7 from '../assets/img/forme7.webp';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from "framer-motion";

const Statistical = () => {

  const [t, i18n] = useTranslation("global");

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  // Variants pour les animations des cartes
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  
  // Variants pour l'image de fond
  const imageVariants: Variants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 0.5, rotate: -6 },
  };
  

  
  return (
    <section className="py-8 sm:py-14" id="statistical">
      <div className="max-w-6xl mx-auto px-4 md:px-8 select-none">
        {/* Titre et description */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={textVariants}
        >
          <h3 className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia">
            {t("statistical.titre")}
          </h3>
          <p className="mt-3 text-gray-700">{t("statistical.description")}</p>
        </motion.div>

        {/* Cartes statistiques */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }} // Délai entre les animations des cartes
        >
          <ul className="max-w-sm sm:max-w-4xl mx-auto grid gap-y-8 gap-x-8 sm:grid-cols-3 px-2">
            {/* Carte 1 */}
            <motion.li
              className="text-center border hover:border-terre hover:scale-105 hover:shadow-md hover:shadow-terre transition-all duration-300 px-4 py-4 rounded-lg"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center text-red-600">
                <img src={Utilisateur} width={30} alt="Utilisateur" />
              </div>
              <h4 className="text-3xl text-gray-700 font-semibold mt-2">
                {t("statistical.card1.data")}
              </h4>
              <p className="mt-1 text-gray-700 text-md font-semibold">
                {t("statistical.card1.title")}
              </p>
            </motion.li>

            {/* Carte 2 */}
            <motion.li
              className="text-center border hover:border-terre hover:scale-105 hover:shadow-md hover:shadow-terre transition-all duration-300 px-4 py-4 rounded-lg"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center text-red-600">
                <img src={Drapeau} width={30} alt="Drapeau" />
              </div>
              <h4 className="text-3xl text-gray-700 font-semibold mt-2">
                {t("statistical.card2.data")}
              </h4>
              <p className="mt-1 text-gray-700 text-md font-semibold">
                {t("statistical.card2.title")}
              </p>
            </motion.li>

            {/* Carte 3 */}
            <motion.li
              className="text-center border hover:border-terre hover:scale-105 hover:shadow-md hover:shadow-terre transition-all duration-300 px-4 py-4 rounded-lg"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center text-red-600">
                <img src={Service} width={30} alt="Service" />
              </div>
              <h4 className="text-3xl text-gray-700 font-semibold mt-2">
                {t("statistical.card3.data")}
              </h4>
              <p className="mt-1 text-gray-700 text-md font-semibold">
                {t("statistical.card3.title")}
              </p>
            </motion.li>
          </ul>
        </motion.div>

        {/* Image de fond (Forme7) */}
        <motion.section
          className="hidden sm:block opacity-50 absolute left-10 -bottom-72 -z-20 transform -rotate-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={imageVariants}
        >
          <img src={Forme7} className="w-[3rem]" alt="Bilan Image" title="Bilan Image" />
        </motion.section>
      </div>
    </section>
  )
}

export default Statistical