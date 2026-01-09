const EventCoordinationSection = () => {
  const services = [
    {
      icon: "/icons/module5_icon_budgeting.svg",
      title: "BUDGETING & CREATION",
      description: "Strategic financial planning and event conceptualization",
    },
    {
      icon: "/icons/module5_icon_coordinating.svg",
      title: "COORDINATING",
      description: "Seamless scheduling and logistics management",
    },
    {
      icon: "/icons/module5_icon_marketing.svg",
      title: "MARKETING",
      description: "Targeted promotional strategies and outreach",
    },
    {
      icon: "/icons/module5_icon_security.svg",
      title: "SECURITY & LOGISTICS",
      description: "Complete safety protocols and operational execution",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="h-64 lg:h-auto">
          <img
            src="/images/module5_image-100.jpg"
            alt="Comprehensive Event Coordination"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-8 py-12 lg:px-16 lg:py-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-4 lg:mb-8">
            COMPREHENSIVE
            <br />
            EVENT COORDINATION
          </h2>

          <div className="w-48 h-0.5 bg-primary mb-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary p-6 flex flex-col items-center text-center"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-3"
                />
                <h3 className="text-lg md:text-xl font-semibold tracking-[0.15em] text-stone-900 mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="text-base font-light text-gray-800 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCoordinationSection;
