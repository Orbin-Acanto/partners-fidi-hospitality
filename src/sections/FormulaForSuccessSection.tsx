const FormulaForSuccessSection = () => {
  const features = [
    {
      title: "PROFESSIONAL REPRESENTATION",
      description:
        "Our dedicated team of trained Event Professionals ensures meticulous care for each venue. Each venue has a dedicated Coordinator and facilities team for maintenance.",
    },
    {
      title: "MARKETING YOUR VENUE",
      description:
        "We utilize state-of-the-art websites, software, and advertising strategies to reach a wide range of event clients worldwide, ensuring exposure to sophisticated clientele.",
    },
    {
      title: "GUARANTEED PAYMENTS & PROTECTION",
      description:
        "We handle contracting, insurance, deposits, and event execution, ensuring peace of mind for our clients.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="px-8 py-12 lg:px-16 lg:py-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-4 lg:mb-4">
            OUR FORMULA
            <br />
            FOR SUCCESS
          </h2>

          <p className="text-lg text-black font-semibold mb-6 lg:mb-8 uppercase">
            Turn any space into a turn-key <br />
            event venue
          </p>

          <div className="w-48 h-0.5 bg-primary mb-10"></div>

          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-primary p-6 ">
                <h3 className="text-lg md:text-xl font-semibold tracking-[0.15em] text-stone-900 mb-2 uppercase">
                  {feature.title}
                </h3>
                <p className="text-base font-light text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-64 lg:h-auto order-first xl:order-last">
          <img
            src="/images/module6_image-100.jpg"
            alt="Elegant venue setup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FormulaForSuccessSection;
