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
    <div className="bg-gray-50 py-20 px-4 flex flex-col md:flex-row items-center md:items-start justify-around gap-22">
      
      <div className="relative w-[350px] md:w-[650px] lg:-[650px] ">
        <img src="/images/pancarte.png" alt="pancarte" className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1
            className="text-2xl md:text-5xl lg:text-5xl lg:mt-2 mt-5 font-bold uppercase text-black leading-tight mb-15"
            style={{ fontFamily: "'Henny Penny', system-ui" }}
          >
            Le <span className="text-cyan-600">codiez</span><br />
            -vous <span className="text-cyan-600 ms-8">?</span>
          </h1>
        </div>
      </div>

      <section className="max-w-xl text-center md:text-left mt-20 me-15  mb-20">
        <h2 className="mb-6 text-4xl md:text-5xl font-medium text-orange-400 uppercase"
         style={{
                    fontFamily: "'Merriweather', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                  }}>
          {Savoir.titre}
        </h2>
        <p
          className="text-xl text-black"
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
