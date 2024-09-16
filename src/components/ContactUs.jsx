import React from 'react';
import ContactUsImg from '../assets/img/contact_us.svg';
import { FiMail, FiPhone } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <section className="py-14 max-w-6xl mx-auto relative select-none" id="contact">
        <div className='flex item-center justify-center'>
          <h2 className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia">{t("contact.titre")}</h2>
        </div>
        <section className="bg-white py-4 mx-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          <div className="relative mb-8 md:mb-0 md:w-1/2 flex justify-center">
            <img src={ContactUsImg} width={80} alt="" className="z-10 relative w-52 md:w-80 h-auto"/>
          </div>


          <div className="md:w-1/2">
            <h3 className="text-2xl text-gray-800 font-semibold mb-2">{t("contact.soustitre1")} <br /> {t("contact.soustitre2")}</h3>
            <p className="mb-3">{t("contact.description")}</p>
            <div className="items-center gap-2 text-gray-600 mb-6 text-justify">
              <div className="flex items-center my-2 conte gap-2">
                <span className="border border-gray-300 p-2 rounded-md"><FiPhone /></span>
                <span className="font-semibold">(+99) 99 99 99 99</span></div>
              <div className="flex items-center my-2 conte gap-2">
                <span className="border border-gray-300 p-2 rounded-md"><FiMail /></span> 
                <span className="font-semibold">johndoe@gmail.com</span></div>
              <div className="flex items-center my-2 conte gap-2">
                <span className="border border-gray-300 p-2 rounded-md"><TfiLocationPin /></span> 
                <span className="font-semibold">XXX XXXX, Floor 4 San Francisco, CA</span></div>
            </div>
          </div>
        </section>
    </section>
  )
}

export default ContactUs