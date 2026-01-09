import React from "react";

interface SophisticatedHeroProps {
  imageSrc: string;
  imageAlt?: string;
  headline?: string;
  description?: string;
}

const SophisticatedHero: React.FC<SophisticatedHeroProps> = ({
  imageSrc,
  imageAlt = "Elegant venue interior",
  headline = "YOUR LOCATION FOR TODAY'S SOPHISTICATED CLIENTELE",
  description = "With over three decades of experience in the hospitality industry, FiDi Hospitality possesses the knowledge and resources required to help you effectively manage and market your venue.",
}) => {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:min-h-screen w-full bg-stone-50">
      <div className="relative w-full lg:w-1/2 h-[50vh] min-h-[300px] lg:h-auto lg:min-h-screen overflow-hidden group">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-stone-50/10 pointer-events-none" />
      </div>

      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 sm:px-8 md:py-12 lg:px-16 xl:px-24 bg-stone-50">
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/5 bg-linear-to-b from-transparent via-amber-600/30 to-transparent" />

        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-6 lg:mb-10">
          {headline}
        </h2>

        <div className="relative w-40 h-0.5 bg-primary mb-6 lg:mb-10"></div>

        <p className=" text-lg sm:text-xl font-light leading-relaxed lg:leading-loose text-gray-700 tracking-wide">
          {description}
        </p>

        <div className="hidden lg:block absolute bottom-16 right-16 w-14 h-14 border border-primary rotate-45">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border border-primary" />
        </div>
      </div>
    </section>
  );
};

export default SophisticatedHero;
