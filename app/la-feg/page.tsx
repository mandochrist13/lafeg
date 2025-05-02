import Image from "next/image"

export default function LaFeg() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#006633] mb-8">À propos de la FEG</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#f39c12] mb-4">Notre histoire</h2>
            <p className="text-gray-700 mb-4">
              La Fédération des Entreprises du Gabon (FEG) est l'organisation patronale représentative des entreprises
              gabonaises. Créée en 1983, elle regroupe aujourd'hui plus de 300 entreprises de toutes tailles et de tous
              secteurs d'activité.
            </p>
            <p className="text-gray-700 mb-4">
              Depuis sa création, la FEG œuvre pour la défense des intérêts des entreprises et pour le développement
              économique du Gabon. Elle est un interlocuteur privilégié des pouvoirs publics et des partenaires sociaux.
            </p>
            <p className="text-gray-700">
              La FEG est membre de plusieurs organisations internationales, notamment l'Organisation Internationale des
              Employeurs (OIE) et la Confédération Panafricaine des Employeurs (CPE).
            </p>
          </div>
          <div>
            <div className="relative h-64 w-full mb-4">
              <Image src="/images/feg-building.jpg" alt="Siège de la FEG" fill className="object-cover rounded-lg" />
            </div>
            <div className="bg-[#006633] text-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Notre vision</h3>
              <p>" Bâtir ensemble une économie forte pour garantir la souveraineté nationale "</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#f39c12] mb-4">Nos missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#006633] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Représentation</h3>
              <p className="text-gray-700">
                Représenter et défendre les intérêts des entreprises auprès des pouvoirs publics et des partenaires
                sociaux.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#006633] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Promotion</h3>
              <p className="text-gray-700">
                Promouvoir le développement économique du Gabon et l'amélioration de l'environnement des affaires.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#006633] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Accompagnement</h3>
              <p className="text-gray-700">
                Accompagner les entreprises dans leur développement et leur fournir des services adaptés à leurs
                besoins.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#f39c12] mb-4">Notre organisation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Conseil d'administration</h3>
              <p className="text-gray-700 mb-4">
                Le Conseil d'administration est l'organe de décision de la FEG. Il est composé de 15 membres élus par
                l'Assemblée générale pour un mandat de 3 ans renouvelable.
              </p>
              <h3 className="text-xl font-bold mb-2">Bureau exécutif</h3>
              <p className="text-gray-700">
                Le Bureau exécutif est chargé de la mise en œuvre des décisions du Conseil d'administration. Il est
                composé du Président, des Vice-présidents, du Secrétaire général et du Trésorier.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Commissions sectorielles</h3>
              <p className="text-gray-700 mb-4">
                Les Commissions sectorielles sont des groupes de travail thématiques qui réunissent les entreprises
                membres de la FEG autour de problématiques communes.
              </p>
              <h3 className="text-xl font-bold mb-2">Secrétariat permanent</h3>
              <p className="text-gray-700">
                Le Secrétariat permanent est l'organe d'exécution de la FEG. Il est dirigé par le Secrétaire général et
                comprend une équipe de professionnels chargés de la mise en œuvre des activités de la FEG.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#f39c12] mb-4">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#006633] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Intégrité</h3>
              <p className="text-gray-700">
                Nous agissons avec honnêteté, transparence et éthique dans toutes nos activités et relations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#006633] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-700">
                Nous visons l'excellence dans tous nos services et actions pour le bénéfice de nos membres.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#006633] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Solidarité</h3>
              <p className="text-gray-700">
                Nous promouvons la solidarité entre les entreprises et contribuons au développement économique du Gabon.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#006633] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Responsabilité</h3>
              <p className="text-gray-700">
                Nous assumons nos responsabilités envers nos membres, la société et l'environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
