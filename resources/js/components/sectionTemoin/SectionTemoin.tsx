export default function SectionTemoin({ temoins = [] }) {
    return (
        <div
            className="relative bg-gray-900 bg-cover bg-center px-6 py-10 sm:py-32 lg:px-8" id="temoignages"
            style={{ backgroundImage: "url('/images/bgpic.jpg')" }}
            
        >
            <div className="absolute inset-0 bg-black/15"></div>

            <div className="relative z-10" id="myTemoignages">
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <h2
                        className="mb-6 text-4xl text-center md:text-4xl md:text-center lg:text-center lg:text-5xl font-medium text-cyan-600 uppercase"
                        style={{ fontFamily: "'Merriweather', sans-serif" , fontStyle: 'normal', fontWeight: 600 }}
                    >
                        Ils ont tenté l’aventure
                    </h2>
                    <p className="lg:text-xl lg:font-extrabold lg:text-black md:text-lg md:font-semibold text-black font-semibold" style={{ fontFamily: "'Merriweather', serif" }}>
                        Découvrez les témoignages inspirants de développeurs partis à l’étranger.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl md:grid-cols-1 gap-20 grid-cols-1 lg:grid-cols-2">
                    {temoins.map((temoin) => (
                        <div
                            key={temoin.id}
                            className="relative flex flex-col items-center rounded-2xl bg-white/80 p-6 text-center shadow-lg ring-1 ring-cyan-200 backdrop-blur-md"
                        >
                            <div className="absolute -top-8">
                                <img
                                    src={temoin.photo}
                                    alt={temoin.nom}
                                    className="h-20 w-20 rounded-full object-cover shadow-md ring-2 ring-cyan-200"
                                />
                            </div>

                            <div className="mt-10">
                                <p
                                    className="text-md text-black"
                                    style={{ fontFamily: "'Merriweather', serif", fontStyle: 'normal', fontWeight: 100 }}
                                >
                                    {temoin.temoignage}”
                                </p>
                                <div className="mt-4">
                                    <p className="text-base font-semibold text-gray-900">{temoin.nom}</p>
                                    <p className="text-sm text-gray-500">{temoin.pays}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
