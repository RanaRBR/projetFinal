import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function EditArticle({ article }) {
  const [values, setValues] = useState({
    titre: article.titre || '',
    paragraphe: article.paragraphe || '',
    photo: article.photo || '',
    date: article.date || '',
    auteur: article.auteur || '',
    local: article.local || '',
  })

  const [loading, setLoading] = useState(false)

  const modifier = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const actualiser = (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    router.put(`/update/article/${article.id}`, values, {
      onSuccess: () => {
        router.visit('/articles') 
      },
      onFinish: () => setLoading(false),
    })
  }

  const supprimer = () => {
    router.delete(`/delete/article/${article.id}`, {
      onSuccess: () => {
        router.visit('/articles') 
      },
      onFinish: () => setLoading(false),
    })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-none scale-110"
        style={{ backgroundImage: "url('/images/form2.jpg')" }}
      />

      <form
        onSubmit={actualiser}
        className="relative z-10 w-full max-w-2xl bg-white text-black rounded-lg shadow-md p-8"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center uppercase tracking-wide font-sans">
          Modifier l’article
        </h2>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Titre</label>
          <input
            type="text"
            name="titre"
            value={values.titre}
            onChange={modifier}
            placeholder="Titre de l’article"
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Paragraphe</label>
          <textarea
            name="paragraphe"
            rows="6"
            value={values.paragraphe}
            onChange={modifier}
            placeholder="Contenu de l’article"
            className="w-full px-4 py-3 border rounded-md resize-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Image (url ou nom du fichier)</label>
          <input
            type="text"
            name="photo"
            value={values.photo}
            onChange={modifier}
            placeholder="photo.jpg"
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={modifier}
            className="w-full px-4 py-3 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Auteur</label>
          <input
            type="text"
            name="auteur"
            value={values.auteur}
            onChange={modifier}
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Localisation</label>
          <input
            type="text"
            name="local"
            value={values.local}
            onChange={modifier}
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>

        <div className="flex justify-between gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-black font-semibold py-3 rounded-md transition cursor-pointer"
          >
            Mettre à jour
          </button>

          <button
            type="button"
            onClick={supprimer}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-black font-semibold py-3 rounded-md transition cursor-pointer"
          >
            Supprimer
          </button>
        </div>
      </form>
    </div>
  )
}
