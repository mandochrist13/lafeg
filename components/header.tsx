"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Détecter le scroll pour changer l'apparence de la nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out">
        {/* Navigation avec effet au scroll */}
        <nav className={`transition-all duration-500 ease-out ${
          isScrolled
            ? 'backdrop-blur-lg bg-white/90 shadow-lg'
            : 'bg-white shadow-sm'
        }`}>
          <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo (1).png"
                alt="FEG Logo"
                width={120}
                height={50}
                className="object-contain h-12 w-auto"
                priority
              />
            </Link>

            {/* Burger menu button - mobile only */}
            <button
              className="md:hidden text-primary-900 p-2 hover:bg-primary-50 rounded-lg transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`px-4 py-2 font-semibold text-sm uppercase transition-all duration-300 ease-out rounded-lg transform hover:scale-105 ${
                  isActive("/")
                    ? "text-white bg-primary-900 shadow-md"
                    : "text-gray-700 hover:text-primary-900 hover:bg-primary-50"
                }`}
              >
                Accueil
              </Link>

              {/* La FEG - Dropdown */}
              <div className="group relative">
                <button className={`px-4 py-2 font-semibold text-sm uppercase flex items-center gap-1 transition-all duration-300 ease-out rounded-lg transform hover:scale-105 ${
                  isActive("/la-feg")
                    ? "text-white bg-primary-900 shadow-md"
                    : "text-gray-700 hover:text-primary-900 hover:bg-primary-50"
                }`}>
                  La FEG
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white min-w-[220px] shadow-2xl rounded-xl overflow-hidden top-full mt-2 border border-gray-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                  <Link href="/la-feg?tab=a-propos" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    À propos de nous
                  </Link>
                  <Link href="/la-feg?tab=presidence" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Le président
                  </Link>
                  <Link href="/la-feg?tab=gouvernance" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    La gouvernance
                  </Link>
                  <Link href="/la-feg?tab=histoire" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Notre histoire
                  </Link>
                  <Link href="/la-feg?tab=valeurs" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Nos valeurs
                  </Link>
                  <Link href="/la-feg?tab=mission" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Notre mission
                  </Link>
                  <Link href="/la-feg?tab=services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Nos services
                  </Link>
                </div>
              </div>

              <Link
                href="/membre"
                className={`px-4 py-2 font-semibold text-sm uppercase transition-all duration-300 ease-out rounded-lg transform hover:scale-105 ${
                  isActive("/membre")
                    ? "text-white bg-primary-900 shadow-md"
                    : "text-gray-700 hover:text-primary-900 hover:bg-primary-50"
                }`}
              >
                Nos Membres
              </Link>

              {/* Nos Activités - Dropdown */}
              <div className="group relative">
                <button className={`px-4 py-2 font-semibold text-sm uppercase flex items-center gap-1 transition-all duration-300 ease-out rounded-lg transform hover:scale-105 ${
                  isActive("/activite")
                    ? "text-white bg-primary-900 shadow-md"
                    : "text-gray-700 hover:text-primary-900 hover:bg-primary-50"
                }`}>
                  Nos Activités
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white min-w-[200px] shadow-2xl rounded-xl overflow-hidden top-full mt-2 border border-gray-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                  <Link href="/activite/actualites" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Actualités
                  </Link>
                  <Link href="/activite/agenda" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Agenda
                  </Link>
                  <Link href="/activite/communiques" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Communiqués
                  </Link>
                  <Link href="/activite/evenements" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Événements
                  </Link>
                </div>
              </div>

              {/* Nos Publications - Dropdown */}
              <div className="group relative">
                <button className={`px-4 py-2 font-semibold text-sm uppercase flex items-center gap-1 transition-all duration-300 ease-out rounded-lg transform hover:scale-105 ${
                  (isActive("/documentation") || isActive("/presse-media") || isActive("/publications"))
                    ? "text-white bg-primary-900 shadow-md"
                    : "text-gray-700 hover:text-primary-900 hover:bg-primary-50"
                }`}>
                  Nos Publications
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white min-w-[200px] shadow-2xl rounded-xl overflow-hidden top-full mt-2 border border-gray-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                  <Link href="/documentation" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Documentation
                  </Link>
                  <Link href="/presse-media" className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 hover:pl-6">
                    Presse & Média
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-4 py-2 font-semibold text-sm uppercase transition-all duration-300 ease-out rounded-lg transform hover:scale-105 ${
                  isActive("/contact")
                    ? "text-white bg-primary-900 shadow-md"
                    : "text-gray-700 hover:text-primary-900 hover:bg-primary-50"
                }`}
              >
                Contact
              </Link>

              {/* Bouton Devenir Membre - Style original avec effet shimmer */}
              <Link
                href="/devenir-membre"
                className="ml-1 px-5 py-2.5 bg-[linear-gradient(110deg,#b0b08b,45%,#dcdaa4,55%,#b0b08b)] bg-[length:200%_100%] text-primary-900 shimmer-ultra-slow font-bold text-sm uppercase hover:from-bronze-lighter hover:to-bronze-medium transition-all duration-300 ease-out shadow-md hover:shadow-xl rounded-lg flex items-center gap-2 transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
                Devenir Membre
              </Link>
            </div>
          </div>

          {/* Mobile Menu - full screen overlay */}
          <div
            className={`md:hidden fixed inset-0 bg-[#063d21] z-40 overflow-y-auto transition-all duration-500 ease-out ${
              isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            } pt-20 px-4`}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`px-4 py-3 font-bold text-sm flex items-center transition-all duration-300 ease-out relative transform hover:scale-105 ${
                  isActive("/")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "bg-primary-100 text-primary-900 hover:bg-primary-700 hover:text-white hover:pl-6"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                ACCUEIL
              </Link>

              {/* Mobile Dropdown - La FEG */}
              <div className="group">
                <button className={`w-full px-4 py-3 font-semibold text-sm flex justify-between items-center transition-all duration-300 ease-out ${
                  isActive("/la-feg")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6 text-white"
                }`}>
                  LA FEG
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="pl-4">
                  <Link
                    href="/la-feg?tab=a-propos"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À propos de nous
                  </Link>
                  <Link
                    href="/la-feg?tab=presidence"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Le président
                  </Link>
                  <Link
                    href="/la-feg?tab=gouvernance"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    La gouvernance
                  </Link>
                  <Link
                    href="/la-feg?tab=histoire"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notre histoire
                  </Link>
                  <Link
                    href="/la-feg?tab=valeurs"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nos valeurs
                  </Link>
                  <Link
                    href="/la-feg?tab=mission"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notre mission
                  </Link>
                  <Link
                    href="/la-feg?tab=services"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nos services
                  </Link>
                </div>
              </div>

              <Link
                href="/membre"
                className={`px-4 py-3 font-semibold text-sm transition-all duration-300 ease-out block transform hover:scale-105 ${
                  isActive("/membre")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6 text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                NOS MEMBRES
              </Link>

              {/* Mobile Dropdown - Nos Activités */}
              <div className="group">
                <button className={`w-full px-4 py-3 font-semibold text-sm flex justify-between items-center transition-all duration-300 ease-out ${
                  isActive("/activite")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6 text-white"
                }`}>
                  NOS ACTIVITÉS
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="pl-4">
                  <Link
                    href="/activite/actualites"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Actualités
                  </Link>
                  <Link
                    href="/activite/agenda"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agenda
                  </Link>
                  <Link
                    href="/activite/communiques"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Communiqués
                  </Link>
                  <Link
                    href="/activite/evenements"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Événements
                  </Link>
                </div>
              </div>

              {/* Mobile Dropdown - Nos Publications */}
              <div className="group">
                <button className={`w-full px-4 py-3 font-semibold text-sm flex justify-between items-center transition-all duration-300 ease-out ${
                  (isActive("/documentation") || isActive("/presse-media") || isActive("/publications"))
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6 text-white"
                }`}>
                  NOS PUBLICATIONS
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="pl-4">
                  <Link
                    href="/documentation"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/presse-media"
                    className="block px-4 py-2 text-white hover:bg-[#005528] transition-all duration-300 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Presse & Média
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className={`px-4 py-3 font-semibold text-sm transition-all duration-300 ease-out block transform hover:scale-105 ${
                  isActive("/contact")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6 text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>

              <Link
                href="/devenir-membre"
                className="px-4 py-3 bg-[linear-gradient(110deg,#b0b08b,45%,#dcdaa4,55%,#b0b08b)] bg-[length:200%_100%] text-primary-900 shimmer-ultra-slow font-bold text-sm hover:from-bronze-lighter hover:to-bronze-medium inline-block transition-all duration-300 ease-out mt-2 rounded-md transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-4 h-4 inline mr-2 -mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
                DEVENIR MEMBRE
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer pour compenser le header fixe */}
      <div className="h-24"></div>

      {/* Styles CSS personnalisés pour shimmer ultra-lent */}
      <style jsx global>{`
        @keyframes shimmer-ultra-slow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .shimmer-ultra-slow {
          animation: shimmer-ultra-slow 15s linear infinite;
          background-size: 200% 100%;
        }
      `}</style>
    </>
  );
}
