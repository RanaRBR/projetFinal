import { Link, router } from '@inertiajs/react'

export default function Dashboard({ tags, categories, roles, articles }) {
  const supprimer = (e, item, id) => {
    e.preventDefault()
    router.delete(`/${item}/${id}`, {
      onSuccess: () => router.visit('/dashboard'),
    })
  }
const sections = [
  { titre: 'articles', items: articles ?? [] },
  { titre: 'tags', items: tags ?? [] },
  { titre: 'catégories', items: categories ?? [] },
  { titre: 'rôles', items: roles ?? [] },
]


  return (
    <section className="body-font relative overflow-hidden bg-white text-gray-800 min-h-screen p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-medium text-cyan-600 uppercase" style={{ fontFamily: "'Merriweather', sans-serif" }}>
            tableau de bord
          </h1>
          <Link href="/" className="mt-2 inline-block text-lg text-cyan-600 hover:underline">
            Retour
          </Link>
        </div>

        {sections.map((section) => (
          <div key={section.titre} className="mb-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize">{section.titre}</h2>
              <Link
                href={`/${section.titre}/create`}
                className="rounded bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                créer
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow hover:shadow-md transition-all">
                  <p className="mb-4 font-semibold text-gray-800">
                    {item.titre || item.nom || item.name || item.label}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/${section.titre}/${item.id}/edit`}
                      className="text-sm text-cyan-600 hover:underline"
                    >
                      modifier
                    </Link>
                    <button
                      onClick={(e) => supprimer(e, section.titre, item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
