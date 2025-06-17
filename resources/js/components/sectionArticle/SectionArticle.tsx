import { Link } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import { TfiLayoutLineSolid } from 'react-icons/tfi'

export default function Articles({ articles }) {
    const [current, setCurrent] = useState(0)
    const tout = articles.length

    const next = () => {
        setCurrent((prev) => (prev + 1) % tout)
    }

    useEffect(() => {
        const interval = setInterval(next, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="media" className="relative min-h-screen bg-gradient-to-tr from-cyan-100 to-yellow-100 px-4 py-20">
            <div className="absolute inset-0 bg-black/5 z-0" />

            <div className="relative mx-auto max-w-4xl z-10">
                <div className="mb-12 text-center">
                    <h2
                        className="mb-4 text-5xl font-medium text-cyan-600 uppercase"
                        style={{ fontFamily: "'Merriweather', sans-serif" , fontStyle: 'normal', fontWeight: 600 }}
                    >
                        Vu dans les médias
                    </h2>
                     <p className="text-xl font-extrabold text-black" style={{ fontFamily: "'Merriweather', serif" }}>
                         Voyage, travail, impact : ce que les médias retiennent!
                     </p>
                </div>

                <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-all duration-300">
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900"
                                                style={{ fontFamily: "'Merriweather', sans-serif" , fontStyle: 'normal', fontWeight: 600 }}
>
                            {articles[current].titre}
                        </h3>
                    </div>

                    <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden shadow-md">
                        <img
                            src={articles[current].photo}
                            alt={articles[current].titre}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/25" />
                    </div>

                    <p className="mb-4 text-black text-md leading-relaxed line-clamp-3" style={{ fontFamily: "'Raleway', sans-serif" }}
>
                        {articles[current].paragraphe}

                    </p>

                    <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                        <span>{articles[current].date}</span>
                        <span>{articles[current].auteur}</span>
                    </div>

                    <Link
                        // href={`/article/${articles[current].id}`}
                        href='/articles'
                        className="inline-block text-sm font-medium text-cyan-700 hover:text-cyan-900 transition"
                    >
                        Tous les articles
                    </Link>

                    <div className="mt-8 flex justify-center gap-2 text-xl">
                        {articles.map((_, index) => (
                            <TfiLayoutLineSolid
                                key={index}
                                className={`cursor-pointer transition-transform ${
                                    index === current
                                        ? 'text-cyan-600 scale-125'
                                        : 'text-gray-300 hover:text-gray-500'
                                }`}
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

