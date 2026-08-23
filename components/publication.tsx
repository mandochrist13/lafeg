"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, Download, ExternalLink, ArrowRight, FileCheck } from "lucide-react";
import PublicationCover3D from "./publication-cover-3d";
import { motion } from "framer-motion";

const publications = [
  {
    id: 1,
    title: "Lettre Circulaire Dette intérieure (BIS)",
    date: "15 mars 2025",
    category: "Circulaires",
    categoryIcon: FileCheck,
    excerpt: "Information importante concernant la dette intérieure et les bons d'investissement",
    image: "/images/image gef_page-0001.jpg",
    pdfLink: "/documents/dette-interieure-bis.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "Charte des valeurs et code éthique de la FEG",
    date: "2023",
    category: "Charte",
    categoryIcon: FileText,
    excerpt: "Les valeurs fondamentales de la FEG et notre code de conduite",
    image: "/images/logo.png",
    pdfLink: "/CHARTE_FEG.pdf",
  },
  {
    id: 3,
    title: "Rapport annuel d'activités 2024",
    date: "Janvier 2025",
    category: "Rapports",
    categoryIcon: FileText,
    excerpt: "Bilan des activités et réalisations de l'année 2024",
    image: "/images/logo.png",
    pdfLink: "/documents/rapport-annuel-2024.pdf",
  },
];

export default function PublicationsSection() {
  const featuredPub = publications.find(p => p.featured);
  const regularPubs = publications.filter(p => !p.featured);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Motif de fond décoratif */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-40 right-40 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-[400px] h-[400px] bg-bronze-base rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête moderne */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <span className="text-primary-900 font-bold text-sm uppercase tracking-wider bg-bronze-base/10 px-4 py-2 rounded-full">
                  📚 Ressources documentaires
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4 leading-tight">
                Nos <span className="text-primary-600">publications</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Découvrez et téléchargez nos documents, guides pratiques et rapports d'activités
              </p>
            </div>
            <Link
              href="/publications"
              className="hidden lg:inline-flex items-center gap-3 bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Toutes les publications
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Publication à la une + grille */}
        {featuredPub && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-[500px] overflow-hidden group">
                  <Image
                    src={featuredPub.image}
                    alt={featuredPub.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-wide flex items-center gap-2 rounded-full shadow-lg">
                      <FileText size={14} />
                      Nouveau
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-bronze-base text-primary-900 px-4 py-2 text-xs font-bold uppercase rounded-full">
                      {featuredPub.category}
                    </span>
                    <span className="text-sm text-gray-500 font-semibold">{featuredPub.date}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                    {featuredPub.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {featuredPub.excerpt}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featuredPub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-primary-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl group"
                    >
                      <Download size={20} />
                      Télécharger
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={featuredPub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white border-2 border-primary-900 text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={20} />
                      Consulter en ligne
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grille de publications avec couvertures 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPubs.map((pub, index) => {
            const CategoryIcon = pub.categoryIcon;
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                {/* Couverture 3D */}
                <div className="mb-4">
                  <a
                    href={pub.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <PublicationCover3D
                      title={pub.title}
                      category={pub.category}
                      date={pub.date}
                    />
                  </a>
                </div>

                {/* Métadonnées sous la couverture */}
                <div className="space-y-2">
                  {/* Badge catégorie */}
                  <div className="flex items-center gap-2">
                    <span className="bg-bronze-base/20 text-primary px-2 py-1 text-xs font-bold uppercase flex items-center gap-1.5">
                      <CategoryIcon size={12} />
                      {pub.category}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>

                  {/* Date */}
                  <p className="text-xs text-gray-500 font-semibold">{pub.date}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={pub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 group/btn"
                    >
                      <Download size={16} />
                      <span>Télécharger</span>
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href={pub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary group/btn"
                    >
                      <ExternalLink size={16} />
                      <span>Consulter</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Toutes les publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/publications"
            className="inline-flex items-center gap-3 bg-white border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Voir toutes nos publications
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
