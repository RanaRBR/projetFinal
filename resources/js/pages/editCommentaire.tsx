import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function EditCommentaire({ commentaire }) {
  const [value, setValue] = useState(commentaire.commentaire)

  const changer = (e) => {
    setValue(e.target.value)
  }

  const soumettre = (e) => {
    e.preventDefault()
    router.put(`/commentaire/update/${commentaire.id}`, { commentaire: value })
    router.get(`/article/${commentaire.article_id}#commentaires`)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-none scale-110"
        style={{ backgroundImage: "url('/images/form2.jpg')" }}
      />

      <form
        onSubmit={soumettre}
        className="relative z-10 w-full max-w-lg bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center uppercase tracking-wide font-sans">
          Modifier le commentaire
        </h2>

        <label
          htmlFor="commentaire"
          className="block text-gray-700 font-medium mb-2"
        >
          Commentaire
        </label>
        <textarea
          id="commentaire"
          value={value}
          onChange={changer}
          rows={6}
          placeholder="Écrivez votre commentaire ici..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none text-gray-800 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition"
        />

        <button
          type="submit"
          className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-md transition cursor-pointer"
        >
          Enregistrer
        </button>
      </form>
    </div>
  )
}
