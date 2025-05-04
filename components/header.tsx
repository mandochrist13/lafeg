import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Header() {
  return (
    <header className="">
      <div className="py-5 mx-auto gap-10 px-20 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="">
              <Image src="/logo (1).png" alt="FEG Logo" width={100} height={100} className="object-contain w-full" />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/contact">
            <div className="">
              <Image src="/locate.png" alt="FEG Logo" width={100} height={100} className="object-contain w-full" />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href="https://facebook.com" className="text-[#3b5998] hover:opacity-80">
            <Facebook size={20} />
          </Link>
          <Link href="https://linkedin.com" className="text-[#0077b5] hover:opacity-80">
            <Linkedin size={20} />
          </Link>
          <Link href="https://twitter.com" className="text-[#1da1f2] hover:opacity-80">
            <Twitter size={20} />
          </Link>
          <Link href="https://youtube.com" className="text-[#ff0000] hover:opacity-80">
            <Youtube size={20} />
          </Link>
        </div>
      </div>
      <nav className="bg-[#063d21] px-20 text-white">
        <div className="container mx-auto flex flex-wrap">
          <Link href="/" className="px-6 py-3 font-semibold text-sm bg-[#f39c12] hover:bg-[#e67e22] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
          <Link href="/la-feg" className="px-6 py-3 font-semibold text-sm hover:bg-[#005528]">
            LA FEG
          </Link>
          <Link href="/membre" className="px-6 py-3 font-semibold text-sm hover:bg-[#005528]">
            NOS MEMBRES
          </Link>
          <Link href="/actualites" className="px-6 font-semibold text-sm py-3 hover:bg-[#005528]">
            ACTUALITÉS
          </Link>
          <Link href="/evenements" className="px-6 font-semibold text-sm py-3 hover:bg-[#005528]">
            ÉVÉNEMENTS
          </Link>
          <Link href="/publications" className="px-6 font-semibold text-sm py-3 hover:bg-[#005528]">
            PUBLICATIONS
          </Link>
          <Link href="/contact" className="px-6 py-3 font-semibold text-sm hover:bg-[#005528]">
            CONTACT
          </Link>
          <div className="ml-auto">
            <Link href="/devenir-membre" className="px-6 py-3 bg-[#f39c12] font-semibold text-sm hover:bg-[#e67e22] inline-block">
              DEVENIR MEMBRE
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
