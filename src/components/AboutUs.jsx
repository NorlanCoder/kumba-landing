import img1 from '../img-phone-1.png' 

const AboutUs = () => {
    return (
        <div>
            <div className='flex item-center justify-center'>
                <h2 className="text-gray-800 text-3xl text-center font-semibold sm:text-4xl">À propos</h2>
            </div>
            <section className="bg-white py-12 mx-4 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
                <div className="relative mb-8 md:mb-0 md:w-1/2 flex justify-center">
                    <div className="bg-terre md:block  hidden h-52 w-10/12 rounded-lg absolute  top-16 left-8"></div>
                    <img
                        src={img1}
                        alt=""
                        className="z-10 relative w-60 h-auto shadow-xl"
                    />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-6">Smart Home’s Smart Services</h3>
                    <p className="text-gray-600 mb-6 text-justify">
                        Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile.
                    </p>
                    <button className="bg-terre text-white py-2 px-6 rounded-lg hover:bg-terre2 transition duration-300">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
