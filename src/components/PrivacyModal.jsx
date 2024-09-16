import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ closeModalPolicies }) => {
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
      <div className="bg-white h-[90%] overflow-auto p-10 rounded-lg shadow-lg max-w-4xl w-full relative">
        <div>
            <button
            onClick={closeModalPolicies}
            className="fixed top-2 right-2 font-semibold bg-white text-terre border-2 border-terre hover:bg-terre hover:text-white rounded-full px-4 py-2">
            X
            </button>
            
        </div>
        <div className='w-full text-xs'>
    <header class="bg-white shadow-md p-6">
        <h1 class="text-3xl font-bold text-terre mb-2">Politique de Fonctionnalité</h1>
        <p class="text-md text-gray-600">Dernière mise à jour : 16 septembre 2024</p>
    </header>
    

    <main class="container mx-auto px-4 py-8">
        <section id="introduction" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Introduction</h2>
            <p class="mb-4">
                Cette Politique de Fonctionnalité décrit les fonctionnalités de Kumba, offrant des détails sur le fonctionnement de la plateforme, la manière dont les utilisateurs peuvent interagir avec les fonctionnalités, et les mesures de sécurité en place pour garantir une expérience utilisateur sûre et efficace. En utilisant Kumba, vous acceptez de respecter ces politiques et d'utiliser les services de manière responsable.
            </p>
        </section>
        
        <section id="search-functionality" class="mb-8">

            <h2 class="text-2xl text-terre font-semibold mb-4">Fonctionnalité de Recherche</h2>
            <p class="mb-4">
                Kumba propose un système de recherche complet conçu pour faciliter la recherche de logements correspondant aux besoins spécifiques des utilisateurs. La fonctionnalité de recherche comprend plusieurs filtres et outils interactifs permettant aux utilisateurs de préciser leurs options. Voici quelques-unes des fonctionnalités clés de la recherche :
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Recherche par Localisation :</strong> Les utilisateurs peuvent entrer la ville, le quartier ou même une adresse spécifique pour rechercher des propriétés. La recherche basée sur la localisation de Kumba est intégrée à Google Maps, garantissant des résultats géographiques précis. Cette fonctionnalité permet aux utilisateurs d'explorer différents quartiers et de vérifier la proximité des écoles, des transports et d'autres commodités.</li>
                <li><strong>Recherche par Plage de Prix :</strong> Les utilisateurs peuvent filtrer les propriétés en fonction de leur budget. Le curseur de prix permet aux utilisateurs de définir un prix minimum et maximum pour afficher uniquement les propriétés correspondant à leur budget. Les utilisateurs peuvent également activer des options pour des promotions spéciales, des propriétés en réduction ou des offres de location avec option d'achat.</li>
                <li><strong>Filtres par Type de Propriété :</strong> Kumba propose plusieurs types de propriétés tels que des appartements, maisons, villas, studios et propriétés commerciales. Ce filtre aide les utilisateurs à trouver une propriété correspondant à leurs exigences spécifiques.</li>
                <li><strong>Filtres Avancés :</strong> Pour affiner les résultats de recherche, les utilisateurs peuvent appliquer des filtres supplémentaires incluant :
                    <ul class="list-disc list-inside ml-6">
                        <li>Nombre de chambres</li>
                        <li>Superficie totale</li>
                        <li>Équipements tels que parking, balcon ou piscine</li>
                        <li>Meublé ou non meublé</li>
                        <li>Propriétés acceptant les animaux de compagnie</li>
                    </ul>
                </li>
                <li><strong>Recherche sur Carte :</strong> La carte interactive de Kumba fournit une vue visuelle des propriétés disponibles. Les utilisateurs peuvent cliquer sur les épingles des propriétés pour obtenir des détails sans quitter la vue de la carte, offrant une expérience de navigation fluide.</li>
                <li><strong>Recherches Enregistrées :</strong> Les utilisateurs peuvent enregistrer leurs critères de recherche pour une utilisation future. Kumba notifiera les utilisateurs des nouvelles annonces correspondant à leurs critères enregistrés par e-mail ou notifications push.</li>
            </ul>
            
        </section>

        <section id="account-management" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Gestion des Comptes</h2>
            <p class="mb-4">
                La création d'un compte sur Kumba améliore l'expérience globale en offrant un accès à des fonctionnalités supplémentaires. La gestion des comptes sur Kumba est conçue pour être conviviale et sécurisée, garantissant que les utilisateurs peuvent gérer leurs activités et informations personnelles de manière efficace.
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Création de Compte :</strong> Les utilisateurs peuvent créer un compte en utilisant leur adresse e-mail ou choisir de s'inscrire via des services tiers tels que Google ou Facebook pour un accès plus rapide. Toutes les données personnelles fournies sont stockées de manière sécurisée et protégées par cryptage.</li>
                <li><strong>Personnalisation du Profil :</strong> Les utilisateurs peuvent créer un profil reflétant leurs préférences, y compris les types de logement, les lieux d'intérêt et les plages de prix. Cela permet à Kumba de personnaliser ses recommandations, rendant le processus de recherche plus efficace.</li>
                <li><strong>Favoris et Listes de Souhaits :</strong> Les utilisateurs peuvent enregistrer des propriétés dans leur liste de favoris pour les revoir ou les comparer plus tard. Cette fonctionnalité est utile pour suivre les propriétés à travers différentes recherches et faciliter la prise de décision finale.</li>
                <li><strong>Notifications et Alertes :</strong> Les utilisateurs peuvent configurer des notifications personnalisées lorsque de nouvelles propriétés correspondant à leurs critères deviennent disponibles. Ces notifications peuvent être envoyées par e-mail, SMS ou notifications push. Les utilisateurs peuvent également configurer des alertes pour les changements de prix des propriétés ou les nouvelles offres spéciales.</li>
                <li><strong>Sécurité du Compte :</strong> Kumba utilise des mesures de sécurité de niveau industriel, y compris l'authentification à deux facteurs (2FA) et le cryptage des identifiants de connexion. Les utilisateurs peuvent mettre à jour leur mot de passe à tout moment ou récupérer leur compte en cas de perte de mot de passe via un processus de vérification par e-mail sécurisé.</li>
                <li><strong>Suppression des Comptes :</strong> Les utilisateurs peuvent supprimer leur compte à tout moment depuis la page des paramètres. Une fois le compte supprimé, toutes les données personnelles, propriétés sauvegardées et historiques de recherche sont définitivement supprimés des bases de données de Kumba.</li>
            </ul>
        </section>

        <section id="listing-management" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Gestion des Annonces</h2>
            <p class="mb-4">
                Kumba propose une plateforme robuste pour les propriétaires et agences immobilières pour publier leurs propriétés. Cette section décrit le processus de création et de gestion des annonces de propriétés :
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Création d'Annonce :</strong> Les propriétaires peuvent créer des annonces en fournissant des informations détaillées sur leur propriété. Cela inclut la description de la propriété, l'emplacement, le prix, la disponibilité, les photos et les équipements. Le processus de création d'annonce est intuitif et comprend des instructions étape par étape pour garantir que toutes les informations essentielles sont fournies.</li>
                <li><strong>Upload de Photos et Vidéos :</strong> Les annonces peuvent inclure des photos et vidéos haute résolution de la propriété, offrant aux locataires ou acheteurs potentiels une visite visuelle avant de planifier une visite. Kumba prend en charge les visites virtuelles et les vues à 360 degrés pour une expérience immersive.</li>
                <li><strong>Promotion des Annonces :</strong> Les propriétaires peuvent choisir de promouvoir leurs annonces pour une visibilité accrue. Les annonces promues apparaissent en haut des résultats de recherche et sur la page d'accueil, attirant davantage de vues.</li>
                <li><strong>Gestion des Annonces :</strong> Les propriétaires et les agences peuvent modifier ou supprimer leurs annonces à tout moment. Cela inclut la mise à jour des prix, de la disponibilité et de tout autre détail lié à la propriété.</li>
                <li><strong>Conformité aux Normes Légales :</strong> Toutes les annonces doivent être conformes aux lois et règlements locaux, y compris les lois sur l'équité en matière de logement. Les annonces qui violent ces normes seront supprimées, et les violations répétées peuvent entraîner la suspension du compte.</li>
            </ul>
        </section>

        <section id="communication-tools" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Outils de Communication</h2>
            <p class="mb-4">
                Kumba propose des outils de communication intégrés pour faciliter l'interaction entre les propriétaires et les locataires ou acheteurs potentiels. Ces outils incluent :
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Messagerie Directe :</strong> Les utilisateurs peuvent envoyer des messages directement aux propriétaires via la plateforme pour demander des informations sur les propriétés, planifier des visites ou négocier les prix.</li>
                <li><strong>Planification des Rendez-vous :</strong> Kumba intègre un système de calendrier qui permet aux utilisateurs de planifier des visites de propriétés. Les propriétaires et les agents peuvent définir leur disponibilité, et les utilisateurs peuvent choisir un moment qui leur convient.</li>
                <li><strong>Options d'Appel et d'E-mail :</strong> En plus de la messagerie, les utilisateurs peuvent choisir de contacter les propriétaires par téléphone ou par e-mail via les options de communication sécurisées de la plateforme.</li>
            </ul>
        </section>

        <section id="data-security" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Sécurité des Données</h2>
            <p class="mb-4">
                Chez Kumba, la sécurité des données des utilisateurs est une priorité absolue. Nous prenons des mesures étendues pour protéger les informations personnelles et garantir que toutes les pratiques de gestion des données respectent les normes industrielles les plus récentes et les règlements légaux.
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Cryptage des Données :</strong> Toutes les données sensibles des utilisateurs, telles que les mots de passe et les détails de paiement, sont cryptées en transit et au repos. Cela garantit que même dans le cas improbable d'une violation de données, les informations des utilisateurs restent protégées.</li>
                <li><strong>Conformité au RGPD :</strong> Kumba respecte les normes du Règlement Général sur la Protection des Données (RGPD), garantissant que les utilisateurs ont un contrôle total sur leurs données personnelles. Les utilisateurs peuvent demander l'accès à leurs données ou les supprimer complètement de nos systèmes à tout moment.</li>
                <li><strong>Traitement Sécurisé des Paiements :</strong> Pour les utilisateurs effectuant des paiements via Kumba, nous collaborons avec des processeurs de paiement de confiance qui suivent les normes PCI-DSS pour protéger les transactions financières.</li>
                <li><strong>Minimisation des Données :</strong> Kumba collecte uniquement les données nécessaires à la fourniture de ses services. Nous ne vendons pas les données des utilisateurs à des tiers ni ne les utilisons à des fins autres que celles spécifiées dans notre politique de confidentialité.</li>
            </ul>
        </section>

        <section id="support" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Support et Assistance</h2>
            <p class="mb-4">
                Kumba propose des services de support complets pour aider les utilisateurs avec toutes les questions ou problèmes qu'ils pourraient rencontrer. Notre équipe de support est disponible par plusieurs canaux :
            </p>
            <ul class="marker:text-terre3 list-disc list-inside ml-6 space-y-2">
                <li><strong>Centre d'Aide en Ligne :</strong> Le Centre d'Aide de Kumba comprend une section FAQ détaillée, des guides utilisateur et des conseils de dépannage. Les utilisateurs peuvent trouver des réponses aux questions courantes et résoudre les problèmes de manière autonome.</li>
                <li><strong>Support par Chat en Direct :</strong> Les utilisateurs peuvent accéder au support par chat en direct pour une assistance en temps réel avec tout problème ou question. Nos agents de support sont disponibles 24h/24 et 7j/7 pour fournir de l'aide et résoudre les préoccupations.</li>
                <li><strong>Support par E-mail :</strong> Pour les demandes moins urgentes, les utilisateurs peuvent contacter notre équipe de support par e-mail. Nous nous efforçons de répondre aux demandes par e-mail dans les 24 heures.</li>
            </ul>
        </section>

        <section id="conclusion" class="mb-8">
            <h2 class="text-2xl text-terre font-semibold mb-4">Conclusion</h2>
            <p class="mb-4">
                En utilisant Kumba, les utilisateurs acceptent ces politiques de fonctionnalités et comprennent qu'elles sont en place pour garantir une expérience sûre et conviviale. Si vous avez des questions ou avez besoin de plus de précisions, veuillez contacter notre équipe de support.
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
