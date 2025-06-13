import { Link } from "@inertiajs/react";

export default function Articles({ articles }) {
  
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-red-300 to-yellow-200 py-20">
            <div className="gap-15 space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:px-4 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="max-w-sm transform rounded-xl bg-white px-6 pt-6 pb-2 shadow-lg transition duration-500 hover:scale-105"
                    >
                        <h3 className="mb-3 text-xl font-bold text-cyan-600">{article.titre}</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src={article.photo} alt={article.titre} />
                        </div>
                        <p className="mt-4 line-clamp-4 text-sm text-black">{article.paragraphe}</p>
                        <div className="my-4 flex items-center justify-between text-sm text-black">
                            <span>{article.date}</span>
                            <span>{article.auteur}</span>
                        </div>
                        <Link href={`/article/${article.id}`} className="text-sm font-semibold text-cyan-600 hover:underline">
                            Lire la suite...
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
