import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#006633] text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">À propos de la FEG</h3>
            <p className="mb-4">
              La Fédération des Entreprises du Gabon (FEG) est l'organisation patronale représentative des entreprises
              gabonaises.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Link href="https://facebook.com" className="text-white hover:text-[#f39c12]">
                <Facebook size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-white hover:text-[#f39c12]">
                <Linkedin size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-[#f39c12]">
                <Twitter size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-white hover:text-[#f39c12]">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/la-feg" className="hover:text-[#f39c12]">
                  À propos de la FEG
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-[#f39c12]">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="hover:text-[#f39c12]">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-[#f39c12]">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/devenir-membre" className="hover:text-[#f39c12]">
                  Devenir membre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p>Immeuble ODYSSEE, Boulevard de l'Indépendance, BP 415, Libreville, Gabon</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p>+241 011 77 55 57</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <p>info@feg.ga</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Fédération des Entreprises du Gabon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
