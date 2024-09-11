import DOMPurify from 'dompurify';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import Forme1 from '../assets/img/forme1.png';
import Forme2 from '../assets/img/forme2.png';

function Accordion () {

  const [isOpen1, setIsOpen1] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleOpen1 = (id) => {
    setIsOpen1((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  

  const faqData1 = [
    {
      "questions": [
        {
            "id": "1",
            "question": "Qu'est-ce que Kumba ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "2",
            "question": "Comment fonctionne Kumba ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "3",
            "question": "Quels types de services puis-je avoir sur Kumba ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "4",
            "question": "Quels sont les différents types de biens immobiliers proposés par Kumba ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "5",
            "question": "Quels sont les moyens de paiement acceptés par Kumba ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "6",
            "question": "Quels sont les avantages d'utiliser Kumba ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "7",
            "question": "Comment Kumba protège-t-elle mes données personnelles ?",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
        {
            "id": "8",
            "question": "Quels sont les différents types de villas proposés",
            "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quo consectetur veniam, debitis ad nam incidunt cum eveniet sed eos laboriosam doloribus sapiente voluptatem veritatis"
        },
      ]
    },
  ];


  const [activeSection1, setActiveSection1] = useState(faqData1[0].id);

  faqData1.forEach((faq) => {
    faq.questions.forEach((question) => {
      question.answer = DOMPurify.sanitize(question.answer);
      question.answer = `<p>${question.answer}</p>`;
    });
  });


  const handleToggle = (questionId) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };  

  return (
    <>
        <section className="py-8">
            <section className="relative">
                <h1 className="text-gray-800 text-3xl text-center font-semibold sm:text-4xl">Questions Fréquemment Posées</h1>
                
                <section className="hidden sm:block opacity-30 absolute right-10 -top-20 -z-20 transform -rotate-6">
                    <img src={Forme2} className="w-[11rem]" alt="Bilan Image" title='Bilan Image' />
                </section>

                <section className="flex-grow mx-4 px-2 max-w-3xl sm:mx-auto my-12 rounded-xl">
                    {faqData1.find((section) => section.id === activeSection1)
                        ?.questions.map((question, index) => (
                        <div key={question.id} className="group m-4 text-gray-700 select-none bg-gray-100 border border-gray-100 rounded-t-md p-2">
                
                            <div className="cursor-pointer flex justify-between items-center font-medium" onClick={() => handleToggle(question.id)}>
                                <div className={`text-md text-gray-700 font-bold ${ activeQuestion === question.id ? "text-terre" : ""}`}>{question.question}</div>
                                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${ activeQuestion === question.id ? "rotate-90 text-terre" : ""}`}/>
                            </div>
                            <div className={`overflow-hidden transition-max-height duration-500 ${activeQuestion === question.id ? "max-h-screen" : "max-h-0"}`}>
                                <section className="mt-2 text-md">
                                    <div dangerouslySetInnerHTML={{ __html: question.answer }} />
                                </section>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="hidden sm:block opacity-30 absolute left-10 -bottom-20 -z-20 transform -rotate-6">
                    <img src={Forme1} className="w-[11rem]" alt="Bilan Image" title='Bilan Image' />
                </section>
            </section>
      </section>
    </>
  )
}

export default Accordion