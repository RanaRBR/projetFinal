import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function EditTag({ tag, article_id }) {
  const [name, setName] = useState(tag.name || '')
  const [loading, setLoading] = useState(false)

  const modifier = (e) => {
    setName(e.target.value)
  }

  const actualiser = (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    router.put(`/tags/${tag.id}`, { name }, {
      onSuccess: () => {
        if (article_id) {
          router.visit(`/articles/${article_id}`)
        } else {
          router.visit('/articles')
        }
      },
      onFinish: () => setLoading(false),
    })
  }

  const supprimer = () => {
    router.delete(`/tags/${tag.id}`, {
      onSuccess: () => {
        router.visit('/tags')
      },
      onFinish: () => setLoading(false),
    })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-none"
        style={{ backgroundImage: "url('/images/form2.jpg')" }}
      />

      <form
        onSubmit={actualiser}
        className="relative z-10 w-full max-w-md bg-white p-8 rounded shadow text-black"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Modifier le tag</h2>

        <input
          type="text"
          value={name}
          onChange={modifier}
          placeholder="Nom du tag"
          className="w-full mb-6 px-3 py-2 border rounded"
          required
        />

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition cursor-pointer"
          >
            Mettre à jour
          </button>

          <button
            type="button"
            onClick={supprimer}
            disabled={loading}
            className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition cursor-pointer"
          >
            Supprimer
          </button>
        </div>
      </form>
    </div>
  )
}
