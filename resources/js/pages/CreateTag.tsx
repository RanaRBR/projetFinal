import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateTag({ article_id }) {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const soumettre = (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        router.post(
            '/tags',
            { name, article_id },
            {
                onSuccess: () => router.visit(`/articles/${article_id}`),
                onFinish: () => setLoading(false),
            },
        );
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 p-4 px-4 py-12">
            <div
                className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-none"
                style={{ backgroundImage: "url('/images/form2.jpg')" }}
            />

            <form onSubmit={soumettre} className="relative z-10 w-full max-w-xl rounded-lg border border-cyan-500 bg-white p-8 text-black shadow-md">
                <h2 className="mb-6 text-center text-2xl font-bold text-cyan-600">Créer un tag</h2>

                <div className="mb-4">
                    <label className="mb-2 block font-medium text-gray-700">Nom du tag</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer rounded-md bg-cyan-600 py-2 font-semibold text-white transition hover:bg-cyan-700"
                >
                    Enregistrer
                </button>
            </form>
        </div>
    );
}
