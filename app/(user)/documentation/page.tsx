"use client";

import Image from "next/image";
import { FileText, Download, Calendar, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Document {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  size: string;
  pdfUrl: string;
  imageUrl: string;
}

export default function DocumentationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const documents: Document[] = [
    {
      id: 1,
      title: "Rapport annuel d'activités 2024",
      description: "Bilan complet des activités de la FEG pour l'année 2024",
      category: "Rapports",
      date: "Janvier 2025",
      size: "2.5 MB",
      pdfUrl: "/documents/rapport-2024.pdf",
      imageUrl: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Guide des procédures administratives",
      description: "Manuel pratique pour les démarches administratives des entreprises",
      category: "Guides",
      date: "Décembre 2024",
      size: "1.8 MB",
      pdfUrl: "/documents/guide-procedures.pdf",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Statuts de la FEG",
      description: "Statuts officiels de la Fédération des Entreprises du Gabon",
      category: "Statuts",
      date: "Novembre 2024",
      size: "850 KB",
      pdfUrl: "/documents/statuts-feg.pdf",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Règlement intérieur",
      description: "Règlement intérieur régissant le fonctionnement de la FEG",
      category: "Statuts",
      date: "Novembre 2024",
      size: "720 KB",
      pdfUrl: "/documents/reglement-interieur.pdf",
      imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Code de déontologie",
      description: "Principes éthiques et valeurs de la Fédération",
      category: "Statuts",
      date: "Octobre 2024",
      size: "650 KB",
      pdfUrl: "/documents/code-deontologie.pdf",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Guide fiscal 2025",
      description: "Synthèse des dispositions fiscales applicables aux entreprises",
      category: "Guides",
      date: "Septembre 2024",
      size: "3.2 MB",
      pdfUrl: "/documents/guide-fiscal-2025.pdf",
      imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Étude sectorielle - Industrie gabonaise",
      description: "Analyse approfondie du secteur industriel au Gabon",
      category: "Études",
      date: "Août 2024",
      size: "4.1 MB",
      pdfUrl: "/documents/etude-industrie.pdf",
      imageUrl: "https://images.unsplash.com/photo-1565373679599-e2f3cb75783d?w=800&h=600&fit=crop",
    },
    {
      id: 8,
      title: "Rapport financier 2024",
      description: "États financiers et rapport d'audit de la FEG",
      category: "Rapports",
      date: "Juillet 2024",
      size: "1.5 MB",
      pdfUrl: "/documents/rapport-financier-2024.pdf",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      title: "Guide d'adhésion à la FEG",
      description: "Toutes les informations pour devenir membre de la FEG",
      category: "Guides",
      date: "Juin 2024",
      size: "980 KB",
      pdfUrl: "/documents/guide-adhesion.pdf",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    },
  ];

  const categories = ["Tous", "Rapports", "Guides", "Statuts", "Études"];

  const filteredDocuments =
    selectedCategory === "Tous"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

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
                Documentation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Centre de Documentation
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Accédez à l'ensemble de nos documents, rapports, guides et études
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary-900 text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-900 shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Documents Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="group h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                    {/* Document Preview */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
                      <Image
                        src={doc.imageUrl}
                        alt={doc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-bronze-base text-primary-900 text-xs font-bold rounded-full">
                          {doc.category}
                        </span>
                      </div>

                      {/* Overlay Icons */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform">
                          <Eye size={32} className="text-primary-900" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-2 line-clamp-2 group-hover:text-bronze-dark transition-colors">
                        {doc.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {doc.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{doc.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FileText size={14} />
                          <span>{doc.size}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <a
                        href={doc.pdfUrl}
                        download
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-900 to-primary-800 hover:from-primary-800 hover:to-primary-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                      >
                        <Download size={16} />
                        <span>Télécharger</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredDocuments.length === 0 && (
              <div className="text-center py-16">
                <FileText size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">
                  Aucun document trouvé dans cette catégorie
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
