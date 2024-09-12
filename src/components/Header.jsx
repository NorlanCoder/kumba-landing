import { useState } from 'react';
import { useEffect } from 'react';
import './css/style.css'
import img1 from '../img-phone-1.png' 
import logo_kumba from '../assets/img/LOGO_KUMBA_AUDACE-01.webp'


// navbar component
function Navbar(){

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
    const [menu_class, setMenuClass] = useState("menu-on-apear absolute flex-col w-[80%] left-1/2 transform hidden opacity-0 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu-on-apear absolute flex z-10 flex-col w-[80%] left-1/2 opacity-100 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
        }else{
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu absolute flex flex-col z-10 w-[80%] left-1/2 opacity-0 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
        }

        setIsMenuClicked(!isMenuClicked)
    }


    return <>
            <div className={menu_class}>
                <div className="content mt-8">
                    <div className='logo flex justify-center mb-6'>
                        <a href="#"><img className='w-16' src={logo_kumba} alt="" srcset="" /></a>
                    </div>
                    <div className="md:text-xl rounded-lg flex flex-col justify-center gap-y-4 font-extralight">
                        <a href="#home" className='border-t-2 w-full text-center border-terre py-3'><span className='mx-4'>Home</span></a>
                        <a href="#about" className='border-t-2 w-full text-center border-terre py-3'><span className='mx-4'>About</span></a>
                        <a href="#statistical" className='border-t-2 w-full text-center border-terre py-3'><span className='mx-4'>Statistiques</span></a>
                        <a href="#contact" className='border-y-2 rounded-b-xl w-full text-center border-terre pt-3 pb-7'><span className='mx-4'>Contactez-nous</span></a>
                    </div>
                </div>
            </div>
            <div className="navbar w-full md:pt-6 pt-2 flex items-center md:justify-around md:bg-white bg-[#e5e7e6] md:px-12 px-6 justify-between">
                <div className="logo z-10 mt-2">
                    <a href="#"><img className='w-20' src={logo_kumba} alt="" srcset="" /></a>
                </div>
                <div className="menu z-20 mt-2">
                    <div className="md:flex hidden font-extralight gap-x-8">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#statistical">Statistiques</a>
                        <a href="#contact">Contactez-nous</a>
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
                    <a href="#footer" className="md:flex hidden h-12 px-5 py-3 text-md font-md mx-auto rounded-lg bg-terre text-white">Télécharger</a>
                </div>
            </div>
        
    </>
}


// Header component
function Header(){
    return <>
    <section className="home">
    <div className="header">
        <div className=""><Navbar/></div>
        
        <div className="w-full md:h-[650px] -mt-20 md:flex md:bg-white bg-[#e5e7e6]">
            <div className="flex lg:justify-between justify-center px-10 md:mt-24 mt-12">
                <div className="text-content lg:w-[50%] z-10 md:mt-20 mt-16 lg:ml-24 sm:ml-12">
                    <h1 className="md:text-[60px] text-4xl font-[500] antialiased text-[#23273a] md:text-left text-center md:leading-[60px]">Logement rapide,
                    <br/> <span className="text-[#23273a]">simple, sûr</span></h1>
                    
                    <h1 className='md:text-xl text-md font-normal text-[#23273a] tracking-normal md:text-left text-center md:mt-12 mt-6 sm:mr-0'>Avec Kumba, explorez une vaste sélection de logements adaptés à vos besoins, avec des critères clairs et une interface intuitive. Simple, rapide, et toujours à votre service.
                    </h1>
                    <div className="buttons flex justify-center lg:justify-normal md:mt-[10%] mt-4 gap-x-4">
                        <a href="#" className='download inline rounded-xl w-[154px] text-terre border-2 border-terre text-center py-2 bg-[#e5e7e6] text-sm font-medium'>Télecharger</a>
                        <a href="#" className='download md:inline hidden rounded-xl  w-[154px] h-[36px] text-center py-2 border-2 border-[#B67332] bg-[#B67332] text-white text-sm font-medium'>Lire plus</a>
                    </div>

                    <div className="stats flex items-center lg:justify-normal justify-center md:mt-[10%] my-5">
                        <h1 className="number md:text-3xl text-xl font-bold">3,875</h1>
                        <p className="text md:text-xs text-[10px] md:ml-2 font-light md:leading-3 leading-[9px]">personne ont télechargé
                        <span className='block'>Kumba ce mois</span>  </p>
                    </div>
                </div>
                <div className="img lg:flex hidden z-10 lg:w-[45%] mr-[8%] px-8 justify-center items-center mt-0">
                    <img src={img1} className='w-[730px]' alt="" srcset="" />
                </div>
            </div>
            <div className="absolute md:block hidden z-0 right-shape rounded-l-3xl w-[38%] h-[650px] right-0 bg-[#e5e7e6]"></div>
        </div>
        
    </div>
    </section>
    </>
}

export default Header;