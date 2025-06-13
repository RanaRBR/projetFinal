import NavBarre from "@/components/navBarre/NavBarre";

export default function ArticleDetails({ article }) {
  return (
    <>
    <NavBarre />
    <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20 px-6 mt-45">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 transform transition duration-500">
        <h1 className="text-3xl font-bold text-cyan-600 mb-4">{article.titre}</h1>

        <img
          className="w-full h-96 object-cover rounded-xl mb-6"
          src={article.photo}
          alt={article.titre}
        />

        <div className="text-black text-base leading-relaxed whitespace-pre-line">
          {article.paragraphe}
        </div>

        <div className="mt-6 flex justify-between text-sm text-gray-700">
          <span><strong>Date :</strong> {article.date}</span>
          <span><strong>Auteur :</strong> {article.auteur}</span>
        </div>
      </div>
    </div>
    </>
  );
}


  