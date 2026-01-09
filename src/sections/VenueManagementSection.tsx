const VenueManagementSection = () => {
  const venues = [
    { src: "/images/module4_image1.jpg", alt: "48 Wall Street" },
    { src: "/images/module4_image2.jpg", alt: "FiDi Banking Hall" },
    { src: "/images/module4_image3.jpg", alt: "Artistry" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-6 lg:mb-10">
              VENUE
              <br />
              MANAGEMENT
              <br />
              EXPERTISE
            </h2>

            <div className="w-48 h-0.5 bg-primary mb-10"></div>

            <h3 className="text-lg md:text-xl  text-neutral-900 mb-4 tracking-wide">
              LET FIDI HOSPITALITY PROTECT YOUR
              <br />
              EXQUISITE VENUE!
            </h3>

            <p className="text-neutral-700 leading-relaxed mb-6">
              The knowledgeable team at FiDi Hospitality has the skills and
              expertise required to manage and produce events within landmark
              locations, hotels, retail spaces and a variety of event venues all
              over the world.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              As your creative partner, we will implement a hospitality and
              management program designed specifically to match the needs of
              your venue. Providing our partners with a turn-key food and
              beverage component, along with an event team, allows us to
              maximize your ROI.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {venues.map((venue, index) => (
              <div key={index} className="w-full">
                <img
                  src={venue.src}
                  alt={venue.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueManagementSection;
