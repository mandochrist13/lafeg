"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Mail, Building2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "CIAN", logo: "/partners/cian.png" },
  { id: 2, name: "CCEM", logo: "/partners/cgem.png" },
  { id: 3, name: "IOE", logo: "/partners/ioe.png" },
  { id: 4, name: "UNIPACE", logo: "/partners/unipace.png" },
  { id: 6, name: "OIT", logo: "/partners/oit.png" },
  { id: 7, name: "MEDEF", logo: "/partners/medef.png" },
  { id: 8, name: "APF", logo: "/partners/alliance_patronat_francophone.png" },
  { id: 9, name: "CIAN", logo: "/partners/cian.png" },
  { id: 10, name: "CCEM", logo: "/partners/cgem.png" },
  { id: 11, name: "IOE", logo: "/partners/ioe.png" },
];

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    status: "",
    email: "",
    acceptTerms: false,
  });

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription newsletter:", formData);
    alert("Merci pour votre inscription !");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Section Partenaires */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-primary-900 font-bold text-sm uppercase tracking-wider bg-bronze-base/10 px-4 py-2 rounded-full">
                Nos partenaires stratégiques
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
              Nos <span className="text-primary-600">partenaires</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ensemble, nous œuvrons pour l'amélioration du climat des affaires au Gabon
            </p>
          </motion.div>

          {/* Carrousel de logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group mb-12"
          >
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:bg-primary-50 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} className="text-primary-900" />
            </button>

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex overflow-x-hidden scrollbar-hide py-8 gap-6"
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="w-48 h-36 bg-white rounded-2xl shadow-lg hover:shadow-2xl flex items-center justify-center p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group/card">
                    <div className="relative w-full h-full grayscale group-hover/card:grayscale-0 transition-all duration-500">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="192px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:bg-primary-50 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
              aria-label="Suivant"
            >
              <ChevronRight size={24} className="text-primary-900" />
            </button>
          </motion.div>

          {/* Bouton tout afficher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/partenaires"
              className="inline-flex items-center gap-3 bg-white border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Découvrir tous nos partenaires
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Newsletter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white"
          >

            {/* Image côté gauche */}
            <div className="relative h-80 lg:h-auto overflow-hidden group">
              <Image
                src="/images/marbre.jpg"
                alt="Newsletter FEG"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85"></div>

              {/* Effets lumineux sur image */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bronze-base/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-[80px]"></div>
              </div>

              {/* Texte inspirant sur l'image */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
                {/* <div className="inline-flex items-center gap-2 bg-bronze-base/30 backdrop-blur-md text-white border border-bronze-base/50 font-bold text-sm uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                  <Sparkles size={18} className="text-bronze-base" />
                  <span>Newsletter</span>
                </div> */}
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl leading-tight">
                  Rejoignez notre <span className="text-bronze-base">communauté</span>
                </h3>
                <p className="text-lg text-white/90 max-w-md drop-shadow-lg">
                  Restez informé de l'actualité économique et des initiatives de la FEG
                </p>
              </div>
            </div>

            {/* Formulaire côté droit */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 flex flex-col justify-center">
              {/* En-tête du formulaire */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-primary-900 mb-2">
                  Inscrivez-vous à notre newsletter
                </h3>
                <p className="text-gray-600">
                  Recevez nos dernières actualités directement dans votre boîte mail
                </p>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Raison sociale */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-bold text-gray-800 mb-2">
                    <Building2 className="inline mr-1 text-primary" size={16} />
                    Raison sociale *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white text-gray-900 shadow-sm hover:border-primary/50"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                {/* Statut et Email en ligne */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="status" className="block text-sm font-bold text-gray-800 mb-2">
                      Statut *
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white text-gray-900 shadow-sm hover:border-primary/50"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="entreprise">Entreprise</option>
                      <option value="particulier">Particulier</option>
                      <option value="institution">Institution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                      <Mail className="inline mr-1 text-primary" size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white text-gray-900 shadow-sm hover:border-primary/50"
                      placeholder="email@exemple.com"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 bg-gray-100 rounded-xl p-4">
                  <input
                    id="acceptNewsletter"
                    name="acceptNewsletter"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    required
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="acceptNewsletter" className="text-sm text-gray-700 leading-relaxed">
                    J'accepte de recevoir les informations de la FEG et de ses partenaires *
                  </label>
                </div>

                {/* Bouton submit premium */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary-800 hover:to-primary-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  {/* Effet shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  <span className="relative z-10">S'inscrire à la newsletter</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
