import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#b0b08b] hover:border-[#b0b08b] group">
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4 bg-gray-50">
                  <Image
                    width={300}
                    height={400}
                    loading="lazy"
                    src={item.link || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder-profile.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              {" "}
              <div>
                {" "}
                <CardTitle>{item.title}</CardTitle>
              </div>
              <div>
                <CardDescription className="text-white bg-bronze-light text-center p-2 rounded-md font-semibold">
                  {item.description}
                </CardDescription>
              </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full  flex flex-col justify-between overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-[#b0b08b] relative z-20 hover:from-[#e6e4b4] hover:to-[#c7c7a0] text-[#063a1e]  animate-shimmer bg-[linear-gradient(110deg,#063d21,45%,#02572c,55%,#063d21)] bg-[length:200%_100%] font-medium transition-all duration-400 ease-out group",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 text-center p-2 text-base font-bold tracking-wide mt-2",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mb-3 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
