"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, FileText, Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Communique {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  pdfUrl: string;
  imageUrl: string;
}

export default function CommuniquesPage() {
  const communiques: Communique[] = [
    {
      id: 1,
      title: "Communiqué sur la réforme fiscale 2025",
      date: "15 mars 2025",
      category: "Fiscalité",
      excerpt:
        "La FEG prend position sur les nouvelles dispositions fiscales et appelle à un dialogue constructif avec les autorités pour l'amélioration du climat des affaires.",
      pdfUrl: "/documents/communique-fiscalite-2025.pdf",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Position de la FEG sur la transition énergétique",
      date: "28 février 2025",
      category: "Environnement",
      excerpt:
        "La Fédération des Entreprises du Gabon s'engage résolument dans la transition énergétique et encourage ses membres à adopter des pratiques durables.",
      pdfUrl: "/documents/communique-energie-2025.pdf",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Déclaration conjointe FEG-Gouvernement sur l'emploi",
      date: "10 février 2025",
      category: "Emploi",
      excerpt:
        "Un partenariat renforcé entre le secteur privé et le gouvernement pour promouvoir l'employabilité des jeunes et la formation professionnelle au Gabon.",
      pdfUrl: "/documents/communique-emploi-2025.pdf",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Communiqué sur la digitalisation des entreprises",
      date: "20 janvier 2025",
      category: "Numérique",
      excerpt:
        "La FEG lance un appel à ses membres pour accélérer leur transformation digitale et présente les initiatives d'accompagnement mises en place.",
      pdfUrl: "/documents/communique-digital-2025.pdf",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Position sur les nouvelles normes d'import-export",
      date: "5 janvier 2025",
      category: "Commerce",
      excerpt:
        "Analyse et recommandations de la FEG concernant les nouvelles réglementations douanières et leur impact sur les entreprises gabonaises.",
      pdfUrl: "/documents/communique-commerce-2025.pdf",
      imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Bilan annuel 2024 et perspectives 2025",
      date: "15 décembre 2024",
      category: "Bilan",
      excerpt:
        "Le Président de la FEG présente le bilan des activités 2024 et trace les grandes orientations stratégiques pour l'année 2025.",
      pdfUrl: "/documents/communique-bilan-2024.pdf",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Communiqués
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Nos Communiqués
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Retrouvez l'ensemble de nos prises de position et déclarations officielles
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Communiques Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communiques.map((communique, index) => (
                <motion.div
                  key={communique.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <Image
                        src={communique.imageUrl}
                        alt={communique.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                          <Calendar size={14} className="text-primary-900" />
                          <span className="text-xs font-semibold text-gray-700">
                            {communique.date}
                          </span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-bronze-base text-primary-900 text-xs font-bold rounded-full">
                          {communique.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-[calc(100%-208px)]">
                      <h3 className="text-lg font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-bronze-dark transition-colors">
                        {communique.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {communique.excerpt}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <a
                          href={communique.pdfUrl}
                          download
                          className="inline-flex items-center gap-2 text-primary-900 hover:text-bronze-base font-semibold text-sm transition-colors"
                        >
                          <Download size={16} />
                          <span>Télécharger</span>
                        </a>
                        <FileText size={20} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
                <FileText size={48} className="mx-auto mb-6 text-bronze-base" />
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Besoin d'Informations Complémentaires ?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos communiqués et prises de position
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-bronze-base to-bronze-dark hover:from-bronze-dark hover:to-bronze-base text-primary-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Contactez-Nous</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
