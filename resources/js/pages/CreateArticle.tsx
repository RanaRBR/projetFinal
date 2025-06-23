import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateArticle() {
    const [values, setValues] = useState({
        titre: '',
        paragraphe: '',
        photo: '',
        date: '',
        auteur: '',
        local: 'local',
    });

    const [loading, setLoading] = useState(false);

    const modifier = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const ajouter = (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        router.post('/articles', values, {
            onFinish: () => setLoading(false),
            onSuccess: () => {
                router.visit('/articles');
            },
            onError: () => {
            },
        });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
            <div
                className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-none"
                style={{ backgroundImage: "url('/images/form2.jpg')" }}
            />

            <form onSubmit={ajouter} className="relative z-10 w-full max-w-2xl rounded-lg bg-white p-8 text-black shadow-md">
                <h2 className="mb-6 text-center font-sans text-3xl font-semibold tracking-wide text-gray-900 uppercase">Ajouter un article</h2>

                <div className="mb-4">
                    <label htmlFor="titre" className="mb-2 block font-medium text-black">
                        Titre
                    </label>
                    <input
                        id="titre"
                        type="text"
                        name="titre"
                        value={values.titre}
                        onChange={modifier}
                        placeholder="Titre de l’article"
                        className="w-full rounded-md border px-4 py-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="paragraphe" className="mb-2 block font-medium text-gray-700">
                        Paragraphe
                    </label>
                    <textarea
                        id="paragraphe"
                        name="paragraphe"
                        rows={6}
                        value={values.paragraphe}
                        onChange={modifier}
                        placeholder="Contenu de l’article"
                        className="w-full resize-none rounded-md border px-4 py-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="photo" className="mb-2 block font-medium text-gray-700">
                        Image (url ou nom du fichier)
                    </label>
                    <input
                        id="photo"
                        type="text"
                        name="photo"
                        value={values.photo}
                        onChange={modifier}
                        placeholder="photo.jpg"
                        className="w-full rounded-md border px-4 py-3"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block font-medium text-gray-700">
                        Date
                    </label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={values.date}
                        onChange={modifier}
                        className="w-full rounded-md border px-4 py-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="auteur" className="mb-2 block font-medium text-gray-700">
                        Auteur
                    </label>
                    <input
                        id="auteur"
                        type="text"
                        name="auteur"
                        value={values.auteur}
                        onChange={modifier}
                        className="w-full rounded-md border px-4 py-3"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="local" className="mb-2 block font-medium text-gray-700">
                        Localisation
                    </label>
                    <select id="local" name="local" value={values.local} onChange={modifier} className="w-full rounded-md border px-3 py-3">
                        <option value="local">Près de chez vous</option>
                        <option value="etranger">À l’étranger</option>
                    </select>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer rounded-md bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
                    >
                        {loading ? 'Chargement...' : 'Ajouter'}
                    </button>
                </div>
            </form>
        </div>
    );
}
