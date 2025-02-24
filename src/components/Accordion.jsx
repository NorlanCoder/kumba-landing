import DOMPurify from "dompurify";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Forme1 from "../assets/img/forme1.webp";
import Forme2 from "../assets/img/forme2.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Accordion() {

  const [t, i18n] = useTranslation("global");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants pour les animations des cartes
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Variants pour les images de fond
  const shapeVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 0.3, rotate: -6 },
  };


  return (
    <section className="py-8" id="faq">
      <section className="relative select-none">
        {/* Titre */}
        <motion.h1
          className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={textVariants}
        >
          {t("faq.titre")}
        </motion.h1>

        {/* Image de fond (Forme2) */}
        <motion.section
          className="hidden sm:block opacity-30 absolute right-10 -top-20 -z-20 transform -rotate-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={shapeVariants}
        >
          <img src={Forme2} className="w-[4rem]" alt="Bilan Image" title="Bilan Image" />
        </motion.section>

        {/* Questions et réponses */}
        <motion.section
          className="flex-grow mx-4 sm:px-2 max-w-4xl md:mx-auto my-12 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }} // Délai entre les animations des enfants
        >
          {/* Question 1 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("1")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "1" ? "text-terre" : ""}`}>
                {t("faq.question1")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "1" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "1" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer1")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 2 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("2")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "2" ? "text-terre" : ""}`}>
                {t("faq.question2")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "2" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "2" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer2")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 3 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("3")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "3" ? "text-terre" : ""}`}>
                {t("faq.question3")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "3" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "3" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer3")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 4 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("4")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "4" ? "text-terre" : ""}`}>
                {t("faq.question4")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "4" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "4" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer4")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 5 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("5")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "5" ? "text-terre" : ""}`}>
                {t("faq.question5")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "5" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "5" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer5")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 6 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("6")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "6" ? "text-terre" : ""}`}>
                {t("faq.question6")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "6" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "6" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer6")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 7 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("7")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "7" ? "text-terre" : ""}`}>
                {t("faq.question7")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "7" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "7" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer7")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 8 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("8")}>
              <div className={`text-md text-gray-700 font-bold ${activeQuestion === "8" ? "text-terre" : ""}`}>
                {t("faq.question8")}
              </div>
              <FaPlus className={`m-2 ml-2 transition-all duration-200 ${activeQuestion === "8" ? "rotate-90 text-terre" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === "8" ? "max-h-screen" : "max-h-0"}`}>
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer8")}</div>
              </section>
            </div>
          </motion.div>
        </motion.section>

        {/* Image de fond (Forme1) */}
        <motion.section
          className="hidden sm:block opacity-30 absolute left-10 -bottom-20 -z-20 transform -rotate-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={shapeVariants}
        >
          <img src={Forme1} className="w-[4rem]" alt="Bilan Image" title="Bilan Image" />
        </motion.section>
      </section>
    </section>
  );
}

export default Accordion;
