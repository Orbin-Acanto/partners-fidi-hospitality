const ComprehensiveServicesSection = () => {
  const services = [
    {
      icon: "/icons/module8_icon_planning.svg",
      title: "PLANNING & DESIGN",
      description:
        "From event design to development and onsite coordination, we are devoted to producing an event that will exceed every expectation.",
    },
    {
      icon: "/icons/module8_icon_staging.svg",
      title: "STAGING & LIGHTING",
      description:
        "Our team's extensive knowledge provides clients with the right guidance and resources needed to plan and execute professional staging and lighting.",
    },
    {
      icon: "/icons/module8_icon_custom.svg",
      title: "CUSTOM FABRICATION",
      description:
        "Our creative team accompanied by an in-house design shop, provides limitless state-of-the-art solutions for our event partners.",
    },
    {
      icon: "/icons/module8_icon_av.svg",
      title: "AUDIO/VISUAL & TECHNOLOGY",
      description:
        "We will develop a cost-effective plan that is effectively managed and delivered by our team based on your event's objectives.",
    },
    {
      icon: "/icons/module8_icon_scenic.svg",
      title: "SCENIC DÉCOR & RENTALS",
      description:
        "Our scenic team knows how to deliver a breathtaking experience with a complete line of luxury rental décor items.",
    },
    {
      icon: "/icons/module8_icon_food.svg",
      title: "FOOD & BEVERAGE",
      description:
        "Through creative prep FiDi Hospitality is able to provide seamless on site execution with exceptional culinary experiences.",
    },
  ];

  return (
    <section className="w-full bg-stone-100 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-4 lg:mb-8">
            COMPREHENSIVE EVENT SERVICES
          </h2>
          <div className="w-48 h-0.5 bg-primary mx-auto "></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 mb-4"
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
    </section>
  );
};

export default ComprehensiveServicesSection;
