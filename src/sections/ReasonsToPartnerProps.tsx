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
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-6 lg:mb-10">
          {headline}
        </h2>
        <div className="w-48 h-0.5 bg-primary mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-primary p-6 md:p-8 transition-all duration-300 hover:bg-[#b89850] hover:shadow-lg"
          >
            <div className="text-stone-800 mb-4 md:mb-5 [&>img]:w-6 [&>img]:h-6 md:[&>img]:w-12 md:[&>img]:h-12">
              {reason.icon}
            </div>

            <h3 className="text-lg md:text-xl font-semibold tracking-[0.15em] text-stone-900 mb-2 uppercase">
              {reason.title}
            </h3>

            <p className="text-base font-light text-gray-800 leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToPartner;
