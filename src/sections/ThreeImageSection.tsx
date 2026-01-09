const ThreeImageSection = () => {
  const images = [
    {
      src: "/images/module3_image1.jpg",
      label: "ARTFULLY\nEXECUTED",
    },
    {
      src: "/images/module3_image2.jpg",
      label: "IMMERSIVE\nSPACES",
    },
    {
      src: "/images/module3_image3.jpg",
      label: "WHERE\nEVERY DETAIL\nMATTERS",
    },
  ];

  return (
    <section className="w-full bg-neutral-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={image.label.replace("\n", " ")}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeImageSection;
