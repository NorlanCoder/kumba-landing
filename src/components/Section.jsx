import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Section({ 
  title, 
  description, 
  backgroundImage, 
  backgroundColor = "bg-terre", 
  opacity = "opacity-10",
  children 
}) {
  const [t] = useTranslation("global");
  
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 relative">
      {backgroundImage && (
        <>
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}></div>
          <div className={`absolute inset-0 ${backgroundColor} ${opacity}`}></div>
        </>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {title && (
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-[#23273a]"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
          )}
          
          {description && (
            <motion.p
              className="text-lg md:text-4xl max-w-xl mx-auto text-terre"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section; 