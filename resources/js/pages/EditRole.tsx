import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function EditRole({ role }) {
    const [values, setValues] = useState({
        name: role.name || '',
        email: role.email || '',
        password: role.password || '',
    });

    const [loading, setLoading] = useState(false);

    const modifier = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const actualiser = (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        router.put(`/update/role/${role.id}`, values, {
            onSuccess: () => {
                router.visit('/roles');
            },
            onFinish: () => setLoading(false),
        });
    };

    const supprimer = () => {
        router.delete(`/delete/role/${role.id}`, {
            onSuccess: () => {
                router.visit('/roles');
            },
            onFinish: () => setLoading(false),
        });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
            <div
                className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-none"
                style={{ backgroundImage: "url('/images/form2.jpg')" }}
            />

            <form onSubmit={actualiser} className="relative z-10 w-full max-w-2xl rounded-lg bg-white p-8 text-black shadow-md">
                <h2 className="mb-6 text-center font-sans text-3xl font-semibold tracking-wide text-gray-900 uppercase">Modifier le rôle</h2>

                <div className="mb-4">
                    <label className="mb-2 block font-medium text-black">Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={modifier}
                        placeholder="nom"
                        className="w-full rounded-md border px-4 py-3"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={modifier}
                        placeholder="Email"
                        className="w-full rounded-md border px-4 py-3"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block font-medium text-gray-700">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={modifier}
                        placeholder="mot de passe"
                        className="w-full rounded-md border px-4 py-3"
                    />
                </div>

                <div className="flex justify-between gap-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer rounded-md bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700"
                    >
                        Mettre à jour
                    </button>

                    <button
                        type="button"
                        onClick={supprimer}
                        disabled={loading}
                        className="w-full cursor-pointer rounded-md bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                        Supprimer
                    </button>
                </div>
            </form>
        </div>
    );
}
