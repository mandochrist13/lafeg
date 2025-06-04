"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "CIAN", logo: "/partners/cian.png" },
  { id: 2, name: "CCEM", logo: "/partners/cgem.png" },
  { id: 3, name: "IOE", logo: "/partners/ioe.png" },
  { id: 4, name: "UNIPACE", logo: "/partners/unipace.png" },
  { id: 6, name: "OIT", logo: "/partners/oit.png" },
  { id: 7, name: "MEDEF", logo: "/partners/medef.png" },
  { id: 8, name: "APF", logo: "/partners/alliance_patronat_francophone.png" },
  // Dupliquez les partenaires pour un effet de boucle continu
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

  // Configuration du défilement automatique
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollSpeed = 1; // Vitesse de défilement (en pixels)

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Réinitialiser le défilement quand on arrive à la fin
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription newsletter:", formData);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Nos partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les partenaires de la FEG l'accompagnent au quotidien dans ses
            actions et missions en faveur de l'amélioration du climat des
            affaires au Gabon.
          </p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} className="text-[#006633]" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex overflow-x-hidden scrollbar-hide py-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 px-4"
              >
                <div className="w-40 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 160px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Suivant"
          >
            <ChevronRight size={24} className="text-[#006633]" />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/partenaires"
            className="border-2 border-[#006633] text-[#006633] px-8 py-3 rounded-lg font-semibold hover:bg-[#006633] hover:text-white transition-all duration-300"
          >
            TOUT AFFICHER
          </Link>
        </div>

        {/* Newsletter Section - Version Institutionnelle Verte avec Image de Fond */}
        <div className="w-full bg-[#063D21] mt-11 py-16 px-4 sm:px-6 lg:px-8 relative rounded-sm overflow-hidden">
          {/* Image d'arrière-plan avec overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/newsletter.jpg" // Remplacez par votre image
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#063D21]/90 to-[#0A5C36]/80"></div> */}
          </div>

          {/* Éléments décoratifs animés */}
          {/* <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#2ECC71]/10 blur-xl animate-pulse animation-delay-1000"></div>
  <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-[#ED9727]/10 blur-xl animate-pulse"></div>
  <div className="absolute right-1/2 bottom-0 w-32 h-32 rounded-full bg-[#2ECC71]/15 blur-lg animate-pulse animation-delay-500"></div> */}

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="inline-block bg-clip-text text-transparent bg-[#ED9727]">
                  Inscrivez-vous à notre newsletter
                </span>
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Recevez nos actualités et informations institutionnelles
                directement dans votre boîte mail
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                {/* Raison sociale */}
                <div className="lg:col-span-4">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Raison sociale *
                  </label>
                  <div className="relative rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-[#2ECC71] transition-all bg-white/95 hover:bg-white"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Statut */}
                <div className="lg:col-span-3">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Statut *
                  </label>
                  <div className="relative hover:shadow-md transition-shadow">
                    <select
                      id="status"
                      name="status"
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-[#2ECC71] transition-all bg-white/95 hover:bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2ZDZjNmMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="entreprise">Entreprise</option>
                      <option value="particulier">Particulier</option>
                      <option value="institution">Institution</option>
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div className="lg:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Email *
                  </label>
                  <div className="relative rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-[#2ECC71] transition-all bg-white/95 hover:bg-white"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bouton */}
                <div className="lg:col-span-2 flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ED9727] to-[#e67e22] hover:from-[#e67e22] hover:to-[#ED9727] text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-[1.02] active:scale-95 transform-gpu"
                  >
                    <span>S'INSCRIRE</span>
                    <svg
                      className="ml-2 h-4 w-4 animate-bounce-horizontal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Checkbox acceptation */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptNewsletter"
                    name="acceptNewsletter"
                    type="checkbox"
                    className="focus:ring-[#2ECC71] h-5 w-5 text-[#2ECC71] border-gray-300 rounded hover:scale-110 transition-transform"
                    required
                  />
                </div>
                <label
                  htmlFor="acceptNewsletter"
                  className="ml-3 block text-sm text-white/90 hover:text-white transition-colors"
                >
                  J'accepte de recevoir les informations de la FEG et ses
                  partenaires
                </label>
              </div>

              {/* reCAPTCHA et liens */}
              <div className="pt-6 border-t border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <input
                      id="notRobot"
                      name="notRobot"
                      type="checkbox"
                      className="focus:ring-[#2ECC71] h-5 w-5 text-[#2ECC71] border-gray-300 rounded mr-3 hover:scale-110 transition-transform"
                      required
                    />
                    <span className="text-sm text-white/90 hover:text-white transition-colors">
                      Je ne suis pas un robot
                    </span>
                    <div className="ml-3 flex items-center hover:scale-105 transition-transform">
                      <div className="bg-white/10 p-1 rounded hover:bg-white/20 transition-colors">
                        <Image
                          src="/images/recaptcha-logo.png"
                          alt="reCAPTCHA"
                          width={70}
                          height={30}
                          className="h-5 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
