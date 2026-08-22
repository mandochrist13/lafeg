import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function EnhancedFooter() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Link href="/" className="block mb-6">
              <div className="relative h-32 w-32">
                <Image
                  src="/images/ft-log.png"
                  alt="FEG Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <div>
            <h3 className="text-bronze-light font-bold mb-4 border-b-2 border-primary pb-2">La FEG</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/la-feg/president"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Le président
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/a-propos"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/histoire"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/gouvernance"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  La gouvernance
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/phototheque"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Photothèque
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-bronze-light font-bold mb-4 border-b-2 border-primary pb-2">Nos activités</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/actualites"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  href="/evenements"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  href="/communiques"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Communiqués
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-bronze-light font-bold mb-4 border-b-2 border-primary pb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentation"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/presse"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Presse & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/membres"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Entreprises membres
                </Link>
              </li>
              <li>
                <Link
                  href="/adhesion"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Adhérer à la FEG
                </Link>
              </li>
              <li>
                <Link
                  href="/partenaires"
                  className="hover:text-bronze-light transition-colors duration-200"
                >
                  Nos partenaires
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-bronze-light font-bold mb-4 border-b-2 border-primary pb-2">Adresse </h3>
            <p className="text-sm text-gray-400">
              Immeuble ODYSSÉE, Boulevard de l'Indépendance, BP. 410,
              Libreville, GABON
            </p>
          </div>

         
        </div>
        <div className="md:col-span-4">
            <div className="border-t border-gray-700 flex justify-between mt-10">
              
              <div className="mt-6 text-center flex justify-between items-center text-sm text-gray-400">
                <p>
                  Copyright © {new Date().getFullYear()} · Fédération des
                  Entreprises du Gabon · Développé par{" "}
                  <a href="#" className="text-bronze-light hover:text-bronze-lighter hover:underline transition-colors duration-200">
                    OMDC
                  </a>
                </p>

              </div>
              <div className="flex mt-6 flex-col md:flex-row justify-between gap-5 items-center">
                <div className="space-x-4 text-sm text-gray-400">
                  <Link href="/conditions" className="hover:text-bronze-light transition-colors duration-200">
                    Conditions générales d'utilisation
                  </Link>
                  <span>|</span>
                  <Link href="/politique" className="hover:text-bronze-light transition-colors duration-200">
                    Politique de confidentialité
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    className="text-gray-400 hover:text-bronze-light transition-colors duration-200"
                  >
                    <Facebook size={20} />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-bronze-light transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-bronze-light transition-colors duration-200"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    className="text-gray-400 hover:text-bronze-light transition-colors duration-200"
                  >
                    <Youtube size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}
