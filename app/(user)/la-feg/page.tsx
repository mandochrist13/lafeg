"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import A_propos from "@/components/a_propos";
import PresidentFull from "@/components/president-full";
import Gouvernance from "@/components/gouvernance";
import Histoire from "@/components/histoire";
import Valeurs from "@/components/valeur";
import Services from "@/components/service";
import Mission from "@/components/mission";
import { Suspense } from "react";

interface TabContent {
  title: string;
  content: string;
}

function TabComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState("a-propos");

  const tabContents: Record<string, TabContent> = {
    "a-propos": {
      title: "À propos",
      content: "La Fédération des Entreprises du Gabon est une organisation patronale...",
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
      title: "Histoire",
      content: "Un aperçu de l'histoire de la FEG...",
    },
    valeurs: {
      title: "Valeurs",
      content: "Les valeurs qui nous guident...",
    },
    mission: {
      title: "Mission",
      content: "Notre mission et notre raison d'être...",
    },
    services: {
      title: "Services",
      content: "Les services offerts par la FEG à ses membres...",
    },
  };

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && tabParam in tabContents) {
      setSelectedTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    const newUrl = `${pathname}?tab=${value}`;
    window.history.pushState(null, "", newUrl);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#063d21] text-white py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banière.jpg"
            width={1920}
            height={1080}
            alt="Arrière-plan entreprises membres"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {tabContents[selectedTab]?.title || "La FEG"}
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
            <span className="text-bronze-base font-medium">
              {tabContents[selectedTab]?.title || "La FEG"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative">
        {/* Logo en filigrane subtil */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Logo FEG"
            width={5000}
            height={5000}
            className="opacity-[0.03] select-none"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
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
              value={selectedTab}
              onValueChange={handleTabChange}
            >
              <TabsList className="h-[30%] bg-[#063d21] flex gap-1 justify-start items-center overflow-x-auto">
                {Object.keys(tabContents).map((tabKey) => (
                  <TabsTrigger
                    key={tabKey}
                    value={tabKey}
                    className="text-white hover:bg-bronze-light hover:text-primary-900"
                  >
                    {tabContents[tabKey]?.title || tabKey}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="a-propos">
                <A_propos />
              </TabsContent>
              <TabsContent value="presidence">
                <PresidentFull />
              </TabsContent>
              <TabsContent value="gouvernance">
                <Gouvernance />
              </TabsContent>
              <TabsContent value="histoire">
                <Histoire />
              </TabsContent>
              <TabsContent value="valeurs">
                <Valeurs />
              </TabsContent>
              <TabsContent value="mission">
                <Mission />
              </TabsContent>
              <TabsContent value="services">
                <Services />
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* President Card */}
            <div className="bg-[#f5f5f5] p-4 sm:p-6 rounded-lg shadow-md border border-gray-100">
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
              <p className="text-gray-600 text-xs sm:text-sm italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-bronze-base">
                "L'histoire économique d'un pays ne s'écrit pas dans les administrations. Elle s'écrit sur le terrain, dans la sueur des ateliers et le risque des entrepreneurs."
              </p>
            </div>

            {/* Partners Section */}
            <div className="bg-[#f5f5f5] rounded-xl shadow-md p-5">
              <h4 className="font-bold text-[#063d21] mb-4">Nos partenaires</h4>
              <div className="grid gap-3">
                {[
                  { src: "/images/executive_club.png", alt: "Executive Club" },
                  { src: "/images/iga.png", alt: "IGA" },
                  { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
                  { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
                ].map((partner) => (
                  <div
                    key={partner.alt}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-sm transition-shadow "
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={200}
                      height={200}
                      className="h-20 w-auto object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LaFeg() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <TabComponent />
    </Suspense>
  );
}