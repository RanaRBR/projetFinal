import { router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function EditCategorie({ categorie }) {
  const [values, setValues] = useState({
    name: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categorie) {
      setValues({
        name: categorie.name || '',
      });
    }
  }, [categorie]);

  const modifier = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const mettreAJour = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    router.put(`/categories/${categorie.id}`, values, {
      onFinish: () => setLoading(false),
      onSuccess: () => {
        router.visit('/dashboard');
      },
    });
  };

  const btn = () => {
    if (loading) {
      return (
        <button
          type="submit"
          disabled
          className="w-full cursor-not-allowed rounded-md bg-cyan-600 py-3 font-semibold text-white opacity-50"
        >
          Chargement...
        </button>
      );
    }

    return (
      <button
        type="submit"
        className="w-full cursor-pointer rounded-md bg-cyan-600 py-3 font-semibold text-white hover:bg-cyan-700"
      >
        Mettre à jour
      </button>
    );
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-none"
        style={{ backgroundImage: "url('/images/form2.jpg')" }}
      />

      <form
        onSubmit={mettreAJour}
        className="relative z-10 w-full max-w-md rounded-lg bg-white p-8 text-black shadow-md"
      >
        <h2 className="mb-6 text-center font-sans text-3xl font-semibold tracking-wide text-gray-900 uppercase">
          Modifier la catégorie
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

        <div className="text-center">{btn()}</div>
      </form>
    </div>
  );
}
