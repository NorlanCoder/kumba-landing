import { useState, useEffect } from "react";
import "./css/style.css";
import BG_Header from "../assets/ressource_kumba/img_header_1.webp";
import logo_kumba from "../assets/img/LOGO_KUMBA_AUDACE-01.webp";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// navbar component
function Navbar() {
  const [t, i18n] = useTranslation("global");


  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0 }, 
    exit: { opacity: 0, y: -20 }, 
  };

  
  const transition = (delay) => ({
    duration: 0.5,
    delay,
  });


  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState(
    "menu-on-apear absolute flex-col w-[0%] transform hidden opacity-0 duration-500  z-30 bg-[#e5e7e6f5]"
  );
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass(
        "menu-on-apear absolute flex z-10 flex-col w-[100%] left-1/2 opacity-100 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]"
      );
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass(
        "menu absolute flex flex-col z-10 w-[80%] left-1/2 opacity-0 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]"
      );
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={menu_class}>
        <div className="pt-6 px-6 select-none">
          <div className="md:text-xl rounded-lg w-full flex flex-col justify-center gap-y-4 font-extralight">
            <div className="md:hidden flex z-20 justify-end text-terre">
              <svg
                className={burger_class}
                onClick={updateMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line className="line1" x1="3" y1="12" x2="21" y2="12"></line>
                <line className="line2" x1="3" y1="6" x2="21" y2="6"></line>
                <line className="line3" x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
  
            {/* Animer chaque lien avec Framer Motion */}
            <AnimatePresence>
              <motion.a
                href="#home"
                className="border-b-2 w-full text-center border-terre py-3"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition(0.5)} // Délai pour le premier élément
              >
                <span className="mx-4">{t("navbar.menu1")}</span>
              </motion.a>
              <motion.a
                href="#about"
                className="border-b-2 w-full text-center border-terre py-3"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition(0.5)} // Délai pour le deuxième élément
              >
                <span className="mx-4">{t("navbar.menu2")}</span>
              </motion.a>
              <motion.a
                href="#faq"
                className="border-b-2 w-full text-center border-terre py-3"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition(0.5)} // Délai pour le troisième élément
              >
                <span className="mx-4">{t("navbar.menu3")}</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="border-b-2 rounded-b-xl w-full text-center border-terre pt-3 pb-7"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition(0.5)} // Délai pour le quatrième élément
              >
                <span className="mx-4">{t("navbar.menu4")}</span>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>
      </div>
  
      {/* Animer la navbar principale */}
      <motion.div
        className="max-w-6xl mx-auto navbar w-full z-40 flex items-center md:justify-between md:bg-white bg-[#e5e7e6] justify-between select-none"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="logo z-10 mt-2"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={transition(0.5)}
        >
          <a href="#">
            <img className="w-16 sm:w-20" src={logo_kumba} alt="" srcSet="" />
          </a>
        </motion.div>
        <div className="menu z-20 mt-2">
          <div className="md:flex hidden font-extralight gap-x-8">
            <motion.a
              href="#home"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={transition(0.5)}
            >
              {t("navbar.menu1")}
            </motion.a>
            <motion.a
              href="#about"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={transition(0.5)}
            >
              {t("navbar.menu2")}
            </motion.a>
            <motion.a
              href="#faq"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={transition(0.5)}
            >
              {t("navbar.menu3")}
            </motion.a>
            <motion.a
              href="#contact"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={transition(0.5)}
            >
              {t("navbar.menu4")}
            </motion.a>
          </div>
          
          <div className="md:hidden flex z-20 justify-end text-terre px-4">
            <svg
              className={burger_class}
              onClick={updateMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line className="line1" x1="3" y1="12" x2="21" y2="12"></line>
              <line className="line2" x1="3" y1="6" x2="21" y2="6"></line>
              <line className="line3" x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
  
        <div className="download-button md:flex hidden z-20">
          <motion.a
            href="#footer"
            className="md:flex hidden h-12 px-5 py-3 text-md font-md mx-auto rounded-lg bg-terre text-white"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={transition(0.5)}
          >
            {t("navbar.menu5")}
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

// Header component
function Header() {
  const [t, i18n] = useTranslation("global");

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  

  const imageVariants = {
    hidden: { opacity: 0, x: 100, opacity: 0 },
    visible: { opacity: 1, x: 0, opacity: 1 },
  };

  return (
    <>
      <section className="home mb-8">
        <div className="header sm:h-[90vh] md:h-[90vh] ">
          <div className="fixed top-0 w-full bg-white z-50">
            <Navbar />
          </div>

          <div className="max-w-4xl lg:max-w-6xl mx-auto px-2 md:px-0 md:h-[90vh] flex md:flex-row flex-col justify-between items-center md:bg-white bg-[#e5e7e6] pt-[15vh]">
            {/* Première div : Contenu texte */}
            <motion.div
              className="flex justify-center w-full lg:w-[45%] order-1 md:order-1" // Ordre 1 sur mobile et desktop
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }} // Délai entre les animations des enfants
            >
              <div className="flex items-center md:h-screen z-10 select-none">
                <div className="text-content">
                  {/* Titre 1 */}
                  <motion.h1
                    className="md:text-[60px] text-[40px] antialiased text-[#23273a] md:text-left text-center md:leading-[60px] sonia font-extrabold"
                    variants={textVariants}
                    transition={{ duration: 0.6 }}
                  >
                    {t("header.titre1")}
                    <br /> {t("header.titre2")}
                  </motion.h1>

                  {/* Description */}
                  <motion.h1
                    className="md:text-xl text-md font-normal text-[#23273a] tracking-normal md:text-left text-center mt-4 sm:mr-0"
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {t("header.description")}
                  </motion.h1>

                  {/* Boutons */}
                  <motion.div
                    className="buttons flex justify-center lg:justify-normal mt-5 gap-x-4"
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <a
                      href="#"
                      className="download inline rounded-xl w-[154px] text-terre border-2 border-terre text-center py-2 bg-[#e5e7e6] hover:bg-terre hover:text-[#e5e7e6] transition-all duration-150 text-md font-semibold"
                    >
                      {t("navbar.menu5")}
                    </a>
                    <a
                      href="#partners"
                      className="download md:inline hidden rounded-xl w-[154px] text-center py-2 border-2 border-[#5a4a41] bg-[#5a4a41] text-white text-md font-semibold"
                    >
                      {t("header.bouton2")}
                    </a>
                  </motion.div>

                  {/* Statistiques */}
                  <motion.div
                    className="stats flex items-center lg:justify-normal justify-center md:mt-[10%] my-5"
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h1 className="number md:text-3xl text-xl font-bold">
                      {t("header.nbre")}
                    </h1>
                    <p className="text md:text-xs text-[10px] md:ml-2 font-light md:leading-3 leading-[9px]">
                      {" "}
                      {t("header.texte1")}
                      <span className="block">{t("header.texte2")}</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Deuxième div : Image */}
            <motion.div
              className=" rounded-4xl right-0 flex justify-start items-end order-2 md:order-2" // Ordre 2 sur mobile et desktop
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                className="w-[22rem] sm:w-[43rem] rounded-3xl"
                src={BG_Header}
                alt=""
                srcSet=""
                variants={imageVariants}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
