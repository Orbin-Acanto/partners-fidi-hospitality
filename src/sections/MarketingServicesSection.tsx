const MarketingServicesSection = () => {
  const services = [
    {
      icon: "/icons/module9_icon_professional.svg",
      title: "PROFESSIONAL PHOTOGRAPHY & VIDEOGRAPHY",
      description: "Of venues & events",
    },
    {
      icon: "/icons/module9_icon_marketing.svg",
      title: "MARKETING & PROMOTIONAL MATERIALS",
      description: "Creation and design",
    },
    {
      icon: "/icons/module9_icon_ongoing.svg",
      title: "ONGOING ADVERTISING",
      description: "Of venues & event services",
    },
    {
      icon: "/icons/module9_icon_website.svg",
      title: "WEBSITE DEVELOPMENT",
      description: "Mobile friendly & graphic design",
    },
    {
      icon: "/icons/module9_icon_in-house.svg",
      title: "IN-HOUSE SALES TEAM",
      description: "Dedicated marketing professionals",
    },
    {
      icon: "/icons/module9_icon_email.svg",
      title: "EMAIL & SOCIAL MEDIA",
      description: "Marketing and promotion",
    },
  ];

  return (
    <section className="w-full ">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
        <div className="px-8 py-12 lg:px-16 lg:py-16 bg-white">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-4 lg:mb-8">
            MARKETING SERVICES
          </h2>

          <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
            FiDi Hospitality is equipped with an in-house team of graphic
            designers and web developers offering a variety of marketing and
            event services.
          </p>

          <div className="w-48 h-0.5 bg-primary mb-10"></div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-primary p-5 flex flex-col">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-3"
                />
                <h3 className="text-lg md:text-xl font-semibold tracking-[0.15em] text-stone-800 mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-base font-light text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-64 lg:h-auto">
          <img
            src="/images/module9_image-100.jpg"
            alt="Professional hospitality team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingServicesSection;
