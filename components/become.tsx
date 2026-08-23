"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BecomeMemberSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    legalForm: "",
    phone1: "",
    phone2: "",
    email: "",
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Votre demande d'adhésion a été envoyée avec succès !");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Fond avec image corporative */}
      <div className="absolute inset-0">
        {/* Image d'arrière-plan visible */}
        <Image
          src="/images/corpo.jpg"
          alt="FEG Corporate"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />

        {/* Overlay équilibré pour lisibilité ET visibilité de l'image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/82 to-primary-900/80 z-10"></div>

        {/* Effet de lumière visible */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-bronze-base/25 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-white/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grille décorative */}
        <div
          className="absolute inset-0 z-20 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 218, 164, 0.6) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(220, 218, 164, 0.6) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-30">
        {/* En-tête centré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-bronze-base/30 backdrop-blur-md text-white border-2 border-bronze-base/50 font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-2xl mb-6">
            <Sparkles size={18} className="text-bronze-base drop-shadow-lg" />
            <span className="drop-shadow-lg">Rejoignez la FEG</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Devenez membre de l'<span className="text-bronze-base drop-shadow-lg">élite économique</span>
          </h2>

          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Intégrez le réseau des + 1100 entreprises qui façonnent l'avenir économique du Gabon
          </p>
        </motion.div>

        {/* Grille principale : Image + Formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Colonne image inspirante - 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >

            {/* Image principale avec overlay texte */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative h-[500px]">
                <Image
                  src="/images/or gabon.jpg"
                  alt="Équipe FEG"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Overlay gradient élégant */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/60 to-transparent"></div>

                {/* Texte sur image */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-bronze-base/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-primary-900 font-black text-sm uppercase tracking-wider">Vision FEG 2030</p>
                    </div>

                    <p className="text-white font-bold text-2xl italic leading-tight">
                      "Bâtir ensemble une économie forte pour garantir la souveraineté nationale"
                    </p>

                    {/* Mini stats */}
                    <div className="flex gap-6 pt-4">
                      <div>
                        <div className="text-3xl font-black text-bronze-base">+1100</div>
                        <div className="text-xs text-gray-300 font-semibold">Membres</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-bronze-base">67</div>
                        <div className="text-xs text-gray-300 font-semibold">Ans</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-bronze-base">18</div>
                        <div className="text-xs text-gray-300 font-semibold">Secteurs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Colonne formulaire - 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border-t-4 border-bronze-base">

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-primary-900 mb-2">
                  Formulaire d'adhésion
                </h3>
                <p className="text-gray-600">
                  Remplissez ce formulaire pour rejoindre la FEG
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Nom entreprise */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-bold text-gray-800 mb-2">
                    <Building2 className="inline mr-2 text-primary" size={16} />
                    Raison sociale *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                    placeholder="Société Gabonaise d'Excellence"
                  />
                </div>

                {/* Secteur + Forme juridique en ligne */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="sector" className="block text-sm font-bold text-gray-800 mb-2">
                      Secteur d'activité *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="industrie">Industrie</option>
                      <option value="services">Services</option>
                      <option value="commerce">Commerce</option>
                      <option value="transport">Transport</option>
                      <option value="btp">BTP</option>
                      <option value="energie">Énergie</option>
                      <option value="telecom">Télécom</option>
                      <option value="banque">Finance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="legalForm" className="block text-sm font-bold text-gray-800 mb-2">
                      Forme juridique *
                    </label>
                    <select
                      id="legalForm"
                      name="legalForm"
                      value={formData.legalForm}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="sa">SA</option>
                      <option value="sarl">SARL</option>
                      <option value="sas">SAS</option>
                      <option value="ei">EI</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Téléphones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone1" className="block text-sm font-bold text-gray-800 mb-2">
                      <Phone className="inline mr-2 text-primary" size={16} />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone1"
                      name="phone1"
                      value={formData.phone1}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                      placeholder="+241 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone2" className="block text-sm font-bold text-gray-800 mb-2">
                      Téléphone 2
                    </label>
                    <input
                      type="tel"
                      id="phone2"
                      name="phone2"
                      value={formData.phone2}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                      placeholder="+241 XX XX XX XX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                    <Mail className="inline mr-2 text-primary" size={16} />
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                    placeholder="contact@entreprise.ga"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                    J'accepte les conditions d'adhésion de la FEG *
                  </label>
                </div>

                {/* Bouton submit avec effet shimmer */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary-800 hover:to-primary-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  {/* Effet shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  <span className="relative z-10">Soumettre ma candidature</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Votre demande sera étudiée sous 48h ouvrées
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
