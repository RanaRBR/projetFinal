import Footer from '@/components/footer/Footer';
import NavBarre from '@/components/navBarre/NavBarre';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { ImSearch } from "react-icons/im";

export default function ArticlesListe({ articles, auth_user_id }) {
    const [filtre, setFiltre] = useState('tous');
    const [search, setSearch] = useState('');

    const filtrerArticles = () => {
        return articles.filter((article) => {
            const locaux = article.local === true || article.local === 'true' || article.local === 1 || article.local === '1';

            const correspondFiltre =
                filtre === 'tous' ||
                (filtre === 'local' && locaux) ||
                (filtre === 'etranger' && !locaux);

            const correspondRecherche = article.titre.toLowerCase().includes(search.toLowerCase());

            return correspondFiltre && correspondRecherche;
        });
    };

    return (
        <> 
        <section className="mt-40 min-h-screen bg-gray-100 px-4 py-20 font-serif">
        <NavBarre auth_user_id={auth_user_id} />
            <div className="mx-auto max-w-7xl">
                <h2
                    className="mb-10 text-center text-5xl font-extrabold text-orange-400 uppercase tracking-wide leading-tight"
                    style={{ fontFamily: "'Merriweather', sans-serif", fontStyle: 'normal', fontWeight: 600 }}
                >
                    Zoom sur l’actualité
                </h2>

                <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-black mt-20">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-600"
                        />
                        <ImSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-600 pointer-events-none" />
                    </div>

                    <div className="flex gap-4 mt-10">
                        <button
                            onClick={() => setFiltre('local')}
                            className={`px-6 py-2 rounded-full border font-semibold transition ${
                                filtre === 'local' ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-700 border-cyan-600 cursor-pointer'
                            }`}
                        >
                            Près de chez vous
                        </button>
                        <button
                            onClick={() => setFiltre('etranger')}
                            className={`px-6 py-2 rounded-full border font-semibold transition ${
                                filtre === 'etranger' ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-700 border-cyan-600 cursor-pointer'
                            }`}
                        >
                            A l’étranger
                        </button>
                        <button
                            onClick={() => setFiltre('tous')}
                            className={`px-6 py-2 rounded-full border font-semibold transition cursor-pointer ${
                                filtre === 'tous' ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-700 border-cyan-600 '
                            }`}
                        >
                            Tous
                        </button>
                    </div>
                </div>

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 mt-20">
                    {filtrerArticles().map((article) => (
                        <div
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
                                <div className="mb-4">
                                    <h3
                                        className="mb-2 text-2xl font-bold text-gray-800 leading-snug group-hover:text-cyan-700"
                                        style={{ fontFamily: "'Merriweather', serif" }}
                                    >
                                        {article.titre}
                                    </h3>
                                    <p className="text-xs text-gray-500 italic">
                                        publié le {article.date} — par {article.auteur}
                                    </p>
                                </div>

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
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
        
    <Footer auth_user_id={auth_user_id} />

    </>


        
    );
}


