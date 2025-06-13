// import { Link } from '@inertiajs/react';

// export default function Articles({ articles }) {
//     return (
//         <div id="#media" className=" min-h-screen items-center justify-center bg-gradient-to-tr from-red-300 to-yellow-200 py-20">
//                   <div className="mx-auto max-w-4xl text-center mb-20 ">
//                     <h2
//                         className="mb-6 text-5xl font-medium text-cyan-600 uppercase"
//                         style={{ fontFamily: "'Noto Sans JP', sans-serif", fontStyle: 'normal', fontWeight: 600 }}
//                     >
//                         Vu dans les médias{' '}
//                     </h2>
//                     <p
//                         className="text-xl font-extrabold text-black"
//                         style={{ fontFamily: "'Merriweather', serif", fontStyle: 'normal', fontWeight: 100 }}
//                     >
//                         Voyage, travail, impact : ce que les médias retiennent{' '}
//                     </p>
//                 </div>
//             <div className="gap-15 space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:px-4 lg:grid-cols-3">
//                 {articles.map((article, index) => (
//                     <div
//                         key={index}
//                         className="max-w-sm transform rounded-xl bg-white px-6 pt-6 pb-2 shadow-lg transition duration-500 hover:scale-105"
//                     >
//                         <h3 className="mb-3 text-xl font-bold text-cyan-600">{article.titre}</h3>
//                         <div className="relative">
//                             <img className="w-full rounded-xl" src={article.photo} alt={article.titre} />
//                         </div>
//                         <p className="mt-4 line-clamp-4 text-sm font-medium text-black">{article.paragraphe}</p>
//                         <div className="my-4 flex items-center justify-between text-sm text-black">
//                             <span>{article.date}</span>
//                             <span>{article.auteur}</span>
//                         </div>
//                         <Link href={`/article/${article.id}`} className="text-sm font-semibold text-cyan-600 hover:underline">
//                             Lire la suite...
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import { Link } from '@inertiajs/react';

export default function Articles({ articles }) {
    return (
        <div id="media" className="relative min-h-screen bg-gradient-to-tr from-cyan-100 to-yellow-100 py-20 px-4">
            <div className="absolute inset-0 bg-black/10 z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2
                        className="mb-4 text-5xl font-medium text-cyan-600 uppercase"
                        style={{
                            fontFamily: "'Noto Sans JP', sans-serif",
                            fontWeight: 600,
                        }}
                    >
                        Vu dans les médias
                    </h2>
                    <p
                        className="text-xl text-black font-extrabold"
                        style={{
                            fontFamily: "'Merriweather', serif",
                        }}
                    >
                        Voyage, travail, impact : ce que les médias retiennent!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden flex flex-col"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={article.photo}
                                    alt={article.titre}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1 ">
                                <h3 className="text-xl font-bold text-cyan-600 mb-2">
                                    {article.titre}
                                </h3>
                                <p className="text-sm text-gray-800 line-clamp-4 flex-1">
                                    {article.paragraphe}
                                </p>
                                <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
                                    <span>{article.date}</span>
                                    <span>{article.auteur}</span>
                                </div>
                                <Link
                                    href={`/article/${article.id}`}
                                    className="mt-4 text-sm font-semibold text-cyan-600 hover:underline"
                                >
                                    Lire la suite...
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
