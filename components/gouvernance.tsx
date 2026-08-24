"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gouvernance() {
  // Tableau d'objets pour les membres du Bureau Exécutif
  const bureauExecutif = [
    {
      id: 1,
      name: "Jean-Baptiste BIKALOU",
      role: "Vice-Président en charge de l'Emploi, de la Formation et des Relations Internationales",
      position: "Président Directeur Général de Petro Gabon",
      image: "/images/membres/bikalou.jpg",
      shape: "circle",
    },
    {
      id: 2,
      name: "Dimitri NDJEBI",
      role: "Vice-Président en charge de la Compétitivité, du Développement Economique et de l'Inclusion Financière",
      position: "Directeur Général, BGFIBank Gabon",
      image: "/images/membres/ndjebi.jpg",
      shape: "diamond",
    },
    {
      id: 3,
      name: "Léod Paul BATOLO",
      role: "Vice-Président en charge de l'Industrie Minière",
      position: "Administrateur Directeur Général de COMILOG",
      image: "/images/membres/batolo.png",
      shape: "triangle",
    },
    {
      id: 4,
      name: "Isabelle ESSONGHE",
      role: "Vice-Présidente en charge du Commerce et des Services",
      position: "Administratrice Directrice Générale, Groupe CECA-GADIS",
      image: "/images/membres/essonghe.jpg",
      shape: "square",
    },
    {
      id: 5,
      name: "Erik WATREMEZ",
      role: "Vice-Président en charge du Conseil, du Développement Durable, de la RSE",
      position: "Directeur Général d'ERITEDGE",
      image: "/images/membres/watremez.jpg",
      shape: "circle",
    },
    {
      id: 6,
      name: "Christophe BLANC",
      role: "Vice-Président en charge de l'Industrie Pétrolière et Gazière",
      position: "Directeur Général, PERENCO OIL & GAS GABON",
      image: "/images/membres/blanc.png",
      shape: "diamond",
    },
    {
      id: 7,
      name: "Frédéric OBER",
      role: "Vice-Président en charge de l'Industrie du Bois",
      position: "Directeur Général, Precious Woods – CEB",
      image: "/images/membres/ober.jpg",
      shape: "triangle",
    },
    {
      id: 8,
      name: "Xavier JAFFRET",
      role: "Vice-Président en charge de l'Industrie et de la Transformation",
      position: "Directeur Général, SOBRAGA",
      image: "/images/membres/jaffret.jpg",
      shape: "square",
    },
    {
      id: 9,
      name: "Sandrine ITOU-Y-MAGANGA",
      role: "Vice-Présidente en charge de la Santé et de la Prevoyance Sociale",
      position: "Directrice Générale, Pharmacie du Commissariat Central",
      image: "/images/membres/itou-maganga.jpg",
      shape: "circle",
    },
    {
      id: 10,
      name: "Valérie IGOUMOU",
      role: "Vice-Présidente en charge du Corridor Logistique",
      position: "Directrice Générale, TRANSFORM'",
      image: "/images/membres/igoumou.png",
      shape: "diamond",
    },
    {
      id: 11,
      name: "Hélène ZOUA-ONDO",
      role: "Vice-Présidente en charge de la Fiscalité, de la Protection Judiciaire des Entreprises",
      position: "Présidente THINK TANK FISCAL",
      image: "/images/membres/zoua-ondo.jpg",
      shape: "triangle",
    },
    {
      id: 12,
      name: "Gaston MIDOUNGANI",
      role: "Vice-Président en charge de l'Artisanat et de la Communication",
      position: "Directeur Général, GAMI Service",
      image: "/images/membres/midoungani.png",
      shape: "square",
    },
    {
      id: 13,
      name: "Éric BOUNDONO",
      role: "Vice-Président en charge de l'Entrepreneuriat de l'Innovation",
      position: "Directeur Général, MULTIPRESS",
      image: "/images/membres/boundono.jpg",
      shape: "circle",
    },
    {
      id: 14,
      name: "Seydou KANE",
      role: "Conseiller Stratégique du Président",
      position: "Président Directeur Général, Consortium international des Travaux Publics",
      image: "/images/membres/kane.jpg",
      shape: "diamond",
    },
    {
      id: 15,
      name: "Charles TCHEN",
      role: "Conseiller Stratégique du Président",
      position: "",
      image: "/images/membres/tchen.png",
      shape: "triangle",
    },
    {
      id: 16,
      name: "Gina EYAMA ONDO",
      role: "Secrétaire Général",
      position: "",
      image: "/images/membres/eyama-ondo.png",
      shape: "square",
    },
  ];

  // Tableau d'objets pour les commissions permanentes
  const commissions = [
    {
      id: 1,
      name: "Serge Dimitri MBA BEKALE",
      role: "Juridique et Fiscale",
      image: "/images/membres/mba-bekale.jpg",
    },
    {
      id: 2,
      name: "Benito NDONGO",
      role: "Gouvernance des Entreprises",
      image: "/images/membres/ndongo.png",
    },
    {
      id: 3,
      name: "Jean-Pierre BOZEC",
      role: "Ethique et Déontologie des Affaires",
      image: "/images/membres/ndongo.png",
    },
    {
      id: 4,
      name: "Murielle Natacha M'BOUNA",
      role: "Economie et Compétitivité",
      image: "/images/membres/mbouna.jpg",
    },
    {
      id: 5,
      name: "Jean Marie NTOUTOUME",
      role: "Transition Écologique",
      image: "/images/membres/ntoutoume.png",
    },
    {
      id: 6,
      name: "Claude AKOULOU EYELEKO",
      role: "Education, Formation et Compétence",
      image: "/images/membres/akoulou.jpg",
    },
    {
      id: 7,
      name: "Ismaël NDIAYE",
      role: "Relations Internationales",
      image: "/images/membres/ndiaye.jpg",
    },
    {
      id: 8,
      name: "Stéphane MOUSSIROU",
      role: "Santé et Prévoyance Sociale",
      image: "/images/membres/moussirou.jpg",
    },
    {
      id: 9,
      name: "Yannick EBEBIE",
      role: "Création d'Entreprises",
      image: "/images/membres/ebebie.jpg",
    },
  ];

  // Tableau d'objets pour les comités
  const comites = [
    {
      id: 1,
      name: "Anaclet NGOUA",
      role: "Audit",
      image: "/images/membres/ngoua.png",
    },
    {
      id: 2,
      name: "Pr. Etienne NSIE",
      role: "Arbitrage",
      image: "/images/membres/nsie.png",
    },
    {
      id: 3,
      name: "Bernadette SANGARE OGOMBE",
      role: "Destination Gabon",
      image: "/images/membres/ogombe.jpg",
    },
    {
      id: 4,
      name: "Franck SIMA MBA",
      role: "Conformité des Mandats",
      image: "/images/membres/sima-mba.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Fonction pour rendre la forme géométrique en arrière-plan
  const getBackgroundShape = (shape: string) => {
    const shapeClasses = "absolute -z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12";

    switch (shape) {
      case "circle":
        return (
          <div className={`${shapeClasses} -top-16 -left-16 w-64 h-64`}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#C9A962" opacity="0.15" />
            </svg>
          </div>
        );
      case "diamond":
        return (
          <div className={`${shapeClasses} -top-12 -right-12 w-56 h-56`}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <rect x="60" y="60" width="80" height="80" fill="#063d21" opacity="0.12" transform="rotate(45 100 100)" />
            </svg>
          </div>
        );
      case "triangle":
        return (
          <div className={`${shapeClasses} -top-14 -right-14 w-60 h-60`}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="100,30 170,170 30,170" fill="#C9A962" opacity="0.12" />
            </svg>
          </div>
        );
      case "square":
        return (
          <div className={`${shapeClasses} -bottom-10 -left-10 w-32 h-32`}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="10" y="10" width="80" height="80" fill="#063d21" opacity="0.1" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Logo en filigrane avec animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10"
      >
        <Image
          src="/images/logo.png"
          alt="Logo FEG"
          width={700}
          height={700}
          className="opacity-[0.02] select-none"
        />
      </motion.div>

      {/* En-tête Bold et Impactant */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 pb-12 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Titre principal massif */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-primary-900 mb-8 leading-none tracking-tight"
          >
            GOUVERNANCE
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Une structure moderne et efficace au service de l'économie gabonaise
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Depuis 2017, notre organisation garantit une représentation équilibrée
                des secteurs clés et une gouvernance transparente.
              </p>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-8"
            >
              <div className="text-center">
                <div className="text-5xl font-black text-bronze-base mb-1">16</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Bureau Exécutif</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary-900 mb-1">9</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Commissions</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-gray-700 mb-1">4</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Comités</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bureau Exécutif - Avec couleurs */}
      <section className="mb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-900 mb-4 tracking-tight">
              BUREAU EXÉCUTIF
            </h2>
            <div className="w-24 h-1.5 bg-bronze-base mb-6"></div>
            <div className="text-lg text-gray-700 max-w-4xl space-y-3">
              <p>Depuis 2017, la FEG a entamé un processus de modernisation de son organisation et de sa gouvernance pour s'adapter aux enjeux de l'économie gabonaise. Le Bureau Exécutif est l'organe qui a pour mission de conduire l'action de la FEG pendant un mandat de 4 ans.</p>
              <p>Le nouveau Bureau Exécutif (BUREX) est composé du Président de la FEG, de 11 Vice-Présidents et de 1 conseiller. Il s'agit ici d'un Conseiller Stratégique du Président, représentant 12 fédérations ou secteurs d'activités de l'économie gabonaise.</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {bureauExecutif.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Forme géométrique décorative en arrière-plan */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  {getBackgroundShape(member.shape)}
                </div>

                {/* Bordure dorée corporate */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bronze-base via-bronze-dark to-bronze-base"></div>

                {/* Image du membre avec cadre élégant */}
                <div className="relative w-full aspect-[3/3.2] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Motif corporate coin supérieur droit */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-bronze-base/30"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-bronze-base/20"></div>
                  </div>

                  {/* Dégradé subtil pour transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                </div>

                {/* Zone de texte avec design corporate */}
                <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-white p-6">
                  {/* Motifs décoratifs */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-bronze-base via-bronze-dark to-transparent opacity-30"></div>

                  {/* Motif coin inférieur droit */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="80" cy="80" r="60" fill="currentColor" className="text-bronze-base" />
                    </svg>
                  </div>

                  {/* Contenu textuel */}
                  <div className="relative z-10">
                    {/* Ligne décorative bronze */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-0.5 bg-bronze-base group-hover:w-12 transition-all duration-500"></div>
                      <div className="w-2 h-2 rounded-full bg-bronze-base"></div>
                      <div className="w-2 h-0.5 bg-bronze-base/50"></div>
                    </div>

                    <h3 className="text-lg font-black text-primary-900 mb-2 leading-tight group-hover:text-bronze-dark transition-colors tracking-tight">
                      {member.name}
                    </h3>

                    <div className="mb-3 pb-3 border-b border-gray-200">
                      <p className="text-[10px] font-bold text-bronze-base uppercase tracking-widest leading-snug">
                        {member.role}
                      </p>
                    </div>

                    {member.position && (
                      <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
                        {member.position}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bordure animée au hover */}
                <div className="absolute inset-0 border-2 border-bronze-base/0 group-hover:border-bronze-base/20 rounded-lg transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commissions Permanentes - Avatars avec couleurs */}
      <section className="mb-24 px-4 py-16 bg-gradient-to-br from-primary-900/5 to-bronze-base/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-900 mb-4 tracking-tight">
              COMMISSIONS<br/>PERMANENTES
            </h2>
            <div className="w-24 h-1.5 bg-primary-900 mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl">
              9 commissions permanentes thématiques dirigées par des experts pour accompagner nos membres
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {commissions.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-900/30"
              >
                {/* Avatar circulaire avec ring doré animé */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-28 h-28 mx-auto mb-5"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-bronze-base group-hover:border-bronze-dark transition-all duration-500 shadow-lg"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden ring-2 ring-white shadow-inner">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                    />
                  </div>

                  {/* Point décoratif */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-bronze-base to-bronze-dark rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>

                {/* Informations */}
                <div className="text-center">
                  <h4 className="text-base font-bold text-primary-900 mb-2 leading-tight group-hover:text-bronze-dark transition-colors">
                    {member.name}
                  </h4>
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-bronze-base/10 to-bronze-dark/10 rounded-full border border-bronze-base/20">
                    <p className="text-xs text-bronze-dark font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comités Spécialisés - Layout horizontal avec couleurs */}
      <section className="mb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-900 mb-4 tracking-tight">
              COMITÉS<br/>SPÉCIALISÉS
            </h2>
            <div className="w-24 h-1.5 bg-gray-700 mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl">
              Des expertises pointues au service de la FEG
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {comites.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ x: 12, scale: 1.02 }}
                className="group flex items-center gap-6 bg-white p-6 rounded-2xl border-l-4 border-bronze-base hover:border-primary-900 transition-all duration-500 shadow-md hover:shadow-2xl"
              >
                {/* Photo avec effet */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden shadow-xl ring-4 ring-gray-100 group-hover:ring-bronze-base/40 transition-all duration-500"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                  />
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/0 group-hover:from-primary-900/10 to-transparent transition-all duration-500"></div>
                </motion.div>

                {/* Informations */}
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-primary-900 mb-1 group-hover:text-bronze-dark transition-colors">
                    {member.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-gradient-to-b from-bronze-base to-bronze-dark rounded-full"></div>
                    <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Comité {member.role}
                    </p>
                  </div>
                </div>

                {/* Icône flèche animée */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bronze-base to-bronze-dark flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
