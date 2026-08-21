"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, Download, ExternalLink, ArrowRight, BookOpen, FileCheck, Scale } from "lucide-react";
import PublicationCover3D from "./publication-cover-3d";

const publications = [
  {
    id: 1,
    title: "Lettre Circulaire Dette intérieure (BIS)",
    date: "15 mars 2025",
    category: "Circulaires",
    categoryIcon: FileCheck,
    excerpt: "Information importante concernant la dette intérieure et les bons d'investissement",
    image: "/images/publication1.jpg",
    pdfLink: "/documents/dette-interieure-bis.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "Lettre Circulaire Enquête RSE",
    date: "8 mars 2025",
    category: "Circulaires",
    categoryIcon: FileCheck,
    excerpt: "Enquête sur la Responsabilité Sociétale des Entreprises au Gabon",
    image: "/images/publication2.jpg",
    pdfLink: "/documents/enquete-rse.pdf",
  },
  {
    id: 3,
    title: "Décret n°00027/PR/MEPPDD portant Code des Marchés Publics",
    date: "17 janvier 2018",
    category: "Réglementation",
    categoryIcon: Scale,
    excerpt: "Texte réglementaire sur les marchés publics",
    image: "/images/publication3.jpg",
    pdfLink: "/documents/code-marches-publics.pdf",
  },
  {
    id: 4,
    title: "Guide pratique du Code du Travail gabonais",
    date: "2024",
    category: "Guides",
    categoryIcon: BookOpen,
    excerpt: "Guide complet pour comprendre le droit du travail au Gabon",
    image: "/images/publication1.jpg",
    pdfLink: "/documents/guide-code-travail.pdf",
  },
  {
    id: 5,
    title: "Charte des valeurs et code éthique de la FEG",
    date: "2023",
    category: "Charte",
    categoryIcon: FileText,
    excerpt: "Les valeurs fondamentales de la FEG et notre code de conduite",
    image: "/images/publication2.jpg",
    pdfLink: "/CHARTE_FEG.pdf",
  },
  {
    id: 6,
    title: "Rapport annuel d'activités 2024",
    date: "Janvier 2025",
    category: "Rapports",
    categoryIcon: FileText,
    excerpt: "Bilan des activités et réalisations de l'année 2024",
    image: "/images/publication3.jpg",
    pdfLink: "/documents/rapport-annuel-2024.pdf",
  },
];

export default function PublicationsSection() {
  const featuredPub = publications.find(p => p.featured);
  const regularPubs = publications.filter(p => !p.featured);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête avec ligne décorative */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block mb-3">
                <span className="text-bronze-base font-bold text-sm uppercase tracking-wider">
                  Ressources documentaires
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Nos publications
              </h2>
              <p className="text-gray-600 max-w-2xl text-lg">
                Découvrez et téléchargez nos documents, guides et rapports
              </p>
            </div>
            <Link
              href="/publications"
              className="hidden lg:flex items-center gap-2 text-primary font-semibold hover:text-primary/80 group"
            >
              Toutes les publications
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-px bg-gradient-to-r from-primary via-bronze-base to-transparent"></div>
        </div>

        {/* Publication à la une + grille */}
        {featuredPub && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary/5 to-bronze-base/5 border-2 border-primary/20 p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative h-72 lg:h-80 overflow-hidden group">
                  <Image
                    src={featuredPub.image}
                    alt={featuredPub.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                      <FileText size={14} />
                      Nouveau
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-bronze-base text-primary-900 px-3 py-1 text-xs font-bold uppercase">
                      {featuredPub.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredPub.date}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPub.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPub.excerpt}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={featuredPub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group"
                    >
                      <Download size={18} />
                      Télécharger
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={featuredPub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-6 py-3 font-bold hover:bg-primary/5 transition-all"
                    >
                      <ExternalLink size={18} />
                      Consulter en ligne
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grille de publications avec couvertures 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPubs.map((pub) => {
            const CategoryIcon = pub.categoryIcon;
            return (
              <div
                key={pub.id}
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
              </div>
            );
          })}
        </div>

        {/* CTA Toutes les publications */}
        <div className="mt-12 text-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 bg-gray-100 border-2 border-gray-200 hover:border-primary hover:bg-primary/5 px-8 py-4 font-bold text-primary transition-all duration-300 group"
          >
            Voir toutes nos publications
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
