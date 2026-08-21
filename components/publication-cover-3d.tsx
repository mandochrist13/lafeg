"use client";

interface PublicationCover3DProps {
  title: string;
  category: string;
  date: string;
  customCoverImage?: string; // Optional: URL to a pre-designed cover image
}

export default function PublicationCover3D({
  title,
  category,
  date,
  customCoverImage,
}: PublicationCover3DProps) {
  return (
    <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-visible bg-gradient-to-br from-primary/5 to-primary/10 rounded">
      <div
        className="publication-cover-wrapper relative w-[62%] aspect-[3/4] transition-transform duration-300 ease-out hover:translate-y-[-4px]"
        style={{
          perspective: '900px',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="publication-cover w-full h-full rounded-[1px_5px_5px_1px] shadow-[26px_22px_30px_-14px_rgba(5,38,23,0.4)] md:shadow-[26px_22px_30px_-14px_rgba(5,38,23,0.4)] transition-all duration-300 relative overflow-hidden"
          style={{
            transform: 'rotateY(-22deg) rotateX(3deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Custom cover image or generated cover */}
          {customCoverImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${customCoverImage})`,
              }}
            />
          ) : (
            <>
              {/* Generated gradient cover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#05261a]" />

              {/* Cover content */}
              <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 text-white">
                {/* Top label */}
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-bronze-base">
                    {category}
                  </span>
                </div>

                {/* Title in the middle-bottom area */}
                <div className="mt-auto mb-2 sm:mb-3">
                  <h4 className="font-serif font-bold text-[13px] sm:text-[14px] leading-[1.28] line-clamp-4">
                    {title}
                  </h4>
                </div>

                {/* Footer */}
                <div className="text-[9px] sm:text-[10px] opacity-75">
                  FEG · {date}
                </div>
              </div>
            </>
          )}

          {/* Book spine effect (dark edge on left) */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[10px] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.4), transparent)',
            }}
          />
        </div>

        {/* Hover effect enhancement */}
        <style jsx>{`
          .publication-cover-wrapper:hover .publication-cover {
            transform: rotateY(-14deg) rotateX(2deg);
          }

          /* Mobile-specific adjustments for better text readability */
          @media (max-width: 640px) {
            .publication-cover {
              transform: rotateY(-10deg) rotateX(2deg);
            }
            .publication-cover-wrapper:hover .publication-cover {
              transform: rotateY(-8deg) rotateX(1deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
