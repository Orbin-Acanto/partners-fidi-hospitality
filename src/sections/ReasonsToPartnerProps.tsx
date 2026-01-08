import React from "react";

interface ReasonCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ReasonsToPartnerProps {
  headline?: string;
  reasons: ReasonCard[];
}

const ReasonsToPartner: React.FC<ReasonsToPartnerProps> = ({
  headline = "SIX REASONS TO PARTNER WITH US",
  reasons,
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-widest text-stone-800 mb-6">
          {headline}
        </h2>
        <div className="w-16 h-0.5 bg-amber-700 mx-auto" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#c9a962] p-6 md:p-8 transition-all duration-300 hover:bg-[#b89850] hover:shadow-lg"
          >
            <div className="text-stone-800 mb-4 md:mb-5 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8 [&>img]:w-6 [&>img]:h-6 md:[&>img]:w-8 md:[&>img]:h-8">
              {reason.icon}
            </div>

            <h3 className="font-sans text-sm md:text-base font-semibold tracking-[0.15em] text-stone-900 mb-2 uppercase">
              {reason.title}
            </h3>

            <p className="font-sans text-sm font-light text-stone-800/80 leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToPartner;
