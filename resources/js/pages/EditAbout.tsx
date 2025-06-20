import { router } from "@inertiajs/react"
import { useState } from "react"

function EditAbout({ about }) {
    const [values, setValues] = useState({
        titre: about.titre,
        texte: about.texte,
        image: about.image,
    })

    const modifier = (e) => {
        e.preventDefault()
        router.put(`/update/about/${about.id}`, values)
        router.get('/')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black p-4">
            <form
                onSubmit={modifier}
                className="w-full max-w-2xl bg-gray-900 p-10 rounded-xl shadow-lg border border-cyan-600"
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
                    Modifier la section About
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block text-gray-300 mb-1 font-bold text-lg">Titre</label>
                        <input
                            type="text"
                            name="titre"
                            value={values.titre}
                            onChange={(e) => setValues({ ...values, titre: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez le titre"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1 font-bold text-lg">Texte</label>
                        <input
                            type="text"
                            name="texte"
                            value={values.texte}
                            onChange={(e) => setValues({ ...values, texte: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez le texte"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1 font-bold text-lg">Image</label>
                        <input
                            type="text"
                            name="image"
                            value={values.image}
                            onChange={(e) => setValues({ ...values, image: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="nom-du-fichier.jpg"
                        />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        className="cursor-pointer px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
                    >
                        Enregistrer les modifications
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditAbout
