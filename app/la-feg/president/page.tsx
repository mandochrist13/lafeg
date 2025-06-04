// app/publications/page.tsx
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">ACCUEIL</Link>
            <span className="mx-2">›</span>
            <Link href="/publications" className="hover:text-blue-600">PUBLICATIONS</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">DOCUMENTATION</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Nos publications</h1>
          <p className="text-gray-600 mt-2">
            Découvrez et sélectionnez cet ensemble de nos publications et déclenchez-vous à La FEG met la disposition des cas membres sur les outils qui leur sont nécessaires.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Rechercher un document</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="RECHERCHE"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
              Rechercher
            </button>
          </div>
        </section>

        {/* Publications List */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Publication Item */}
          <PublicationCard
            title="CATALOGUE DES FORMATIONS EXECUTIVE CLUB 2024-2025"
            category="LOCALITÉ"
            action="CONSULTER"
          />

          <PublicationCard
            title="Nice Economique du secteur bols"
            category="Niveau"
            action="CONSULTER"
          />

          <PublicationCard
            title="ENQUÊTE SUR LES MARCHES DE COMMERCE ET DE TRANSPORT (ENFCT)"
            note="NOUS PARTIE AU NOIS DE JUIN 2023"
          />

          <PublicationCard
            title="Enquête sur les marges de commerce et de transport (ENCF) du mois d'avril au mois de juin 2023"
            action="CONSULTER"
          />

          <PublicationCard
            title="Règlement intérieur de la Fédération des Entreprises du Gabon"
            action="CONSULTER"
          />

          <PublicationCard
            title="Les services offerts aux membres de la FEG"
            action="CONSULTER"
          />

          <PublicationCard
            title="Charte d'éthique et déontologie de la FEG"
            action="CONSULTER"
          />

          <PublicationCard
            title="Statuts de la Fédération des Entreprises du Gabon (FEG)"
            action="CONSULTER"
          />

          <PublicationCard
            title="Démonétisation de la gamme de billet de 1992"
            action="CONSULTER"
          />

          <PublicationCard
            title="Note sur le secteur pétrolier septembre 2022"
            action="CONSULTER"
          />

          <PublicationCard
            title="Statuts de la Fédération des Entreprises du Gabon (FEG)"
            action="CONSULTER"
          />
        </div>

        {/* Newsletter Section */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Inscrivez-vous à notre newsletter afin de recevoir nos actualités
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Retour sociale *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Statut *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Final *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="accept-info"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="accept-info" className="ml-2 block text-sm text-gray-700">
                L'Accepte du recevoir les informations de la FEG et ses partenaires
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              DIRECTIBLE À NOTRE NEVELLETTEN
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

interface PublicationCardProps {
  title: string;
  category?: string;
  note?: string;
  action?: string;
}

function PublicationCard({ title, category, note, action }: PublicationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {category && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
          {category}
        </span>
      )}
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      {note && <p className="text-sm text-gray-600 mb-3">{note}</p>}
      {action && (
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          {action} →
        </button>
      )}
    </div>
  );
}