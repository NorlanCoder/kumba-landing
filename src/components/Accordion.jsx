import DOMPurify from "dompurify";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Forme1 from "../assets/img/forme1.png";
import Forme2 from "../assets/img/forme2.png";
import { useTranslation } from "react-i18next";

function Accordion() {

  const [t, i18n] = useTranslation("global");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (questionId) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };
  

  return (
    <>
      <section className="py-8" id="faq">
        <section className="relative select-none">
          <h1 className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia">{t("faq.titre")}</h1>

          <section className="hidden sm:block opacity-30 absolute right-10 -top-20 -z-20 transform -rotate-6">
            <img src={Forme2} className="w-[11rem]" alt="Bilan Image" title="Bilan Image" />
          </section>


          <section className="flex-grow mx-4 sm:px-2 max-w-3xl md:mx-auto my-12 rounded-xl">
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("1")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "1" ? "text-terre" : "" }`}>
                  {t("faq.question1")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "1" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "1" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer1")}</div>
                </section>
              </div>
            </div>

            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("2")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "2" ? "text-terre" : "" }`} >
                  {t("faq.question2")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "2" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "2" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer2")}</div>
                </section>
              </div>
            </div>
            
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("3")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "3" ? "text-terre" : "" }`} >
                 {t("faq.question3")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "3" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "3" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer3")}</div>
                </section>
              </div>
            </div>
            
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("4")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "4" ? "text-terre" : "" }`} >
                {t("faq.question4")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "4" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "4" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer4")}</div>
                </section>
              </div>
            </div>
            
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("5")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "5" ? "text-terre" : "" }`} >
                {t("faq.question5")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "5" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "5" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer5")}</div>
                </section>
              </div>
            </div>
            
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("6")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "6" ? "text-terre" : "" }`} >
                {t("faq.question6")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "6" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "6" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer6")}</div>
                </section>
              </div>
            </div>
            
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("7")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "7" ? "text-terre" : "" }`} >
                {t("faq.question7")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "7" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "7" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer7")}</div>
                </section>
              </div>
            </div>
           
            <div className="group my-2 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
              <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle("8")}>
                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === "8" ? "text-terre" : "" }`} >
                {t("faq.question8")}
                </div>
                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === "8" ? "rotate-90 text-terre" : "" }`} />
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ${ activeQuestion === "8" ? "max-h-screen" : "max-h-0" }`} >
                <section className="my-3 px-3 rounded-md text-md text-justify">
                  <div>{t("faq.answer8")}</div>
                </section>
              </div>
            </div>
          </section>

          <section className="hidden sm:block opacity-30 absolute left-10 -bottom-20 -z-20 transform -rotate-6">
            <img
              src={Forme1}
              className="w-[11rem]"
              alt="Bilan Image"
              title="Bilan Image"
            />
          </section>
        </section>
      </section>
    </>
  );
}

export default Accordion;
