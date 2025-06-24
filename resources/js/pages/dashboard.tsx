// import { Link, router } from '@inertiajs/react';

// export default function Dashboard({ tags, categories, roles, articles }) {
// const supprimer = (e, item, id) => {
//     e.preventDefault();
//     router.delete(`/delete/role/${id}`, {
//         onSuccess: () => router.visit('/dashboard'),
//     });
// };

//     const creerTag = (e) => {
//         e.preventDefault();
//         if (articles && articles.length > 0) {
//             router.visit(`/tags/create?article_id=${articles[0].id}`);
//         } else {
//             router.visit('/tags/create');
//         }
//     };

//     const sections = [
//         { titre: 'articles', items: articles ?? [] },
//         { titre: 'tags', items: tags ?? [] },
//         { titre: 'categories', items: categories ?? [] },
//         { titre: 'roles', items: roles ?? [] },
//     ];

//     return (
//         <section className="min-h-screen bg-gray-50 p-10">
//             <div className="mx-auto max-w-7xl">
//                 <section className="mb-14 text-center">
//                     <h1 className="text-5xl font-extrabold tracking-wide text-cyan-700 uppercase" style={{ fontFamily: "'Merriweather', serif" }}>
//                         tableau de bord
//                     </h1>
//                     <Link
//                         href="/"
//                         className="mt-3 text-2xl font-semibold tracking-wider text-orange-400 underline transition-all duration-300 hover:text-orange-500"
//                     >
//                         Retour
//                     </Link>
//                 </section>

//                 {sections.map(({ titre, items }) => (
//                     <section key={titre} className="mb-20">
//                         <div className="mb-8 flex items-center justify-between">
//                             <h2 className="text-3xl font-semibold tracking-wide text-gray-800 capitalize">{titre}</h2>
//                             {titre === 'tags' ? (
//                                 <button
//                                     onClick={creerTag}
//                                     className="rounded-md bg-cyan-600 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-cyan-500"
//                                 >
//                                     créer
//                                 </button>
//                             ) : (
//                                 <Link
//                                     href={`/${titre}/create`}
//                                     className="rounded-md bg-cyan-600 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-cyan-500"
//                                 >
//                                     créer
//                                 </Link>
//                             )}
//                         </div>

//                         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                             {items.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
//                                 >
//                                     <h3 className="mb-5 text-lg font-semibold tracking-tight text-gray-900">
//                                         {item.titre || item.nom || item.name || item.label}
//                                     </h3>

//                                     <div className="flex justify-between gap-6 text-sm font-medium">
//                                         <Link href={`/edit/role/${item.id}`} className="text-cyan-600 transition hover:text-cyan-600">
//                                             modifier
//                                         </Link>

//                                         {titre === 'articles' && (
//                                             <Link
//                                                 href={`/tags/create?article_id=${item.id}`}
//                                                 className="text-emerald-600 transition hover:text-emerald-800"
//                                             >
//                                                 ajouter un tag
//                                             </Link>
//                                         )}

//                                         <button
//                                             onClick={(e) => supprimer(e, titre, item.id)}
//                                             className="cursor-pointer text-red-400 transition hover:text-red-600"
//                                         >
//                                             supprimer
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 ))}
//             </div>
//         </section>
//     );
// }

// import { Link, router } from '@inertiajs/react';

// export default function Dashboard({ tags, categories, roles, articles }) {
//     const supprimer = (e, element , id) => {
//         e.preventDefault();
//         router.delete(`/${element}/${id}`, {
//             onSuccess: () => router.visit('/dashboard'),
//         });
//     };
//     const creerTag = (e) => {
//         e.preventDefault();
//         if (articles && articles.length > 0) {
//             router.visit(`/tags/create?article_id=${articles[0].id}`);
//         } else {
//             router.visit('/tags/create');
//         }
//     };

//     const editUrl = (titre, id) => {
//         switch (titre) {
//             case 'articles':
//                 return `/edit/article/${id}`;
//             case 'tags':
//                 return `/edit/tag/${id}`;
//             case 'categories':
//                 return `/edit/category/${id}`;
//             case 'roles':
//                 return `/edit/role/${id}`;
//             default:
//                 return '#';
//         }
//     };

//     const sections = [
//         { titre: 'articles', items: articles ?? [] },
//         { titre: 'tags', items: tags ?? [] },
//         { titre: 'categories', items: categories ?? [] },
//         { titre: 'roles', items: roles ?? [] },
//     ];

//     return (
//         <section className="min-h-screen bg-gray-50 p-12 font-sans">
//             <div className="mx-auto max-w-7xl">
//                 <header className="mb-14 text-center">
//                     <h1
//                         className="font-serif text-5xl font-semibold tracking-wide text-cyan-600 uppercase"
//                         style={{ fontFamily: "'Merriweather', serif" }}
//                     >
//                         tableau de bord
//                     </h1>
//                     <Link href="/" className="mt-4 inline-block text-lg font-medium text-orange-500 underline transition hover:text-orange-600">
//                         Retour au blog
//                     </Link>
//                 </header>

