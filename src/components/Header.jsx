import { useState, useEffect } from 'react';
import './css/style.css'
import img1 from '../img-phone-1.png' 
import logo_kumba from '../assets/img/LOGO_KUMBA_AUDACE-01.webp'
import { useTranslation } from 'react-i18next';


// navbar component
function Navbar(){

    const [t, i18n] = useTranslation("global");

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

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu-on-apear absolute flex-col w-[0%] transform hidden opacity-0 duration-500  z-30 bg-[#e5e7e6f5]")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu-on-apear absolute flex z-10 flex-col w-[100%] left-1/2 opacity-100 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
        }else{
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu absolute flex flex-col z-10 w-[80%] left-1/2 opacity-0 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
        }

        setIsMenuClicked(!isMenuClicked)
    }


    return <>
           <div className={menu_class}>
                <div className="pt-6 px-6 select-none">
                    <div className="md:text-xl rounded-lg w-full flex flex-col justify-center gap-y-4 font-extralight">
                        <div className='md:hidden flex z-20 justify-end text-terre'>
                            <svg className={burger_class} onClick={updateMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line className='line1' x1="3" y1="12" x2="21" y2="12"></line>
                            <line className='line2' x1="3" y1="6" x2="21" y2="6"></line>
                            <line className='line3' x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </div>
                        <a href="#home" className='border-b-2 w-full text-center border-terre py-3'><span className='mx-4'>{t("navbar.menu1")}</span></a>
                        <a href="#about" className='border-b-2 w-full text-center border-terre py-3'><span className='mx-4'>{t("navbar.menu2")}</span></a>
                        <a href="#faq" className='border-b-2 w-full text-center border-terre py-3'><span className='mx-4'>{t("navbar.menu3")}</span></a>
                        <a href="#contact" className='border-b-2 rounded-b-xl w-full text-center border-terre pt-3 pb-7'><span className='mx-4'>{t("navbar.menu4")}</span></a>
                        </div>
                    </div>
                </div>
            <div className="navbar w-full z-40 flex items-center md:justify-around md:bg-white bg-[#e5e7e6] md:px-12 px-6 justify-between select-none">
                <div className="logo z-10 mt-2">
                    <a href="#"><img className='w-16 sm:w-20' src={logo_kumba} alt="" srcset="" /></a>
                </div>
                <div className="menu z-20 mt-2">
                    <div className="md:flex hidden font-extralight gap-x-8">
                        <a href="#home">{t("navbar.menu1")}</a>
                        <a href="#about">{t("navbar.menu2")}</a>
                        <a href="#faq">{t("navbar.menu3")}</a>
                        <a href="#contact">{t("navbar.menu4")}</a>
                    </div>
                    <div className='md:hidden flex z-20 justify-end text-terre'>
                        <svg className={burger_class} onClick={updateMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line className='line1' x1="3" y1="12" x2="21" y2="12"></line>
                            <line className='line2' x1="3" y1="6" x2="21" y2="6"></line>
                            <line className='line3' x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                </div>
                
                <div className="download-button md:flex hidden z-20">
                    <a href="#footer" className="md:flex hidden h-12 px-5 py-3 text-md font-md mx-auto rounded-lg bg-terre text-white">{t("navbar.menu5")}</a>
                </div>
            </div>
        
    </>
}


// Header component
function Header(){

    const [t, i18n] = useTranslation("global")

    return <>
    <section className="home mb-8">
    <div className="header sm:h-[60vh] md:h-[90vh] ">
        <div className=""><Navbar/></div>
        
        <div className="w-full md:h-[90vh] -mt-28 md:flex md:bg-white bg-[#e5e7e6]">
            <div className="flex lg:justify-between justify-center px-10 md:mt-24 mt-12">
                <div className="text-content lg:w-[50%] z-10 mt-16 lg:ml-24 sm:ml-12 select-none">
                    <h1 className="md:text-[60px] text-4xl antialiased text-[#23273a] md:text-left text-center md:leading-[60px] sonia font-extrabold">{t("header.titre1")}<br/> {t("header.titre2")}</h1>
                    
                    <h1 className='md:text-xl text-md font-normal text-[#23273a] tracking-normal md:text-left text-center md:mt-12 mt-6 sm:mr-0'>{t("header.description")}</h1>
                    <div className="buttons flex justify-center lg:justify-normal md:mt-[10%] mt-4 gap-x-4">
                        <a href="#" className='download inline rounded-xl w-[154px] text-terre border-2 border-terre text-center py-2 bg-[#e5e7e6] hover:bg-terre hover:text-[#e5e7e6] transition-all duration-150 text-md font-semibold'>{t("navbar.menu5")}</a>
                        <a href="#partners" className='download md:inline hidden rounded-xl  w-[154px] text-center py-2 border-2 border-[#5a4a41] bg-[#5a4a41] text-white text-md font-semibold'>{t("header.bouton2")}</a>
                    </div>

                    <div className="stats flex items-center lg:justify-normal justify-center md:mt-[10%] my-5">
                        <h1 className="number md:text-3xl text-xl font-bold">{t("header.nbre")}</h1>
                        <p className="text md:text-xs text-[10px] md:ml-2 font-light md:leading-3 leading-[9px]"> {t("header.texte1")}
                        <span className='block'>{t("header.texte2")}</span></p>
                    </div>
                </div>
                <div className="img lg:flex hidden z-10 lg:w-[45%] mr-[8%] px-8 justify-center items-center mt-10">
                    <img src={img1} className='w-[730px]' alt="" srcset="" />
                </div>
            </div>
            <div className="absolute md:block hidden z-0 right-shape rounded-l-3xl w-[38%] h-[95vh] right-0 bg-[#e5e7e6]"></div>
        </div>
        
    </div>
    </section>
    </>
}

export default Header;