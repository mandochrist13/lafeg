"use client";

import { useEffect, useState, useRef } from "react";

interface StatisticProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatisticItem({
  value,
  label,
  suffix = "",
  duration = 2000,
}: StatisticProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / 40;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      start = Math.min(Math.floor(progress * end), end);
      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return (
    <div
      ref={countRef}
      className="text-center p-6 bg-[rgba(255,255,255,0.1)] rounded-lg"
    >
      <div className="text-6xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white">{label}</div>
    </div>
  );
}

export default function KeyStatistics() {
  return (
    <section className="py-16 bg-[#063d21]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Découvrez la FEG en quelques chiffres
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto mb-12">
          À travers des interventions régulières auprès du gouvernement, des
          institutions et des partenaires nationaux et internationaux, la FEG
          travaille jour après jour à l'amélioration du climat des affaires au
          Gabon pour le secteur privé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatisticItem value={10} label="Présidents depuis la création" />
          <StatisticItem value={66} label="Années d'existence" />
          <StatisticItem value={950} label="Membres" suffix="+" />
          <StatisticItem value={12} label="Fédérations" />
        </div>
      </div>
    </section>
  );
}
