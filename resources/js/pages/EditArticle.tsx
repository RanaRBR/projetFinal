import NavBarre from '@/components/navBarre/NavBarre'
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function EditArticle({ article }) {
    const [values, setValues] = useState({
        titre: article.titre || '',
        paragraphe: article.paragraphe || '',
        photo: article.photo || '',
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
            onFinish: () => setLoading(false),
        })
    }

    const supprimer = () => {
        if (!confirm('Confirmer la suppression de cet article ?')) return

        setLoading(true)
        router.delete(`/delete/article/${article.id}`, {
            onFinish: () => setLoading(false),
        })
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-black px-4 py-20">
                <form
                    onSubmit={actualiser}
                    className="w-full max-w-3xl bg-gray-900 p-10 rounded-xl shadow-lg border border-cyan-600"
                >
                    <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
                        Modifier l’article
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-gray-300 mb-1 font-bold text-lg">Titre</label>
                            <input
                                type="text"
                                name="titre"
                                value={values.titre}
                                onChange={modifier}
                                className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="Titre de l’article"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-1 font-bold text-lg">Paragraphe</label>
                            <textarea
                                name="paragraphe"
                                rows="6"
                                value={values.paragraphe}
                                onChange={modifier}
                                className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="Contenu de l’article"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-1 font-bold text-lg">Image (url ou nom du fichier)</label>
                            <input
                                type="text"
                                name="photo"
                                value={values.photo}
                                onChange={modifier}
                                className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="photo.jpg"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
                        >
                            Mettre à jour
                        </button>

                        <button
                            type="button"
                            onClick={supprimer}
                            disabled={loading}
                            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all"
                        >
                            Supprimer
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
