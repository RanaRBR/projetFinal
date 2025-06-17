import NavBarre from '@/components/navBarre/NavBarre'
import { Link } from '@inertiajs/react'

export default function ArticleListe({ articles }) {
    return (
        <section className="min-h-screen bg-gray-50 py-20 px-4 mt-40">

            <NavBarre />
            <div className="max-w-6xl mx-auto">
                <h2 
                className="mb-4 text-5xl font-medium text-cyan-600 uppercase p-10 text-center"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}>Côté presse</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
                        >
                            <img
                                src={article.photo}
                                alt={article.titre}
                                className="h-48 w-full object-cover"
                            />

                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.titre}</h2>
                                <p className="text-sm text-gray-500 mb-4">{article.date} — {article.auteur}</p>
                                <p className="text-gray-700 line-clamp-3 mb-4">{article.paragraphe}</p>

                                <Link
                                    href={`/article/${article.id}`}
                                    className="text-cyan-600 font-medium hover:underline"
                                >
                                    Lire l'article en détails →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
