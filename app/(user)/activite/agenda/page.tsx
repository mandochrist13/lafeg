"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface AgendaEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imageUrl: string;
}

export default function AgendaPage() {
  const agendaEvents: AgendaEvent[] = [
    {
      id: 1,
      title: "Assemblée Générale Annuelle de la FEG",
      date: "15 juin 2025",
      time: "09:00 - 13:00",
      location: "Hôtel Radisson Blu, Libreville",
      category: "Assemblée",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Forum sur l'investissement au Gabon",
      date: "10 mai 2025",
      time: "08:30 - 17:00",
      location: "Palais des Congrès, Libreville",
      category: "Forum",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Séminaire sur la fiscalité des entreprises",
      date: "25 avril 2025",
      time: "14:00 - 17:30",
      location: "Siège de la FEG, Libreville",
      category: "Séminaire",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Atelier sur le commerce électronique",
      date: "15 avril 2025",
      time: "09:00 - 12:30",
      location: "Hôtel Nomad, Libreville",
      category: "Atelier",
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Agenda
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Notre Agenda
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Découvrez tous nos événements à venir et restez informés des activités de la FEG
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Timeline View */}
            <div className="space-y-8">
              {agendaEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-bronze-base text-primary-900 text-xs font-bold rounded-full">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-bronze-dark transition-colors">
                            {event.title}
                          </h3>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                <Calendar size={18} className="text-primary-900" />
                              </div>
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                <Clock size={18} className="text-primary-900" />
                              </div>
                              <span className="font-medium">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                <MapPin size={18} className="text-primary-900" />
                              </div>
                              <span className="font-medium">{event.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-primary-900 hover:text-bronze-base font-semibold transition-colors"
                          >
                            S'inscrire
                            <ChevronRight size={18} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Ne Manquez Aucun Événement
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Inscrivez-vous à notre newsletter pour recevoir les notifications de tous nos événements
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-bronze-base to-bronze-dark hover:from-bronze-dark hover:to-bronze-base text-primary-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Nous Contacter</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
