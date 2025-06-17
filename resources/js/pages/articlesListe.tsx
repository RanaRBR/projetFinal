import NavBarre from '@/components/navBarre/NavBarre';
import { Link } from '@inertiajs/react';

export default function ArticlesListe({ articles }) {
    return (
        <section className="mt-40 min-h-screen bg-gray-100 px-4 py-20 font-serif">
            <NavBarre />
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-16 text-center text-5xl font-extrabold text-cyan-700 uppercase tracking-wide leading-tight"
                    style={{ fontFamily: "'Merriweather', sans-serif" , fontStyle: 'normal', fontWeight: 600 }}
                >
                    côté presse
                </h2>

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={article.photo}
                                    alt={article.titre}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col justify-between p-6 grow">
                                <header className="mb-4">
                                    <h3 className="mb-2 text-2xl font-bold text-gray-800 leading-snug group-hover:text-cyan-700"
                                        style={{ fontFamily: "'Merriweather', serif" }}
                                    >
                                        {article.titre}
                                    </h3>
                                    <p className="text-xs text-gray-500 italic">
                                        publié le {article.date} — par {article.auteur}
                                    </p>
                                </header>

                                <p
                                    className="mb-6 text-gray-700 text-sm line-clamp-4 leading-relaxed"
                                    style={{ fontFamily: "'Lora', serif", fontWeight: 400 }}
                                >
                                    {article.paragraphe}
                                </p>

                                <Link
                                    href={`/article/${article.id}`}
                                    className="mt-auto self-start text-sm font-semibold text-cyan-600 hover:text-cyan-800 transition duration-200"
                                >
                                    lire l’article complet →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
