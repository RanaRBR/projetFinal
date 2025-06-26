import { Link, router } from '@inertiajs/react';

export default function Dashboard({ tags, categories, roles, articles }) {
    const supprimer = (e, element, id) => {
        e.preventDefault();
        router.delete(`/${element}/${id}`, {
            onSuccess: () => router.visit('/dashboard'),
        });
    };

    const creerTag = (e) => {
        e.preventDefault();
        if (articles && articles.length > 0) {
            router.visit(`/tags/create?article_id=${articles[0].id}`);
        } else {
            router.visit('/tags/create');
        }
    };

    const sections = [
        { titre: 'articles', items: articles ?? [] },
        { titre: 'tags', items: tags ?? [] },
        { titre: 'categories', items: categories ?? [] },
        { titre: 'roles', items: roles ?? [] },
    ];

    return (
        <section className="min-h-screen bg-gray-50 p-12 font-sans">
            <div className="mx-auto max-w-7xl">
                <header className="mb-14 text-center">
                    <h1
                        className="font-serif text-5xl font-semibold tracking-wide text-cyan-600 uppercase"
                        style={{ fontFamily: "'Merriweather', serif" }}
                    >
                        tableau de bord
                    </h1>
                    <Link
                        href="/"
                        className="mt-4 inline-block text-lg font-medium text-orange-500 underline transition hover:text-orange-600"
                    >
                        Retour au blog
                    </Link>
                </header>

                {sections.map(({ titre, items }) => (
                    <section key={titre} className="mb-20">
                        <div className="mb-8 flex items-center justify-between border-b border-gray-300 pb-3">
                            <h2
                                className="font-serif text-3xl font-semibold text-gray-800 capitalize"
                                style={{ fontFamily: "'Merriweather', serif" }}
                            >
                                {titre}
                            </h2>

                            {titre === 'articles' ? (
                                <Link
                                    href="/create/article"
                                    className="rounded-2xl bg-cyan-600 px-8 py-2 font-semibold text-white shadow-md transition hover:bg-cyan-700"
                                >
                                    créer
                                </Link>
                            ) : null}
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl"
                                >
                                    <h3
                                        className="mb-6 truncate font-serif text-lg font-semibold text-gray-900"
                                        style={{ fontFamily: "'Merriweather', serif" }}
                                    >
                                        {item.titre || item.nom || item.name || item.label}
                                    </h3>

                                    <div className="flex justify-between gap-6 text-sm font-medium text-gray-700">
                                        <Link
                                            href={`/${titre}/${item.id}/edit`}
                                            className="text-cyan-600 transition hover:text-cyan-700"
                                        >
                                            modifier
                                        </Link>

                                        {titre === 'articles' && (
                                            <Link
                                                href={`/tags/create?article_id=${item.id}`}
                                                className="text-emerald-600 transition hover:text-emerald-700"
                                            >
                                                ajouter un tag
                                            </Link>
                                        )}

                                        <button
                                            onClick={(e) => supprimer(e, titre, item.id)}
                                            className="text-red-500 transition hover:text-red-600"
                                        >
                                            supprimer
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}


