// import { useState } from 'react'
// import { router } from '@inertiajs/react'

// export default function CreateRole() {
//   const [values, setValues] = useState({
//     nom: '',
//     email: '',
//     password: '',
//   })

//   const [loading, setLoading] = useState(false)

//   const modifier = (e) => {
//     const { name, value } = e.target
//     setValues({ ...values, [name]: value })
//   }

//   const creer = (e) => {
//     e.preventDefault()
//     if (loading) return

//     setLoading(true)
//     router.post('/role', values, {
//       onSuccess: () => {
//         router.visit('/role')
//       },
//       onFinish: () => setLoading(false),
//     })
//   }

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-none scale-110"
//         style={{ backgroundImage: "url('/images/form2.jpg')" }}
//       />

//       <form
//         onSubmit={creer}
//         className="relative z-10 w-full max-w-2xl bg-white text-black rounded-lg shadow-md p-8"
//       >
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center uppercase tracking-wide font-sans">
//           Créer un rôle
//         </h2>

//         <div className="mb-4">
//           <label className="block text-black font-medium mb-2">Nom</label>
//           <input
//             type="text"
//             name="nom"
//             value={values.nom}
//             onChange={modifier}
//             placeholder="nom"
//             className="w-full px-4 py-3 border rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Email</label>
//           <textarea
//             name="email"
//             rows="6"
//             value={values.email}
//             onChange={modifier}
//             placeholder="email"
//             className="w-full px-4 py-3 border rounded-md resize-none"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Password</label>
//           <input
//             type="text"
//             name="password"
//             value={values.password}
//             onChange={modifier}
//             placeholder="mot de passe"
//             className="w-full px-4 py-3 border rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-cyan-600 hover:bg-cyan-700 text-black font-semibold py-3 rounded-md transition cursor-pointer"
//         >
//           Créer
//         </button>
//       </form>
//     </div>
//   )
// }
