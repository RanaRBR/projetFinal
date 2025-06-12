export default function Articles({ articles }) {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-15 space-y-4 md:space-y-0">
        {articles.map((article, index) => (
          <div
            key={index}
            className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <h3 className="mb-3 text-xl font-bold text-black">{article.titre}</h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src={article.photo}
                alt={article.titre}
              />
            </div>
            <p className="mt-4 text-black text-sm line-clamp-4">{article.paragraphe}</p>
            <div className="my-4 flex justify-between items-center text-black text-sm">
              <span>{article.date}</span>
              <span>{article.auteur}</span>
            </div>
            <a
              href={`/article/${article.id}`}
              className="text-cyan-600 text-sm font-semibold hover:underline"
            >
              Lire la suite...
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
