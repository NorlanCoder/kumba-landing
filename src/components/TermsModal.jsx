import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const Modal = ({ closeModalTerms }) => {
    const [t,i18n] = useTranslation("global")
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
      onKeyDown={(e) => e.key === 'Escape' && closeModalTerms()}
    >
      <div className="bg-white h-[90%] overflow-auto p-10 rounded-lg shadow-lg max-w-4xl w-full relative">
        <div>
          <button
            onClick={closeModalTerms}
            className="fixed top-2 right-2 font-semibold bg-white text-terre border-2 border-terre hover:bg-terre hover:text-white rounded-full px-4 py-2"
          >
            X
          </button>
        </div>

        <div className='w-full text-xs'>
          <header className="bg-white shadow-md p-6">
            <h1 className="text-3xl text-terre font-bold mb-2">{t('terms_conditions.title')}</h1>
            <p className="text-sm text-gray-600">{t('terms_conditions.last_updated')}</p>
          </header>

          <main className="container mx-auto px-4 py-8">
            <section id="introduction" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.introduction.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.introduction.content')}</p>
            </section>

            <section id="account-usage" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.account_usage.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.account_usage.content')}</p>
              <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                {t('terms_conditions.sections.account_usage.list_items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </section>

            <section id="services-usage" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.services_usage.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.services_usage.content')}</p>
              <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                {t('terms_conditions.sections.services_usage.list_items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </section>

            <section id="listing-creation" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.listing_creation.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.listing_creation.content')}</p>
              <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                {t("terms_conditions.sections.listing_creation.list_items", { returnObjects: true }).map((item, index) => {
                  return(
                    <>
                    <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                  </>
                  );
                })}
              </ul>
            </section>

            <section id="payment-terms" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.payment_terms.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.payment_terms.content')}</p>
              <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                {t('terms_conditions.sections.payment_terms.list_items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </section>

            <section id="liability" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.liability.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.liability.content')}</p>
              <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                {t('terms_conditions.sections.liability.list_items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </section>

            <section id="termination" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.termination.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.termination.content')}</p>
              <ul className="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                {t('terms_conditions.sections.termination.list_items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </section>

            <section id="changes-to-terms" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.changes_to_terms.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.changes_to_terms.content')}</p>
            </section>

            <section id="contact-info" className="mb-8">
              <h2 className="text-2xl text-terre font-semibold mb-4">
                {t('terms_conditions.sections.contact_info.title')}
              </h2>
              <p className="mb-4">{t('terms_conditions.sections.contact_info.content')}</p>
              <p className="mb-4 text-terre">
                {t('terms_conditions.sections.contact_info.details.email')}<br />
                {t('terms_conditions.sections.contact_info.details.phone')}
                </p>
                
                
            </section>
          </main>

          <p className="text-terre text-sm">&copy; 2024 Kumba. {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
