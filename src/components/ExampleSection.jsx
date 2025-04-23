import React from 'react';
import Section from './Section';
import BG_Header from "../assets/img/BG.png";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ExampleSection() {
  const [t] = useTranslation("global");
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Section avec image de fond et superposition colorée */}
      <Section 
        title="Notre mission" 
        description="Nous offrons des solutions innovantes pour répondre à vos besoins."
        backgroundImage={BG_Header}
        backgroundColor="bg-terre"
        opacity="opacity-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Service {item}</h3>
              <p className="text-gray-700">
                Description du service avec tous les détails importants 
                qui aideront les utilisateurs à comprendre notre offre.
              </p>
              <button className="mt-4 bg-terre text-white px-4 py-2 rounded-lg">
                En savoir plus
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section sans image de fond */}
      <Section 
        title="Nos partenaires" 
        description="Découvrez les entreprises qui nous font confiance."
      >
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-xl w-40 h-40 flex items-center justify-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-xl font-bold">Logo {item}</span>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default ExampleSection; 