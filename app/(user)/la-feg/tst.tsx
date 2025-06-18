"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import A_propos from "../../components/a_propos";
import President from "../../components/president";
import Gouvernance from "../../components/gouvernance";
import Histoire from "../../components/histoire";
import Valeurs from "../../components/valeur";
import Services from "../../components/service";
import Phototheque from "../../components/phototheque";

export default function LaFeg() {
  const [selectedTab, setSelectedTab] = useState("a-propos");

  interface TabContent {
    title: string;
    content: string;
  }

  // Contenu pour chaque onglet
  const tabContents: Record<string, TabContent> = {
    "a-propos": {
      title: "À propos de la FEG",
      content:
        "La Fédération des Entreprises du Gabon est une organisation patronale...",
    },
    presidence: {
      title: "Présidence",
      content: "Alain-Claude KOUAKOUA, Président de la FEG...",
    },
    gouvernance: {
      title: "Gouvernance",
      content: "Notre structure organisationnelle...",
    },
    histoire: {
      title: "Notre histoire",
      content: "Un aperçu de l'histoire de la FEG...",
    },
    valeurs: {
      title: "Nos valeurs",
      content: "Les valeurs qui nous guident...",
    },
    // missions: {
    //   title: "Nos missions",
    //   content: "Les missions de la FEG pour le développement économique...",
    // },
    services: {
      title: "Nos services",
      content: "Les services offerts par la FEG à ses membres...",
    },
    Phototheque: {
      title: "Photothèque",
      content:
        "Découvrez notre photothèque avec des images de nos activités...",
    },
  };
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative bg-[#063d21] text-white py-12 md:py-20">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/banière.jpg"
              alt="Arrière-plan entreprises membres"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {tabContents[selectedTab].title}
            </h1>

            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Bâtir ensemble une économie forte pour garantir la souveraineté
              nationale. Notre institution contribue à un idéal commun : la
              performance des entreprises gabonaises.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white shadow-sm py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-[#063d21] hover:text-[#004d26]">
                ACCUEIL
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-[#f39c12] font-medium">à propos</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content - Main */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Mieux connaître la FEG
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                Bâtir ensemble une économie forte pour garantir la souveraineté
                nationale. Notre institution contribue à un idéal commun : la
                performance des entreprises gabonaises.
              </p>

              <Tabs
                className="mb-8"
                defaultValue={selectedTab}
                onValueChange={(value) => setSelectedTab(value)}
              >
                <TabsList className="h-[30%] bg-[#063d21] flex gap-1 justify-start items-center overflow-x-auto">
                  {Object.keys(tabContents).map((tabKey) => (
                    <TabsTrigger
                      key={tabKey}
                      value={tabKey}
                      className="text-white hover:bg-[#f39c12]"
                    >
                      {tabKey
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent id="a-propos" value="a-propos">
                  <A_propos  />
                </TabsContent>
                <TabsContent id="president" value="presidence">
                  <President />
                </TabsContent>
                <TabsContent id="gouvernance" value="gouvernance">
                  <Gouvernance />
                </TabsContent>
                <TabsContent id="histoire" value="histoire">
                  <Histoire />
                </TabsContent>
                <TabsContent id="valeurs" value="valeurs">
                  <Valeurs />
                </TabsContent>
                <TabsContent id="missions" value="missions">Contenu Nos missions</TabsContent>
                <TabsContent id="services" value="services">
                  <Services />
                </TabsContent>
                <TabsContent id="phototheque" value="phototheque">
                  <Phototheque />
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* President Card */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/Mr_KOUAKOUA.jpg"
                    alt="Alain-Claude KOUAKOUA"
                    width={300}
                    height={400}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    layout="responsive"
                  />
                </div>
                <h4 className="text-[#006d40] font-bold text-lg sm:text-xl mb-1">
                  Alain-Claude KOUAKOUA
                </h4>
                <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Président de La FEG
                </p>
                <p className="text-gray-600 text-xs sm:text-sm italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-[#f39c12]">
                  "Bâtissons ensemble une économie forte pour garantir la
                  souveraineté nationale"
                </p>
              </div>

              {/* Partners Section */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <h4 className="font-bold text-[#063d21] mb-4">
                  Nos partenaires
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      src: "/images/executive_club.png",
                      alt: "Executive Club",
                    },
                    { src: "/images/iga.png", alt: "IGA" },
                    { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
                    { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
                  ].map((partner) => (
                    <div
                      key={partner.alt}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-sm transition-shadow h-20"
                    >
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={120}
                        height={60}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
