import React from 'react';

interface ExecutiveMember {
  id: number;
  name: string;
  position: string;
  representation: string;
  company: string;
}

interface CommissionMember {
  id: number;
  name: string;
  role: string;
}

interface CommitteeMember {
  id: number;
  name: string;
  role: string;
}

const FEGGovernancePage: React.FC = () => {
  // Données des membres du bureau exécutif
  const executiveMembers: ExecutiveMember[] = [
    {
      id: 1,
      name: "Léod Paul BATOLO",
      position: "Vice-Président en charge de l'Industrie Minière",
      representation: "Représentant de la fédération métier Industrie Extractive (mines)",
      company: "Administrateur Directeur Général de COMILOG"
    },
    {
      id: 2,
      name: "Isabelle ESSONGHE",
      position: "Vice-Présidente en charge du Commerce, des Services et de l'Artisanat",
      representation: "Représentant des fédérations métiers Commerce et Artisanat",
      company: "Administratrice Directrice Générale, Groupe CECA-GADIS"
    },
    {
      id: 3,
      name: "Frédéric OBER",
      position: "Vice-Président en charge de l'industrie du Bois",
      representation: "Représentant de la fédération métier Bois",
      company: "Directeur Général, Precious Woods - CEB"
    },
    {
      id: 4,
      name: "Sandrine ITOU-Y-MAGANGA",
      position: "Vice-Présidente en charge de la Santé et de la Protection Sociale",
      representation: "Représentant de la fédération métier Santé",
      company: "Directrice Générale, Pharmacie du Commissariat Central"
    },
    {
      id: 5,
      name: "Dimitri NDJEBI",
      position: "Vice-Président en charge de la Compétitivité, du Développement Economique et de l'Inclusion Financière",
      representation: "Représentant de la fédération métier Finance",
      company: "Directeur Général, BGFIBank Gabon"
    },
    {
      id: 6,
      name: "Romain BOUTONNET",
      position: "Vice-Président en charge de l'Industrie et de la Transformation",
      representation: "Représentant de la Fédération Métier Industrie",
      company: "Président Directeur Général Compagnie du Komo / Administrateur Directeur Général, Groupe SOGAFRIC"
    }
  ];

  // Données des commissions permanentes
  const commissionMembers: CommissionMember[] = [
    { id: 1, name: "Nicolas CHEVRINAIS", role: "Juridique et Fiscale" },
    { id: 2, name: "Murielle Natacha M'BOUNA", role: "Economie et Compétitivité" },
    { id: 3, name: "Ismaël NDIAYE", role: "Relations Internationales" },
    { id: 4, name: "Yannick EBEBIE", role: "Création d'Entreprises" },
    { id: 5, name: "Benito NDONGO", role: "Gouvernance des Entreprises" },
    { id: 6, name: "Jean Marie NTOUTOUME", role: "Transition Ecologique" },
    { id: 7, name: "Eric BOUNDONO", role: "Développement des PME-PMI et Sous-traitance" }
  ];

  // Données des comités
  const committeeMembers: CommitteeMember[] = [
    { id: 1, name: "Anaclet NGOUA", role: "Audit" },
    { id: 2, name: "Pr. Etienne NSIE", role: "Arbitrage" },
    { id: 3, name: "Bernadette SANGARE OGOBE", role: "Destination Gabon" },
    { id: 4, name: "Jean-Pierre BOZEC", role: "Ethique et Déontologie des Affaires" },
    { id: 5, name: "Claude AKOULOU EYELEKO", role: "Education, Formation et Compétence" },
    { id: 6, name: "Stéphane MOUSSIROU", role: "Santé et Prévoyance Sociale" },
    { id: 7, name: "Franck SIMA MBA", role: "Conformité des Mandats" }
  ];

  // Liens rapides
  const quickLinks = [
    { id: 1, text: "Notre histoire", url: "#" },
    { id: 2, text: "Nos valeurs", url: "#" },
    { id: 3, text: "Nos missions", url: "#" },
    { id: 4, text: "Nos services", url: "#" }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-white py-4 px-6 border-b">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-blue-800">FEG</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-blue-800 hover:underline">Accueil</a>
            <a href="#" className="text-blue-800 hover:underline">Devenir membre</a>
            <a href="#" className="text-blue-800 hover:underline">Gouvernance</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-blue-600 mb-4">
            <span>Accueil</span>
            <span className="mx-2">{'>'}</span>
            <span>La gouvernance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Mieux connaître la FEG
          </h1>
          <p className="text-lg max-w-3xl mb-8">
            Bâtir ensemble une économie forte pour garantir la souveraineté nationale. Notre institution
            contribue à un idéal commun : la performance des entreprises gabonaises.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* About Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <article className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">A propos</h2>
            <div className="space-y-4">
              <p>
                Depuis 2017, la FEG a entamé un processus de modernisation de son organisation et de
                sa gouvernance pour s'adapter aux enjeux de l'économie gabonaise. Le Bureau Exécutif
                est l'organe qui a pour mission de conduire l'action de la FEG pendant un mandat de 4 ans.
              </p>
              <p>
                Le nouveau Bureau Exécutif (BUREX) est composé du Président de la FEG, de 11 Vice-
                Présidents et de 1 conseiller. Il s'agit ici d'un Conseiller Stratégique du Président,
                représentant 12 fédérations ou secteurs d'activités de l'économie gabonaise.
              </p>
            </div>
          </article>
          
          {/* Quick Links */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">En savoir plus</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <a href={link.url} className="text-blue-600 hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Executive Board */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-2">Le Bureau Exécutif</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveMembers.map(member => (
              <div key={member.id} className="bg-white border border-gray-200 rounded p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                <p className="text-sm text-gray-600 mb-2">{member.representation}</p>
                <p className="text-xs italic text-gray-500">{member.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commissions Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-2">Les commissions permanentes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {commissionMembers.map(member => (
              <div key={member.id} className="bg-white border border-gray-200 rounded p-3">
                <h4 className="font-semibold text-blue-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* President Section */}
        <section className="bg-blue-900 text-white p-8 rounded mb-16">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Alain-Claude KOUAKOUA</h3>
            <blockquote className="text-xl italic mb-6">
              "Bâtissons ensemble une économie forte pour garantir la souveraineté nationale"
            </blockquote>
            <button className="bg-white text-blue-900 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
              Lire la biographie
            </button>
          </div>
        </section>

        {/* Comités Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-2">Les comités</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {committeeMembers.map(member => (
              <div key={member.id} className="bg-white border border-gray-200 rounded p-3">
                <h4 className="font-semibold text-blue-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <p>info@lafeg.ga</p>
            <p>support@lafeg.ga</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Adresse</h4>
            <p>Immeuble ODYSSEE</p>
            <p>Boulevard de l'Indépendance, BP: 410</p>
            <p>Libreville GABON</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Documentation</h4>
            <p>Presse & Média</p>
            <p>Entreprises membres</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Adhérer à la FEG</h4>
            <p>Nos partenaires</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FEGGovernancePage;