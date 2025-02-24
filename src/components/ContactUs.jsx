import React from 'react';
import ContactUsImg from '../assets/img/contact_us.svg';
import { FiMail, FiPhone } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const ContactUs = () => {

  const [t, i18n] = useTranslation("global")
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-8 sm:py-14 max-w-6xl mx-auto relative select-none" id="contact">
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
          {t("contact.titre")}
        </h2>
      </motion.div>

      {/* Contenu principal */}
      <section className="bg-white py-4 mx-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Image (ContactUsImg) */}
        <motion.div
          className="relative mb-8 md:mb-0 md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={imageVariants}
        >
          <img src={ContactUsImg} width={100} alt="" className="z-10 relative w-96 h-auto" />
        </motion.div>

        {/* Contenu texte */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={textVariants}
        >
          <h3 className="text-2xl text-gray-800 font-semibold mb-2">
            {t("contact.soustitre1")} <br /> {t("contact.soustitre2")}
          </h3>
          <p className="mb-3">{t("contact.description")}</p>
          <div className="items-center gap-2 text-gray-600 mb-6 text-justify">
            {/* Numéro de téléphone */}
            <motion.div
              className="flex items-center my-2 conte gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={textVariants}
            >
              <span className="border border-gray-300 p-2 rounded-md"><FiPhone /></span>
              <span className="font-semibold">(+99) 99 99 99 99</span>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-center my-2 conte gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              variants={textVariants}
            >
              <span className="border border-gray-300 p-2 rounded-md"><FiMail /></span>
              <span className="font-semibold">johndoe@gmail.com</span>
            </motion.div>

            {/* Adresse */}
            <motion.div
              className="flex items-center my-2 conte gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              variants={textVariants}
            >
              <span className="border border-gray-300 p-2 rounded-md"><TfiLocationPin /></span>
              <span className="font-semibold">XXX XXXX, Floor 4 San Francisco, CA</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </section>
  )
}

export default ContactUs