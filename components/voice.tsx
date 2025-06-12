import Image from "next/image";
import Link from "next/link";

export default function VoiceOfBusiness() {
  return (
    <div className="bg-[#F9F9F9] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content - Conforme à la maquette */}
          <div className="lg:w-2/3 space-y-6">
            <h1 className="text-[32px] leading-[38px] font-bold text-[#1A1A1A]">
              La voix des affaires au Gabon,<br />
              <span className="text-[#D97306]">une question d'engagement historique</span>
            </h1>

            <div className="space-y-5 text-[#666666] text-[16px] leading-[24px]">
              <p>
                À travers des interventions régulières auprès du gouvernement, des
                institutions et des partenaires nationaux et internationaux, la
                FEG travaille jour après jour à l'amélioration du climat des
                affaires au Gabon pour le secteur privé. Les négociations et les
                séances de travail sur un projet peuvent se poursuivre pendant
                plusieurs années avant d'aboutir à un résultat satisfaisant pour
                les parties.
              </p>

              <p>
                C'est pourquoi la FEG a à cœur de déployer la même énergie
                vibrante tout en cultivant un sentiment d'unité parmi ses membres,
                et en particulier le bureau exécutif.
              </p>
            </div>

            <div className="flex flex-col items-start pt-2">
              <div className="w-16 h-px bg-[#D9D9D9] mb-4"></div>
              <Link
                href="/la-feg"
                className="flex items-center text-white p-3 rounded-md bg-[#D97306] text-[16px] font-medium hover:bg-[#B25C00] transition-colors"
              >
                Lire la suite
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Content - Exactement comme la maquette */}
          <div className="lg:w-1/3 w-full">
            <div className="relative aspect-[3/4] w-full overflow-hidden border-[6px] border-[#f39c12] shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/Mr_KOUAKOUA.jpg"
                alt="Président de la FEG"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}