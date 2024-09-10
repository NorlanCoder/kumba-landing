import DOMPurify from 'dompurify';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

function Accordion () {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleOpen1 = (id) => {
    setIsOpen1((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  
  const toggleOpen2 = (id) => {
    setIsOpen2((prevState) => ({
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

  const faqData2 = [
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
    }
  ];

  const [activeSection1, setActiveSection1] = useState(faqData1[0].id);
  const [activeSection2, setActiveSection2] = useState(faqData2[0].id);

  faqData1.forEach((faq) => {
    faq.questions.forEach((question) => {
      question.answer = DOMPurify.sanitize(question.answer);
      question.answer = `<p>${question.answer}</p>`;
    });
  });
  
  faqData2.forEach((faq) => {
    faq.questions.forEach((question) => {
      question.answer = DOMPurify.sanitize(question.answer);
      question.answer = `<p>${question.answer}</p>`;
    });
  });

  return (
    <>
        <section>
            <h1 className="text-gray-800 text-3xl text-center font-semibold sm:text-4xl">Questions Fréquemment Posées</h1>
            <section className="flex flex-wrap md:flex-nowrap gap-7 py-4 px-2 max-w-6xl mx-auto" id="faq-section">
                <section className="flex-grow w-1/2 mx-2 md:mx-auto my-2 border border-slate-200 rounded-xl">
                    {faqData1.find((section) => section.id === activeSection1)
                    ?.questions.map((question, index) => (
                        <div key={question.id} className="group m-4 text-gray-700 select-none">

                            <div className="cursor-pointer flex justify-between items-center text-lg font-medium" onClick={() => toggleOpen1(question.id)}>
                                <div className={`text-md text-gray-700 font-bold ${isOpen1[question.id] ? "text-terre" : "" }`}>{question.question}</div>
                                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${isOpen1[question.id] ? "rotate-90 text-terre" : "" }`}/>
                            </div>

                            <div className={`overflow-hidden transition-max-height duration-500 ${ isOpen1[question.id] ? "max-h-screen" : "max-h-0" }`}>
                                <section className="mt-2 text-md">
                                    <div dangerouslySetInnerHTML={{ __html: question.answer }} />
                                </section>
                            </div>

                            {index < faqData1.find((section) => section.id === activeSection1).questions.length - 1 && (
                                <div className="text-slate-400">
                                    <hr className="border-1 transition-all bg-slate-400"/>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
                <section className="flex-grow w-1/2 mx-2 md:mx-auto my-2 border border-slate-200 rounded-xl">
                    {faqData2.find((section) => section.id === activeSection2)
                    ?.questions.map((question, index) => (
                        <div key={question.id} className="group m-4 text-gray-700 select-none">

                            <div className="cursor-pointer flex justify-between items-center text-lg font-medium" onClick={() => toggleOpen2(question.id)}>
                                <div className={`text-[95%]md text-gray-700 font-bold ${isOpen2[question.id] ? "text-terre" : "" }`}>{question.question}</div>
                                <FaPlus className={`m-2 ml-2 transition-all duration-200 ${isOpen2[question.id] ? "rotate-90 text-terre" : "" }`}/>
                            </div>

                            <div className={`overflow-hidden transition-max-height duration-500 ${ isOpen2[question.id] ? "max-h-screen" : "max-h-0" }`}>
                                <section className="mt-2 text-md">
                                    <div dangerouslySetInnerHTML={{ __html: question.answer }} />
                                </section>
                            </div>

                            {index < faqData1.find((section) => section.id === activeSection1).questions.length - 1 && (
                                <div className="text-slate-400">
                                    <hr className="border-1 transition-all bg-slate-400"/>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </section>
        </section>
    </>
  )
}

export default Accordion