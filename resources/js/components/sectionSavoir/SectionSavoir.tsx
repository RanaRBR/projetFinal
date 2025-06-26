import { useEffect, useState } from 'react';

function SectionSavoir({ savoirs }) {
  const [Savoir, setSavoir] = useState(null);

  useEffect(() => {
    if (savoirs && savoirs.length > 0) {
      const index = Math.floor(Math.random() * savoirs.length);
      setSavoir(savoirs[index]);
    }
  }, [savoirs]);

  if (!Savoir) return null;

  return (
    <div className="bg-gray-50 lg:py-20 lg:px-4  flex flex-col lg:flex-row items-center lg:items-start justify-around lg:gap-22">
      
      <div className="relative w-[350px] md:relative md:w-[400px] lg:w-[650px] ">
        <img src="/images/pancarte.png" alt="pancarte" className="lg:w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1
            className="text-2xl md:text-3xl lg:text-5xl lg:mt-2 mt-5 font-bold uppercase text-black leading-tight mb-15"
            style={{ fontFamily: "'Henny Penny', system-ui" }}
          >
            Le <span className="text-cyan-600">codiez</span><br />
            -vous <span className="text-cyan-600 ms-8">?</span>
          </h1>
        </div>
      </div>

      <section className="max-w-xl text-center md:text-center lg:mt-20 lg:me-15 lg: mb-20 p-8 ">
        <h2 className="mb-6 text-4xl text-center md:text-4xl md:text-center lg:text-center lg:text-5xl  font-medium text-orange-400 uppercase"
         style={{
                    fontFamily: "'Merriweather', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                  }}>
          {Savoir.titre}
        </h2>
        <p
          className="lg:text-xl text-black md:text-center text-lg"
          style={{
            fontFamily: "'Raleway', serif",
            fontStyle: 'normal',
            fontWeight: 500,
          }}
        >
          {Savoir.info}
        </p>
      </section>
    </div>
  );
}

export default SectionSavoir;
