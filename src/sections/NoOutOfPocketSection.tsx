const NoOutOfPocketSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="h-64 lg:h-auto">
          <img
            src="/images/out_of_pocket.jpeg"
            alt="Professional hospitality team"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-8 py-12 lg:px-16 lg:py-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal tracking-wide leading-snug text-stone-800 mb-4 lg:mb-8">
            NO OUT OF POCKET
            <br />
            EXPENSES
          </h2>

          <div className="w-48 h-0.5 bg-primary mb-10"></div>

          <div className="flex flex-col gap-6">
            <p className="text-neutral-700 leading-relaxed">
              We become your strategic venue partner. We don't charge a fee for
              our services on a monthly retainer basis. We are only making money
              when you're making money by booking events within your location.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              When you partner with FiDi Hospitality you receive the benefits of
              having a full-event management, marketing and hospitality team at
              your fingertips. No more hiring, firing or paying additional
              employees on your hospitality team ever again.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              Our exclusive partnership helps create a new revenue stream at
              your venue by increasing the efficiency of planning and managing
              events within your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoOutOfPocketSection;
