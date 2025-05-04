"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

const publications = [
  {
    id: 1,
    title: "Lettre Circulaire Dette intérieure (BIS)",
    image: "/images/publication1.jpg", // remplace par l'image réelle
    pdfIcon: "/icons/pdf.png",
  },
  {
    id: 2,
    title: "Lettre Circulaire Enquête RSE",
    image: "/images/publication2.jpg",
    pdfIcon: "/icons/pdf.png",
  },
  {
    id: 3,
    title:
      "Décret n°00027/PR/MEPPDD du 17 janvier 2018 portant Code des Marchés Publics",
    image: "/images/publication3.jpg",
    pdfIcon: "/icons/pdf.png",
  },
];

export default function PublicationsSection() {
  return (
    <section className="py-20 bg-white text-center px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Nos publications
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        Découvrez et téléchargez ici l&apos;ensemble de nos publications et documents utiles.
        La FEG met à la disposition de ses membres tous les outils qui leur sont nécessaires.
      </p>

      {/* <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2000 }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {publications.map((pub) => (
          <SwiperSlide key={pub.id}>
            <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
              <div className="relative w-full h-48 overflow-hidden rounded">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover"
                />
                <img
                  src={pub.pdfIcon}
                  alt="PDF"
                  className="absolute top-2 right-2 w-6 h-6"
                />
              </div>
              <p className="mt-4 font-medium text-gray-800 text-sm">{pub.title}</p>
              <button className="mt-4 bg-[#f39c12] hover:bg-[#e18f0c] text-white py-2 px-6 rounded font-semibold text-sm">
                CONSULTER
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
}