//                 {sections.map(({ titre, items }) => (
//                     <section key={titre} className="mb-20">
//                         <div className="mb-8 flex items-center justify-between border-b border-gray-300 pb-3">
//                             <h2
//                                 className="font-serif text-3xl font-semibold text-gray-800 capitalize"
//                                 style={{ fontFamily: "'Merriweather', serif" }}
//                             >
//                                 {titre}
//                             </h2>
//                             {titre === 'tags' ? (
//                                 <button
//                                     onClick={creerTag}
//                                     className="rounded-2xl bg-cyan-600 px-8 py-2 font-semibold text-white shadow-md transition hover:bg-cyan-700"
//                                 >
//                                     créer
//                                 </button>
//                             ) : (
//                                 <Link
//                                     href={`/${titre}/create`}
//                                     className="rounded-2xl bg-cyan-600 px-8 py-2 font-semibold text-white shadow-md transition hover:bg-cyan-700"
//                                 >
//                                     créer
//                                 </Link>
//                             )}
//                         </div>

//                         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                             {items.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="relative rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl"
//                                 >
//                                     <h3
//                                         className="mb-6 truncate font-serif text-lg font-semibold text-gray-900"
//                                         style={{ fontFamily: "'Merriweather', serif" }}
//                                     >
//                                         {item.titre || item.nom || item.name || item.label}
//                                     </h3>

//                                     <div className="flex justify-between gap-6 text-sm font-medium text-gray-700">
//                                         <Link href={`/${titre}/${item.id}/edit`} className="text-cyan-600 transition hover:text-cyan-700">
//                                             modifier
//                                         </Link>

//                                         {titre === 'articles' && (
//                                             <Link
//                                                 href={`/tags/create?article_id=${item.id}`}
//                                                 className="text-emerald-600 transition hover:text-emerald-700"
//                                             >
//                                                 ajouter un tag
//                                             </Link>
//                                         )}

//                                         <button onClick={(e) => supprimer(e, titre, item.id)} className="text-red-500 transition hover:text-red-600">
//                                             supprimer
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 ))}
//             </div>
//         </section>
//     );
// }






// import { Link, router } from '@inertiajs/react';

// export default function Dashboard({ tags, categories, roles, articles }) {
//     const supprimer = (e, element, id) => {
//         e.preventDefault();
//         router.delete(`/${element}/${id}`, {
//             onSuccess: () => router.visit('/dashboard'),
//         });
//     };

//     const creerTag = (e) => {
//         e.preventDefault();
//         if (articles && articles.length > 0) {
//             router.visit(`/tags/create?article_id=${articles[0].id}`);
//         } else {
//             router.visit('/tags/create');
//         }
//     };

//     const sections = [
//         { titre: 'articles', items: articles ?? [] },
//         { titre: 'tags', items: tags ?? [] },
//         { titre: 'categories', items: categories ?? [] },
//         { titre: 'roles', items: roles ?? [] },
//     ];

//     return (
//         <section className="min-h-screen bg-gray-50 p-12 font-sans">
//             <div className="mx-auto max-w-7xl">
//                 <header className="mb-14 text-center">
//                     <h1
//                         className="font-serif text-5xl font-semibold tracking-wide text-cyan-600 uppercase"
//                         style={{ fontFamily: "'Merriweather', serif" }}
//                     >
//                         tableau de bord
//                     </h1>
//                     <Link
//                         href="/"
//                         className="mt-4 inline-block text-lg font-medium text-orange-500 underline transition hover:text-orange-600"
//                     >
//                         Retour au blog
//                     </Link>
//                 </header>

//                 {sections.map(({ titre, items }) => (
//                     <section key={titre} className="mb-20">
//                         <div className="mb-8 flex items-center justify-between border-b border-gray-300 pb-3">
//                             <h2
//                                 className="font-serif text-3xl font-semibold text-gray-800 capitalize"
//                                 style={{ fontFamily: "'Merriweather', serif" }}
//                             >
//                                 {titre}
//                             </h2>

//                             {titre === 'tags' ? (
//                                 <button
//                                     onClick={creerTag}
//                                     className="rounded-2xl bg-cyan-600 px-8 py-2 font-semibold text-white shadow-md transition hover:bg-cyan-700"
//                                 >
//                                     créer
//                                 </button>
//                             ) : (
// <Link
//   href={titre === 'articles' ? '/create/article' : titre === 'roles' ? '/create/role' : `/${titre}/create`}
//   className="rounded-2xl bg-cyan-600 px-8 py-2 font-semibold text-white shadow-md transition hover:bg-cyan-700"
// >
//   créer
// </Link>

//                             )}
//                         </div>

//                         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                             {items.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="relative rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl"
//                                 >
//                                     <h3
//                                         className="mb-6 truncate font-serif text-lg font-semibold text-gray-900"
//                                         style={{ fontFamily: "'Merriweather', serif" }}
//                                     >
//                                         {item.titre || item.nom || item.name || item.label}
//                                     </h3>

//                                     <div className="flex justify-between gap-6 text-sm font-medium text-gray-700">
//                                         <Link
//                                             href={`/${titre}/${item.id}/edit`}
//                                             className="text-cyan-600 transition hover:text-cyan-700"
//                                         >
//                                             modifier
//                                         </Link>

//                                         {titre === 'articles' && (
//                                             <Link
//                                                 href={`/tags/create?article_id=${item.id}`}
//                                                 className="text-emerald-600 transition hover:text-emerald-700"
//                                             >
//                                                 ajouter un tag
//                                             </Link>
//                                         )}

//                                         <button
//                                             onClick={(e) => supprimer(e, titre, item.id)}
//                                             className="text-red-500 transition hover:text-red-600"
//                                         >
//                                             supprimer
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 ))}
//             </div>
//         </section>
//     );
// }


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
