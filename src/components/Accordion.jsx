import DOMPurify from "dompurify";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
// import Forme1 from "../assets/img/forme1.webp";
// import Forme2 from "../assets/img/forme2.webp";
import BG_Header from "../assets/img/BG.png";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Accordion() {
  const [t, i18n] = useTranslation("global");
  // const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState({});

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
  // const shapeVariants = {
  //   hidden: { opacity: 0, rotate: -10 },
  //   visible: { opacity: 0.3, rotate: -6 },
  // };

  return (
    <section className="" id="faq">
      <section className="relative select-none flex flex-col pb-8 overflow-visible">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${BG_Header})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Image de fond (Forme2) */}
        {/* <motion.section
          className="hidden sm:block opacity-30 absolute right-10 -top-20 -z-20 transform -rotate-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={shapeVariants}
        >
          <img src={Forme2} className="w-[4rem]" alt="Bilan Image" title="Bilan Image" />
        </motion.section> */}

        {/* Questions et réponses */}
        <motion.section
  className="flex-grow mx-4 sm:px-2 max-w-4xl md:mx-auto  rounded-xl bg-white mt-5 h-auto"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  transition={{ staggerChildren: 0.2 }}
  variants={{ hidden: {}, visible: {} }} // ✅ Ajoute ça
>

          {/* Titre */}
          <motion.h1
            className="text-terre text-3xl text-center font-bold sm:text-5xl mt-5 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={textVariants}
          >
            {t("faq.titre")}
          </motion.h1>

          {/* Question 1 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("1")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "1" ? "text-terre" : ""
                }`}
              >
                {t("faq.question1")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "1" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "1" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer1")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 2 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("2")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "2" ? "text-terre" : ""
                }`}
              >
                {t("faq.question2")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "2" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "2" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer2")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 3 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5  }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("3")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "3" ? "text-terre" : ""
                }`}
              >
                {t("faq.question3")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "3" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "3" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer3")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 4 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("4")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "4" ? "text-terre" : ""
                }`}
              >
                {t("faq.question4")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "4" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "4" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer4")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 5 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("5")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "5" ? "text-terre" : ""
                }`}
              >
                {t("faq.question5")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "5" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "5" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer5")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 6 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("6")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "6" ? "text-terre" : ""
                }`}
              >
                {t("faq.question6")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "6" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "6" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer6")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 7 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("7")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "7" ? "text-terre" : ""
                }`}
              >
                {t("faq.question7")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "7" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "7" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer7")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 8 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("8")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "8" ? "text-terre" : ""
                }`}
              >
                {t("faq.question8")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "8" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "8" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer8")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 9 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("9")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "9" ? "text-terre" : ""
                }`}
              >
                {t("faq.question9")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "9" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "9" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer9")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 10 */}
          <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("10")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "10" ? "text-terre" : ""
                }`}
              >
                {t("faq.question10")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "10" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "10" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer10")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 11 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("11")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "11" ? "text-terre" : ""
                }`}
              >
                {t("faq.question11")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "11" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "11" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer11")}</div>
              </section>
            </div>
          </motion.div> 

          {/* Question 12 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("12")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "12" ? "text-terre" : ""
                }`}
              >
                {t("faq.question12")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "12" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "12" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer12")}</div>
              </section>
            </div>
          </motion.div> 

          {/* Question 13 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("13")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "13" ? "text-terre" : ""
                }`}
              >
                {t("faq.question13")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "13" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "13" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer13")}</div>
              </section>
            </div>
          </motion.div> 

          {/* Question 14 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("14")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "14" ? "text-terre" : ""
                }`}
              >
                {t("faq.question9")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "14" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "14" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer9")}</div>
              </section>
            </div>
          </motion.div> 

          {/* Question 15 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("15")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "15" ? "text-terre" : ""
                }`}
              >
                {t("faq.question15")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "15" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "15" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer15")}</div>
              </section>
            </div>
          </motion.div>

          {/* Question 16 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("16")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "16" ? "text-terre" : ""
                }`}
              >
                {t("faq.question16")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "16" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "16" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer16")}</div>
              </section>
            </div>
          </motion.div> 
 
          {/* Question 17 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("17")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "17" ? "text-terre" : ""
                }`}
              >
                {t("faq.question17")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "17" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "17" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer17")}</div>
              </section>
            </div>
          </motion.div> 

          {/* Question 18 */}
           <motion.div
            className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div
              className="cursor-pointer flex justify-between items-center font-medium"
              onClick={() => handleToggle("18")}
            >
              <div
                className={`text-md text-gray-700 font-bold ${
                  activeQuestion === "18" ? "text-terre" : ""
                }`}
              >
                {t("faq.question18")}
              </div>
              <FaPlus
                className={`m-2 ml-2 transition-all duration-200 ${
                  activeQuestion === "18" ? "rotate-90 text-terre" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeQuestion === "18" ? "max-h-screen" : "max-h-0"
              }`}
            >
              <section className="my-3 px-3 rounded-md text-md text-justify">
                <div>{t("faq.answer18")}</div>
              </section>
            </div>
          </motion.div> 
          
        </motion.section>

        {/* Image de fond (Forme1) */}
        {/* <motion.section
          className="hidden sm:block opacity-30 absolute left-10 -bottom-20 -z-20 transform -rotate-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={shapeVariants}
        >
          <img src={Forme1} className="w-[4rem]" alt="Bilan Image" title="Bilan Image" />
        </motion.section> */}
      </section>
    </section>
  );
}

export default Accordion;

