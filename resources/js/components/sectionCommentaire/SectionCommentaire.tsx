import { useForm } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function SectionCommentaire({ article }) {
  const { auth } = usePage().props

  const { data, setData, post, processing, reset, errors } = useForm({
    commentaire: '',
    name: auth.user?.name || '',
  })

  const soumettre = (e) => {
    e.preventDefault()
    post(`/articles/${article.id}/commentaires`, {
      preserveScroll: true,
      onSuccess: () => reset(),
    })
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Commentaires</h2>

      {auth.user ? (
        <form onSubmit={soumettre} className="mb-6">
          <textarea
            value={data.commentaire}
            onChange={(e) => setData('commentaire', e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Votre commentaire..."
          />
          {errors.commentaire && <p className="text-red-500">{errors.commentaire}</p>}

          <button
            type="submit"
            disabled={processing}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Poster
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Vous devez être connecté pour commenter.</p>
      )}

      <div className="space-y-4">
        {article.commentaires.length > 0 ? (
          article.commentaires.map((elem) => (
            <div key={elem.id} className="border-b pb-2">
              <p className="text-sm text-gray-700">
                <strong>{elem.name}</strong> a commenté :
              </p>
              <p>{elem.commentaire}</p>
            </div>
          ))
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
      </div>
    </div>
  )
}
