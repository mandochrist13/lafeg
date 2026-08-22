"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Twitter, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  return (
    <header className="bg-white sticky top-0 z-30">
      {/* Top Bar */}
      <div className="py-5 mx-auto gap-10 px-4 sm:px-20 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-full md:w-auto justify-between md:flex-col-reverse">
          <Link href="/">
            <div className="">
              <Image
                src="/logo (1).png"
                alt="FEG Logo"
                width={100}
                height={100}
                className="object-contain w-full"
              />
            </div>
          </Link>

          {/* Burger menu button - mobile only */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Contact Icon - hidden on mobile when menu is open */}
        {!isMenuOpen && (
          <div className="flex items-center">
            <Link href="/contact">
              <div className="">
                <Image
                  src="/locate.png"
                  alt="FEG Logo"
                  width={100}
                  height={100}
                  className="object-contain w-full"
                />
              </div>
            </Link>
          </div>
        )}

        {/* Social Icons - hidden on mobile when menu is open */}
        {/* {!isMenuOpen && (
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="https://facebook.com"
              className="text-[#3b5998] hover:opacity-80"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-[#0077b5] hover:opacity-80"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-[#1da1f2] hover:opacity-80"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-[#ff0000] hover:opacity-80"
            >
              <Youtube size={20} />
            </Link>
          </div>
        )} */}
      </div>

      {/* Navigation */}
      <nav className="bg-[#063d21] px-4 sm:px-20 text-white shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center relative">
          {/* Mobile Menu - full screen overlay */}
          <div
            className={`md:hidden fixed inset-0 bg-[#063d21] z-40 overflow-y-auto transition-all duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } pt-20 px-4`}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`px-4 py-3 font-bold text-sm flex items-center transition-all duration-300 relative ${
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
                <button className={`w-full px-4 py-3 font-semibold text-sm flex justify-between items-center transition-all duration-300 ${
                  isActive("/la-feg")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6"
                }`}>
                  LA FEG
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À propos de nous
                  </Link>
                  <Link
                    href="/la-feg?tab=presidence"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Le président
                  </Link>
                  <Link
                    href="/la-feg?tab=gouvernance"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    La gouvernance
                  </Link>
                  <Link
                    href="/la-feg?tab=histoire"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notre histoire
                  </Link>
                  <Link
                    href="/la-feg?tab=valeurs"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nos valeurs
                  </Link>
                  <Link
                    href="/la-feg?tab=services"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nos services
                  </Link>
                  <Link
                    href="/la-feg?tab=phototheque"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Photothèque
                  </Link>
                </div>
              </div>

              <Link
                href="/membre"
                className={`px-4 py-3 font-semibold text-sm transition-all duration-300 block ${
                  isActive("/membre")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                NOS MEMBRES
              </Link>

              {/* Mobile Dropdown - Nos Activités */}
              <div className="group">
                <button className={`w-full px-4 py-3 font-semibold text-sm flex justify-between items-center transition-all duration-300 ${
                  isActive("/activite")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6"
                }`}>
                  NOS ACTIVITÉS
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Actualités
                  </Link>
                  <Link
                    href="/activite/agenda"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agenda
                  </Link>
                  <Link
                    href="/activite/communiques"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Communiqués
                  </Link>
                  <Link
                    href="/activite/evenements"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Événements
                  </Link>
                </div>
              </div>

              {/* Mobile Dropdown - Nos Publications */}
              <div className="group">
                <button className={`w-full px-4 py-3 font-semibold text-sm flex justify-between items-center transition-all duration-300 ${
                  (isActive("/documentation") || isActive("/presse-media") || isActive("/publications"))
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6"
                }`}>
                  NOS PUBLICATIONS
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/presse-media"
                    className="block px-4 py-2 hover:bg-[#005528] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Presse & Média
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className={`px-4 py-3 font-semibold text-sm transition-all duration-300 block ${
                  isActive("/contact")
                    ? "bg-gradient-to-r from-bronze-base to-bronze-light text-primary-900 border-l-4 border-bronze-lighter shadow-lg"
                    : "hover:bg-[#005528] hover:pl-6"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>

              <Link
                href="/devenir-membre"
                className="px-4 py-3 bg-[linear-gradient(110deg,#b0b08b,45%,#dcdaa4,55%,#b0b08b)] bg-[length:200%_100%] text-primary-900 animate-shimmer font-bold text-sm hover:from-bronze-lighter hover:to-bronze-medium inline-block transition-all duration-400 ease-out mt-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-4 h-4 inline mr-2 -mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex md:py-2 flex-wrap items-center w-full">
            {/* Logo & Accueil */}
            <Link
              href="/"
              className={`px-6 py-2 font-semibold text-md flex items-center transition-all duration-300 ${
                isActive("/")
                  ? "bg-bronze-base text-primary-900"
                  : "hover:bg-[#005528]"
              }`}
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

            {/* La FEG - Dropdown */}
            <div className="group relative">
              <button className={`px-6 py-3 font-semibold text-md flex items-center transition-all duration-300 ${
                isActive("/la-feg")
                  ? "bg-bronze-base text-primary-900"
                  : "hover:bg-[#005528]"
              }`}>
                LA FEG
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-[#063d21] min-w-[250px] z-10 shadow-xl rounded-b-lg overflow-hidden animate-fadeIn">
                <Link
                  href="/la-feg?tab=a-propos"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  À propos de nous
                </Link>
                <Link
                  href="/la-feg?tab=presidence"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  Le président
                </Link>
                <Link
                  href="/la-feg?tab=gouvernance"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                  La gouvernance
                </Link>
                <Link
                  href="/la-feg?tab=histoire"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                  Notre histoire
                </Link>
                <Link
                  href="/la-feg?tab=valeurs"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Nos valeurs
                </Link>
                <Link
                  href="/la-feg?tab=services"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                  Nos services
                </Link>
                <Link
                  href="/la-feg?tab=phototheque"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Photothèque
                </Link>
              </div>
            </div>

            {/* Nos Membres */}
            <Link
              href="/membre"
              className={`px-6 py-3 font-semibold text-md transition-all duration-300 ${
                isActive("/membre")
                  ? "bg-bronze-base text-primary-900"
                  : "hover:bg-[#005528]"
              }`}
            >
              NOS MEMBRES
            </Link>

            {/* Nos Activités - Dropdown */}
            <div className="group relative">
              <button className={`px-6 py-3 font-semibold text-md flex items-center transition-all duration-300 ${
                isActive("/activite")
                  ? "bg-bronze-base text-primary-900"
                  : "hover:bg-[#005528]"
              }`}>
                NOS ACTIVITÉS
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-[#063d21] min-w-[220px] z-10 shadow-xl rounded-b-lg overflow-hidden animate-fadeIn">
                <Link
                  href="/activite/actualites"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  Actualités
                </Link>
                <Link
                  href="/activite/agenda"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Agenda
                </Link>
                <Link
                  href="/activite/communiques"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Communiqués
                </Link>
                <Link
                  href="/activite/evenements"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    ></path>
                  </svg>
                  Événements
                </Link>
              </div>
            </div>

            {/* Nos Publications - Dropd */}
            <div className="group relative">
              <button className={`px-6 py-3 font-semibold text-md flex items-center transition-all duration-300 ${
                (isActive("/documentation") || isActive("/presse-media") || isActive("/publications"))
                  ? "bg-bronze-base text-primary-900"
                  : "hover:bg-[#005528]"
              }`}>
                NOS PUBLICATIONS
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-[#063d21] min-w-[220px] z-10 shadow-xl rounded-b-lg overflow-hidden animate-fadeIn">
                <Link
                  href="/documentation"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Documentation
                </Link>
                <Link
                  href="/presse-media"
                  className=" px-6 py-3 hover:bg-[#005528] transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  Presse & Média
                </Link>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-6 py-3 font-semibold text-md transition-all duration-300 ${
                isActive("/contact")
                  ? "bg-bronze-base text-primary-900"
                  : "hover:bg-[#005528]"
              }`}
            >
              CONTACT
            </Link>

            {/* Bouton Devenir Membre - Mise en valeur avec effet bronze shimmer */}
            <div className="ml-auto">
              <Link
                href="/devenir-membre"
                className="px-6 py-3 bg-[linear-gradient(110deg,#b0b08b,45%,#dcdaa4,55%,#b0b08b)] bg-[length:200%_100%] text-primary-900 animate-shimmer font-bold text-sm hover:from-bronze-lighter hover:to-bronze-medium inline-block transition-all duration-400 ease-out shadow-md hover:shadow-lg rounded-md"
              >
                <svg
                  className="w-4 h-4 inline mr-2 -mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </nav>
    </header>
  );
}
