function SectionAbout({ abouts = [] }) {
  
  return (
    <div className="flex mt-35 items-center bg-gray-50" id="about">
      {abouts.map((item) => (
        <section
          key={item.id}
          className="relative w-full bg-cover bg-center py-32"
          style={{ backgroundImage: `url('${item.image}')` }}
        >
          <div className="absolute inset-0 z-0 bg-black/82" />

          <div className="relative z-10 container mx-auto px-4 text-left text-white">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="order-1 mb-10 w-full lg:order-1 lg:mb-0 lg:w-1/2 lg:pr-16">
                <img
                  src={item.image}
                  alt={item.titre}
                  className="h-100 w-full rounded-xl object-cover shadow-xl"
                />
              </div>

              <div className="order-2 w-full lg:order-2 lg:w-1/2">
                <h2
                  className="mb-6 text-4xl text-center md:text-4xl md:text-center lg:text-left lg:text-5xl font-medium text-orange-400 uppercase"
                  style={{
                    fontFamily: "'Merriweather', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                  }}
                >
                  {item.titre}
                </h2>
                <p
                  className="mb-8 text-lg text-center md:text-center md:text-lg lg:text-left lg:text-xl"
                  style={{
                    fontFamily: "'Raleway', serif",
                    fontStyle: 'normal',
                    fontWeight: 500,
                  }}
                >
                  {item.texte}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default SectionAbout;
