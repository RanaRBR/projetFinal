import { Head } from '@inertiajs/react'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head title="Politique de confidentialité" />
      <div className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-gray-800">
          <h1 className="text-4xl font-bold text-gray-700 mb-6 border-b-2 pb-2 border-cyan-300">
            Politique de confidentialité
          </h1>

          <p className="mb-6 text-lg">
            Cette politique de confidentialité décrit comment <strong className="text-cyan-400">DIGITAL SANS FRONTIERES</strong> collecte, utilise et protège les informations que vous nous fournissez lorsque vous utilisez notre site.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">1. Informations collectées</h2>
            <p>Nous collectons uniquement les données nécessaires à l’amélioration de nos services, à savoir :</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Nom et prénom (si fournis)</li>
              <li>Adresse e-mail</li>
              <li>Adresse IP et données de navigation</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">2. Utilisation des données</h2>
            <p>Vos données peuvent être utilisées pour :</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Répondre à vos messages ou commentaires</li>
              <li>Envoyer une newsletter (si vous y avez consenti)</li>
              <li>Analyser le trafic et les performances du site</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">3. Partage des données</h2>
            <p>Nous ne vendons ni ne louons vos données. Vos informations personnelles peuvent être partagées uniquement avec :</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Des prestataires techniques (hébergement, analytics)</li>
              <li>Les autorités compétentes en cas d’obligation légale</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">4. Durée de conservation</h2>
            <p>Les données sont conservées pendant la durée strictement nécessaire à leur traitement ou jusqu’à votre demande de suppression.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">5. Sécurité</h2>
            <p>Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données contre toute perte, accès non autorisé ou divulgation.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Droit d’accès, de rectification ou de suppression de vos données</li>
              <li>Droit d’opposition ou de limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:contact@blogdescodeurs.com" className="text-cyan-700 underline">
                contact@blogdescodeurs.com
              </a>
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-orange-400 font-semibold mb-3">7. Modifications</h2>
            <p>Cette politique peut être modifiée à tout moment. Toute modification sera signalée sur cette page avec une date de mise à jour.</p>
          </div>

          <p className="mt-10 text-sm text-gray-400 italic">
            Dernière mise à jour : 24 juin 2025
          </p>
        </div>
      </div>
    </>
  )
}
