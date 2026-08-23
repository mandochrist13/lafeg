"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function EnhancedFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Image de fond avec overlay élégant */}
      <div className="absolute inset-0">
        <Image
          src="/images/corpo.jpg"
          alt="FEG Corporate"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/94 via-primary-800/95 to-primary-900/94"></div>
      </div>

      {/* Effets lumineux animés */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bronze-base/15 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/8 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Grille décorative subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 218, 164, 0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(220, 218, 164, 0.4) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 mb-10"
        >
          {/* Logo et description - 2 colonnes */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <motion.div
                className="relative h-20 w-36"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/ft-log.png"
                  alt="FEG Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              La voix du secteur privé gabonais depuis 1983.
            </p>

            {/* Coordonnées avec animations */}
            <div className="space-y-3">
              <motion.div
                className="flex items-start gap-3 text-sm text-gray-300 group cursor-default"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin size={18} className="text-bronze-base flex-shrink-0 mt-0.5 group-hover:text-bronze-light transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  Immeuble ODYSSÉE, Boulevard de l'Indépendance, BP. 410, Libreville, GABON
                </span>
              </motion.div>

              <motion.a
                href="tel:+24100000000"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone size={18} className="text-bronze-base flex-shrink-0 group-hover:text-bronze-light transition-colors" />
                <span>+241 XX XX XX XX</span>
              </motion.a>

              <motion.a
                href="mailto:contact@feg.ga"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail size={18} className="text-bronze-base flex-shrink-0 group-hover:text-bronze-light transition-colors" />
                <span>contact@feg.ga</span>
              </motion.a>
            </div>
          </motion.div>

          {/* La FEG */}
          <motion.div variants={itemVariants}>
            <h3 className="text-bronze-base font-bold mb-4 pb-2 border-b-2 border-bronze-base/30">
              La FEG
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/la-feg/president", label: "Le président" },
                { href: "/la-feg/a-propos", label: "À propos de nous" },
                { href: "/la-feg/histoire", label: "Notre histoire" },
                { href: "/la-feg/gouvernance", label: "Gouvernance" },
                { href: "/la-feg/phototheque", label: "Photothèque" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-bronze-base transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nos activités */}
          <motion.div variants={itemVariants}>
            <h3 className="text-bronze-base font-bold mb-4 pb-2 border-b-2 border-bronze-base/30">
              Nos activités
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/actualites", label: "Actualités" },
                { href: "/evenements", label: "Événements" },
                { href: "/communiques", label: "Communiqués" },
                { href: "/agenda", label: "Agenda" },
                { href: "/publications", label: "Publications" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-bronze-base transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-bronze-base font-bold mb-4 pb-2 border-b-2 border-bronze-base/30">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/documentation", label: "Documentation" },
                { href: "/presse", label: "Presse & Media" },
                { href: "/membres", label: "Nos membres" },
                { href: "/adhesion", label: "Adhérer" },
                { href: "/partenaires", label: "Partenaires" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-bronze-base transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div variants={itemVariants}>
            <h3 className="text-bronze-base font-bold mb-4 pb-2 border-b-2 border-bronze-base/30">
              Suivez-nous
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Restez connectés sur nos réseaux
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <motion.a
                href="https://facebook.com/feg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-bronze-base rounded-xl flex items-center justify-center text-gray-300 hover:text-primary-900 transition-all duration-300 border border-white/10 hover:border-bronze-base group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/company/feg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-bronze-base rounded-xl flex items-center justify-center text-gray-300 hover:text-primary-900 transition-all duration-300 border border-white/10 hover:border-bronze-base group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* Twitter/X */}
              <motion.a
                href="https://twitter.com/feg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-bronze-base rounded-xl flex items-center justify-center text-gray-300 hover:text-primary-900 transition-all duration-300 border border-white/10 hover:border-bronze-base group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com/@feg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-bronze-base rounded-xl flex items-center justify-center text-gray-300 hover:text-primary-900 transition-all duration-300 border border-white/10 hover:border-bronze-base group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bas de page avec animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Fédération des Entreprises du Gabon · Développé avec passion par{" "}
                <a
                  href="https://cof13.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-base hover:text-bronze-light transition-colors font-semibold underline-offset-4 hover:underline"
                >
                  COF13
                </a>
              </p>
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap gap-4 items-center text-sm">
              <Link
                href="/conditions"
                className="text-gray-400 hover:text-bronze-base transition-colors"
              >
                Conditions générales
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/politique"
                className="text-gray-400 hover:text-bronze-base transition-colors"
              >
                Confidentialité
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-bronze-base transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
