import img1 from '../img-phone-1.png' 


// navbar component
function Navbar(){
    return <>
        <div className="navbar w-full mt-6 flex items-center md:justify-around sm:px-8 justify-between">
            <div className="logo z-20">
                <a href="#"><h1 className="text-4xl text-terre font-bold">KUMBA</h1></a>
            </div>
            <div className="menu z-20 mt-2">
                <ul className="md:flex hidden font-extralight gap-x-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Statistiques</a></li>
                    <li><a href="#">Solutions</a></li>
                </ul>
                <div className='md:hidden flex text-terre w-16'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
            </div>
            <div className="download-button md:flex hidden z-20">
                <a href="#" className="md:flex hidden h-12 px-5 py-3 text-md font-md mx-auto rounded-lg bg-terre text-white">Télécharger</a>
            </div>
        </div>
    </>
}


// Header component
function Header(){
    return <>
    <div className="header">
        <div className=""><Navbar/></div>
        
        <div className="w-full h-[650px] -mt-16 bg-white flex">
            <div className="flex lg:justify-between sm:justify-center px-10 mt-24">
                <div className="text-content lg:w-[50%] z-10 mt-20 lg:ml-24 ml-12">
                    <h1 className="text-[60px] font-[500] antialiased text-[#23273a] leading-[50px]">Drive without
                    <br/> <span className="text-[#23273a]">worries,trust us</span></h1>
                    
                    <h1 className='text-xl font-normal text-[#23273a] tracking-normal mt-12 my-4 lg:mr-[5%] sm:mr-0'>Discover the freedom of getting around hassle-free with our TripShare app. 
                        Simplify your life and discover a new way to get around.
                    </h1>
                    <div className="buttons flex sm:justify-center lg:justify-normal mx-5 mt-[10%] gap-x-4">
                        <a href="#" className='download inline rounded-xl w-[154px] text-terre border-1 border-terre text-center py-2 bg-[#e5e7e6] text-sm font-medium'>Télecharger</a>
                        <a href="#" className='download inline rounded-xl  w-[154px] h-[36px] text-center py-2 bg-[#B67332] text-white text-sm font-medium'>Lire plus</a>
                    </div>

                    <div className="stats flex items-center lg:justify-normal sm:justify-center mt-[10%]">
                        <h1 className="number text-3xl font-bold">3,875</h1>
                        <p className="text text-xs md:ml-2 font-light leading-3 ">people have downloaded the
                        <span className='block'>application this month</span>  </p>
                    </div>
                </div>
                <div className="img lg:flex hidden z-10 lg:w-[45%] mr-[8%] px-8 justify-center items-center mt-0">
                    <img src={img1} className='w-[730px]' alt="" srcset="" />
                </div>
            </div>
            <div className="absolute z-0 right-shape rounded-l-3xl w-[38%] h-[650px] right-0 bg-[#e5e7e6]"></div>
        </div>
        
    </div>
    </>
}

export default Header;