import { useState } from 'react'
import { usePage, router } from '@inertiajs/react'
import { MdDelete } from "react-icons/md"
import { GrEdit } from "react-icons/gr"

export default function SectionCommentaire({ article }) {
  const { auth, errors: pageErrors } = usePage().props

  const [commentaire, setCommentaire] = useState('')
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})

  const soumettre = (e) => {
    e.preventDefault()
    setProcessing(true)

    router.post(`/articles/${article.id}/commentaires`,
      { commentaire, name: auth.user?.name || '' },
      {
        preserveScroll: true,
        onSuccess: () => {
          setCommentaire('')
          setErrors({})
        },
        onError: (errors) => {
          setErrors(errors)
        },
        onFinish: () => {
          setProcessing(false)
        },
      }
    )
  }

  const supprimer = (id) => {
    {
      router.delete(`/commentaire/delete/${id}`, {
        preserveScroll: true,
      })
    }
  }

  const editer = (id) => {
    router.get(`/commentaire/edit/${id}`)
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-black">Commentaires</h2>

      {auth.user ? (
        <form onSubmit={soumettre} className="mb-6">
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
            className="w-full border rounded p-2 text-black"
            placeholder="Votre commentaire..."
          />
          {errors.commentaire && <p className="text-red-500">{errors.commentaire}</p>}

          <button
            type="submit"
            disabled={processing}
            className="mt-2 px-6 bg-cyan-600 text-white py-2 rounded-full cursor-pointer"
          >
            Poster
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Vous devez être connecté pour commenter.</p>
      )}

      <div className="space-y-4">
        {article.commentaires.length > 0 ? (
          article.commentaires.map((elem) => {
            console.log('DEBUG:', { authUserId: auth.user?.id, commentaireUserId: elem.user_id })

            return (
              <div key={elem.id} className="border-b pb-2 flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>{elem.name}</strong> a commenté :
                  </p>
                  <p className='text-black'>{elem.commentaire}</p>
                </div>

                {auth.user?.id === elem.user_id && (
                  <div className="flex space-x-2 mt-1">
                    <MdDelete
                      className="cursor-pointer text-red-400 hover:text-red-500"
                      size={20}
                      onClick={() => supprimer(elem.id)}
                      title="Supprimer"
                    />
                    <GrEdit
                      className="cursor-pointer text-cyan-600 hover:text-cyan-800"
                      size={20}
                      onClick={() => editer(elem.id)}
                      title="Modifier"
                    />
                  </div>
                )}
              </div>
            )
          })
        ) : (
          <p className='text-black'>Aucun commentaire pour le moment.</p>
        )}
      </div>
    </div>
  )
}
