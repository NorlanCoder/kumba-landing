import img1 from '../img-phone-1.png' 


// navbar component
function Navbar(){
    return <>
        <div className="navbar w-full mt-6 flex items-center justify-around">
            <div className="logo z-20">
                <h1 className="text-4xl font-bold">KUMBA</h1>
            </div>
            <div className="menu z-20  mt-2">
                <ul className="flex font-extralight gap-x-8">
                    <li>Home</li>
                    <li>About</li>
                    <li>Statistiques</li>
                    <li>Solutions</li>
                </ul>
            </div>
            <div className="download-button z-20">
                <a href="#" className="h-12 px-5 py-3 text-md font-md mx-auto rounded-lg bg-[#e58d66] text-white">Télécharger</a>
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
                <div className="text-content lg:w-[50%] z-10 mt-20 ml-24">
                    <h1 className="text-[60px] font-[500] antialiased text-[#23273a] leading-[50px]">Drive without
                    <br/> <span className="text-[#23273a]">worries,trust us</span></h1>
                    
                    <h1 className='text-xl font-normal text-[#23273a] tracking-normal mt-12 my-4 lg:mr-[5%] sm:mr-0'>Discover the freedom of getting around hassle-free with our TripShare app. 
                        Simplify your life and discover a new way to get around.
                    </h1>
                    <div className="buttons flex mx-5 lg:mt-[10%] mt-4 gap-x-4">
                        <div className="download inline rounded-xl w-[154px] text-white text-center py-2 bg-[#8095f4] text-sm font-medium">Télecharger</div>
                        <div className="download inline rounded-xl  w-[154px] h-[36px] text-center py-2 bg-[#d6defe] text-[#23273a] text-sm font-medium">Lire plus</div>
                    </div>

                    <div className="stats flex items-center mt-[10%]">
                        <h1 className="number text-3xl font-bold">3,875</h1>
                        <p className="text text-xs ml-2 font-light leading-3 ">people have downloaded the
                        <span className='block'>application this month</span>  </p>
                    </div>
                </div>
                <div className="img lg:flex hidden z-10 lg:w-[45%] mr-[8%] px-8 justify-center items-center mt-0">
                    <img src={img1} className='w-[730px]' alt="" srcset="" />
                </div>
            </div>
            <div className="absolute z-0 right-shape rounded-l-3xl w-[38%] h-[650px] right-0 bg-[#b8efc4]"></div>
        </div>
        
    </div>
    </>
}

export default Header;