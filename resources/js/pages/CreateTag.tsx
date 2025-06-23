import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function CreateTag() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const soumettre = (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    router.post('/tags', { name }, {
      onSuccess: () => {
        router.visit('/dashboard')
      },
      onFinish: () => setLoading(false),
    })
  }

  return (
    <div className="relative overflow-hidden px-4 py-12 flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-none"
        style={{ backgroundImage: "url('/images/form2.jpg')" }}
      />

      <form
        onSubmit={soumettre}
        className="relative z-10 text-black w-full max-w-xl bg-white p-8 rounded-lg shadow-md border border-cyan-500"
      >
        <h2 className="text-2xl font-bold text-center text-cyan-600 mb-6">
          Créer un tag
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nom du tag</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition cursor-pointer"
        >
          Enregistrer
        </button>
      </form>
    </div>
  )
}
