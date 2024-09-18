import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const Modal = ({ closeModalPolicies }) => {

    const [t, i18n] = useTranslation("global")
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.focus();
    return () => {
        if(Modal.current)
        modalRef.current.blur();
    };
  }, []);

  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
      onKeyDown={(e) => e.key === 'Escape' && closeModalPolicies()}
    >
      <div className="bg-white md:h-[90%] h-[50%] overflow-auto p-10 rounded-lg shadow-lg max-w-4xl w-full relative">
        <div>
            <button
            onClick={closeModalPolicies}
            className="fixed top-2 right-2 font-semibold bg-white text-terre border-2 border-terre hover:bg-terre hover:text-white rounded-full px-4 py-2">
            X
            </button>
            
        </div>
        <div className='w-full text-xs'>
    <header class="bg-white shadow-md p-6">
        <h1 class="md:text-3xl text-xl font-bold text-terre mb-2">{t("featurePolicy.title")}</h1>
        <p class="text-md text-gray-600">{t("featurePolicy.lastUpdated")}</p>
    </header>
    

    <main class="container mx-auto px-4 py-8">
        <section id="introduction" class="mb-8">
            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t("featurePolicy.sections.0.title")}</h2>
            <p class="mb-4">
                {t('featurePolicy.sections.0.content')}
            </p>
        </section>
        
        <section id="search-functionality" class="mb-8">

            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t("featurePolicy.sections.1.title")}</h2>
            <p class="mb-4">
            {t("featurePolicy.sections.1.content")}
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>{t("featurePolicy.sections.1.features.0.title")}</strong> {t("featurePolicy.sections.1.features.0.content")}</li>
                <li><strong>{t("featurePolicy.sections.1.features.1.title")}</strong> {t("featurePolicy.sections.1.features.1.content")}</li>
                <li><strong>{t("featurePolicy.sections.1.features.2.title")}</strong> {t("featurePolicy.sections.1.features.2.content")}</li>
                <li><strong>{t("featurePolicy.sections.1.features.3.title")}</strong> {t("featurePolicy.sections.1.features.3.content")}</li>
                <li><strong>{t("featurePolicy.sections.1.features.4.title")}</strong> {t("featurePolicy.sections.1.features.4.content")}</li>
                <li><strong>{t("featurePolicy.sections.1.features.5.title")}</strong> {t("featurePolicy.sections.1.features.5.content")}</li>
            </ul>
            
        </section>

        <section id="account-management" className="mb-8">
      <h2 className="md:text-2xl text-lg text-terre font-semibold mb-4">
        {t('featurePolicy.sections.2.title')}
      </h2>
      <p className="mb-4">
      {t('featurePolicy.sections.2.content')}
      </p>
      <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
        <li>
          <strong>{t('featurePolicy.sections.2.features.0.title')} : </strong> 
          {t('featurePolicy.sections.2.features.0.content')} 
        </li>
        <li>
          <strong>{t('featurePolicy.sections.2.features.1.title')} : </strong> 
          {t('featurePolicy.sections.2.features.1.content')}
        </li>
        <li>
          <strong>{t('featurePolicy.sections.2.features.2.title')} : </strong> 
          {t('featurePolicy.sections.2.features.2.content')}
        </li>
        <li>
          <strong>{t('featurePolicy.sections.2.features.3.title')} : </strong> 
          {t('featurePolicy.sections.2.features.3.content')}
        </li>
        <li>
          <strong>{t('featurePolicy.sections.2.features.4.title')} : </strong> 
          {t('featurePolicy.sections.2.features.4.content')}
        </li>
        <li>
          <strong>{t('featurePolicy.sections.2.features.5.title')} : </strong> 
          {t('featurePolicy.sections.2.features.5.content')}
        </li>
      </ul>
    </section>

        <section id="listing-management" class="mb-8">
            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t('featurePolicy.sections.3.title')}</h2>
            <p class="mb-4">
            {t('featurePolicy.sections.3.content')}
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>{t('featurePolicy.sections.3.features.0.title')} : </strong>{t('featurePolicy.sections.3.features.0.content')}</li>
                <li><strong>{t('featurePolicy.sections.3.features.1.title')} : </strong>{t('featurePolicy.sections.3.features.1.content')}</li>
                <li><strong>{t('featurePolicy.sections.3.features.2.title')} : </strong>{t('featurePolicy.sections.3.features.2.content')}</li>
                <li><strong>{t('featurePolicy.sections.3.features.3.title')} : </strong>{t('featurePolicy.sections.3.features.3.content')}</li>
                <li><strong>{t('featurePolicy.sections.2.features.4.title')} : </strong>{t('featurePolicy.sections.3.features.4.content')}</li>
            </ul>
        </section>

        <section id="communication-tools" class="mb-8">
            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t('featurePolicy.sections.4.title')}</h2>
            <p class="mb-4">
            {t('featurePolicy.sections.4.content')}
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>{t('featurePolicy.sections.4.features.0.title')} : </strong>{t('featurePolicy.sections.4.features.0.content')}</li>
                <li><strong>{t('featurePolicy.sections.4.features.1.title')} : </strong>{t('featurePolicy.sections.4.features.1.content')}</li>
                <li><strong>{t('featurePolicy.sections.4.features.2.title')} : </strong>{t('featurePolicy.sections.4.features.2.content')}</li>
            </ul>
        </section>

        <section id="data-security" class="mb-8">
            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t('featurePolicy.sections.5.title')}</h2>
            <p class="mb-4">
            {t('featurePolicy.sections.5.content')}
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>{t('featurePolicy.sections.5.features.0.title')} : </strong>{t('featurePolicy.sections.5.features.0.content')}</li>
                <li><strong>{t('featurePolicy.sections.5.features.1.title')} : </strong>{t('featurePolicy.sections.5.features.1.content')}</li>
                <li><strong>{t('featurePolicy.sections.5.features.2.title')} : </strong>{t('featurePolicy.sections.5.features.2.content')}</li>
                <li><strong>{t('featurePolicy.sections.5.features.3.title')} : </strong>{t('featurePolicy.sections.5.features.3.content')}</li>
            </ul>
        </section>

        <section id="support" class="mb-8">
            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t('featurePolicy.sections.6.title')}</h2>
            <p class="mb-4">
            {t('featurePolicy.sections.6.content')}
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>{t('featurePolicy.sections.6.features.0.title')} : </strong>{t('featurePolicy.sections.6.features.0.content')}</li>
                <li><strong>{t('featurePolicy.sections.6.features.1.title')} : </strong>{t('featurePolicy.sections.6.features.1.content')}</li>
                <li><strong>{t('featurePolicy.sections.6.features.2.title')} : </strong>{t('featurePolicy.sections.6.features.2.content')}</li>
            </ul>
        </section>

        <section id="conclusion" class="mb-8">
            <h2 class="md:text-2xl text-lg text-terre font-semibold mb-4">{t('featurePolicy.sections.7.title')}</h2>
            <p class="mb-4">
            {t('featurePolicy.sections.7.content')}
            </p>
        </section>
    </main>

    
        <p class="text-terre text-sm">&copy; {t('featurePolicy.sections.8.content')}</p>
    
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
