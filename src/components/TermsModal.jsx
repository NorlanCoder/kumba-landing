import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ closeModalTerms }) => {
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
            className="fixed top-2 right-2 font-semibold bg-white text-terre border-2 border-terre hover:bg-terre hover:text-white rounded-full px-4 py-2">
            X
            </button>
            
        </div>
        <div className='w-full text-xs'>
            <header class="bg-white shadow-md p-6">
                <h1 class="text-3xl text-terre font-bold mb-2">Termes et Conditions</h1>
                <p class="text-sm text-gray-600">Dernière mise à jour : 16 septembre 2024</p>
            </header>

            <main class="container mx-auto px-4 py-8">

                <section id="introduction" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Introduction</h2>
            <p class="mb-4">
                Les présents termes et conditions (ci-après "les Conditions") régissent l'utilisation de la plateforme Kumba. En accédant ou en utilisant les services de Kumba, vous acceptez d'être lié par ces Conditions. Si vous n'êtes pas d'accord avec l'une des dispositions de ces Conditions, veuillez ne pas utiliser Kumba.
            </p>
        </section>

        <section id="account-usage" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Utilisation du Compte</h2>
            <p class="mb-4">
                Pour accéder à certaines fonctionnalités de Kumba, vous devez créer un compte. En créant un compte, vous acceptez de fournir des informations exactes, à jour et complètes. Vous êtes responsable de la sécurité de votre mot de passe et de toutes les activités effectuées sous votre compte.
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Âge Minimum :</strong> Vous devez être âgé d'au moins 18 ans pour utiliser Kumba ou obtenir le consentement de vos parents ou tuteurs légaux.</li>
                <li><strong>Suppression de Compte :</strong> Vous pouvez supprimer votre compte à tout moment via les paramètres. Une fois supprimé, toutes vos données seront définitivement effacées.</li>
                <li><strong>Propriétaire du Compte :</strong> L'utilisateur est entièrement responsable de l'utilisation de son compte. Kumba ne peut être tenu responsable des actions ou omissions résultant d'une mauvaise gestion des identifiants de connexion par l'utilisateur.</li>
            </ul>
        </section>

        <section id="services-usage" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Utilisation des Services</h2>
            <p class="mb-4">
                Kumba fournit des services visant à faciliter la recherche de logements. En utilisant nos services, vous acceptez de ne pas les détourner de leur objectif initial ni de les utiliser à des fins illégales ou non autorisées.
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Interdiction d'Utilisation Abusive :</strong> Vous ne devez pas utiliser Kumba pour publier des annonces mensongères, frauduleuses ou diffamatoires.</li>
                <li><strong>Propriété Intellectuelle :</strong> Tous les contenus et éléments sur la plateforme, y compris les textes, graphiques, logos et logiciels, sont la propriété de Kumba ou de ses partenaires et protégés par les lois relatives à la propriété intellectuelle.</li>
                <li><strong>Suspension de Compte :</strong> En cas de violation des présentes Conditions, nous nous réservons le droit de suspendre ou de supprimer votre compte sans préavis.</li>
            </ul>
        </section>

        <section id="listing-creation" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Création et Gestion d'Annonces</h2>
            <p class="mb-4">
                En tant que propriétaire ou agence, vous pouvez publier des annonces de propriétés sur Kumba. Vous acceptez de respecter les lignes directrices suivantes :
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Exactitude des Informations :</strong> Les informations fournies dans vos annonces doivent être exactes et à jour.</li>
                <li><strong>Respect des Lois Locales :</strong> Toutes les annonces doivent être conformes aux lois et réglementations locales en vigueur concernant l'immobilier.</li>
                <li><strong>Suppression ou Modification d'Annonce :</strong> Nous nous réservons le droit de modifier ou de supprimer toute annonce qui ne respecte pas ces Conditions.</li>
            </ul>
        </section>

        <section id="payment-terms" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Conditions de Paiement</h2>
            <p class="mb-4">
                Kumba peut offrir des services payants, tels que la promotion des annonces. Les paiements effectués via la plateforme sont sécurisés et soumis aux conditions suivantes :
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Frais :</strong> Les frais pour les services payants seront clairement indiqués avant l'achat. Vous acceptez de payer tous les frais applicables.</li>
                <li><strong>Politique de Remboursement :</strong> Sauf indication contraire, tous les paiements sont non remboursables. En cas de problème avec un service payé, veuillez contacter le support pour une assistance.</li>
                <li><strong>Sécurité des Paiements :</strong> Nous utilisons des processeurs de paiement sécurisés pour traiter vos paiements. Vos informations de carte de crédit ne sont ni stockées ni traitées directement par Kumba.</li>
            </ul>
        </section>

        <section id="liability" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Limitation de Responsabilité</h2>
            <p class="mb-4">
                Dans les limites de la loi applicable, Kumba ne sera pas responsable des dommages indirects, accidentels, ou consécutifs résultant de l'utilisation de la plateforme. Cela inclut, sans s'y limiter, les pertes de données, les pertes financières ou les atteintes à la réputation.
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Force Majeure :</strong> Kumba ne peut être tenu responsable des retards ou de l'inexécution de ses obligations en raison d'événements indépendants de sa volonté (force majeure).</li>
                <li><strong>Exactitude des Annonces :</strong> Kumba ne garantit pas l'exactitude des informations fournies dans les annonces et ne peut être tenu responsable des litiges entre les utilisateurs et les propriétaires.</li>
            </ul>
        </section>

        <section id="termination" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Résiliation</h2>
            <p class="mb-4">
                Nous nous réservons le droit de résilier ou de suspendre votre accès à Kumba à tout moment, sans préavis, en cas de violation des présentes Conditions.
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Résiliation par l'Utilisateur :</strong> Vous pouvez fermer votre compte à tout moment via vos paramètres de compte.</li>
                <li><strong>Effet de la Résiliation :</strong> Une fois le compte supprimé ou résilié, vous perdrez l'accès à toutes les fonctionnalités liées à votre compte. Kumba n'a aucune obligation de conserver vos données après la résiliation.</li>
            </ul>
        </section>

        <section id="changes-to-terms" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Modifications des Termes et Conditions</h2>
            <p class="mb-4">
                Nous nous réservons le droit de modifier ces Termes et Conditions à tout moment. En cas de modification, nous vous informerons via la plateforme ou par e-mail. Votre utilisation continue de Kumba après les modifications vaut acceptation des nouvelles conditions.
            </p>
        </section>

        <section id="contact-info" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Contact</h2>
            <p class="mb-4">
                Pour toute question concernant ces Termes et Conditions, vous pouvez nous contacter à l'adresse suivante :
            </p>
            <p class="mb-4">
                <strong className='text-terre'>Kumba Support</strong><br />
                Email : support@kumba.com<br />
                Téléphone : +33 1 23 45 67 89
            </p>
        </section>

        </main>
            <p class="text-terre text-sm">&copy; 2024 Kumba. Tous droits réservés.</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
