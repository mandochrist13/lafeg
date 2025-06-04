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
            <h3 className="text-[#f39c12] font-bold mb-4">La FEG</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/la-feg/president"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Le président
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/a-propos"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/histoire"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/gouvernance"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  La gouvernance
                </Link>
              </li>
              <li>
                <Link
                  href="/la-feg/phototheque"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Photothèque
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#f39c12] font-bold mb-4">Nos activités</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/actualites"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  href="/evenements"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  href="/communiques"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Communiqués
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#f39c12] font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentation"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/presse"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Presse & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/membres"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Entreprises membres
                </Link>
              </li>
              <li>
                <Link
                  href="/adhesion"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Adhérer à la FEG
                </Link>
              </li>
              <li>
                <Link
                  href="/partenaires"
                  className="hover:text-[#f39c12] transition-colors"
                >
                  Nos partenaires
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#f39c12] font-bold mb-4">Adresse </h3>
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
                  <a href="#" className="text-[#f39c12] hover:underline">
                    OMDC 
                  </a>
                </p>
                
              </div>
              <div className="flex mt-6 flex-col md:flex-row justify-between gap-5 items-center">
                <div className="space-x-4 text-sm text-gray-400">
                  <Link href="/conditions" className="hover:text-[#f39c12]">
                    Conditions générales d'utilisation
                  </Link>
                  <span>|</span>
                  <Link href="/politique" className="hover:text-[#f39c12]">
                    Politique de confidentialité
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    className="text-gray-400 hover:text-[#f39c12]"
                  >
                    <Facebook size={20} />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-[#f39c12]"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-[#f39c12]"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    className="text-gray-400 hover:text-[#f39c12]"
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
