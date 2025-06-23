import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateCategorie() {
    const [values, setValues] = useState({
        name: '',
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

        router.post('/categorie', values, {
            onFinish: () => setLoading(false),
            onSuccess: () => {
                router.visit('/dashboard'); 
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

            <form onSubmit={ajouter} className="relative z-10 w-full max-w-md rounded-lg bg-white p-8 text-black shadow-md">
                <h2 className="mb-6 text-center font-sans text-3xl font-semibold tracking-wide text-gray-900 uppercase">
                    Ajouter une catégorie
                </h2>

                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block font-medium text-black">
                        Nom de la catégorie
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={modifier}
                        placeholder="Nom de la catégorie"
                        className="w-full rounded-md border px-4 py-3"
                        required
                    />
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
