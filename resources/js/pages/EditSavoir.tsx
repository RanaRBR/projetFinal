import { useState } from 'react'
import { router } from '@inertiajs/react'

function EditSavoir({ savoir }) {
  const [values, setValues] = useState({
    titre: savoir.titre,
    info: savoir.info,
  })

  const modifier = (e) => {
    e.preventDefault()
    router.put(`/update/savoir/${savoir.id}`, values)
    router.get('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <form
        onSubmit={modifier}
        className="w-full max-w-2xl bg-gray-900 p-10 rounded-xl shadow-lg border border-cyan-600"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Modifier le savoir
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-300 mb-1 font-bold text-xl">Titre</label>
            <input
              type="text"
              name="titre"
              value={values.titre}
              onChange={(e) => setValues({ ...values, titre: e.target.value })}
              className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Titre du savoir"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-bold text-lg">Info</label>
            <textarea
              name="info"
              value={values.info}
              onChange={(e) => setValues({ ...values, info: e.target.value })}
              className="w-full px-4 py-2 h-40 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Texte explicatif..."
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="cursor-pointer px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditSavoir
