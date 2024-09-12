import img1 from '../img-phone-1.png';
import Iphone15 from '../assets/img/iphone15_mockup2.png';
import Forme4 from '../assets/img/forme4.png';

const AboutUs = () => {
    return (
        <section className="py-14 max-w-6xl mx-auto relative select-none" id="about">
            <div className='flex item-center justify-center'>
                <h2 className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia">À propos</h2>
            </div>
            <section className="bg-white py-12 mx-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="relative mb-8 md:mb-0 md:w-1/2 flex justify-center">
                <div className="bg-terre md:block hidden h-52 w-10/12 rounded-lg absolute top-44 left-8">
                    <div className="absolute flex items-center justify-center h-full w-full text-white">
                    <span className="text-9xl sonia">Kumba</span>
                    </div>
                </div>
                <img src={Iphone15} alt="" className="z-10 relative w-28 md:w-52 h-auto"/>
            </div>

                <section className="hidden sm:block opacity-50  absolute right-10 -top-10 z-20 rotate-12">
                    <img src={Forme4} className="w-[4rem]" alt="Bilan Image" title='Bilan Image' />
                </section>

                <div className="md:w-1/2">
                    <h3 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-6">Des multitudes de services à votre disposition</h3>
                    <p className="text-gray-600 mb-6 text-justify">
                        Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default AboutUs;
