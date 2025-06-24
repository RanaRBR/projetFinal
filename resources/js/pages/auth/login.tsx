// import { router } from '@inertiajs/react'
// import { useState } from 'react'
// import { FaEye } from 'react-icons/fa'
// import { GrFormViewHide } from 'react-icons/gr'

// export default function Login({ code }) {
//   const [values, setValues] = useState({ email: '', password: '' })
//   const [memoire, setMemoire] = useState(false)
//   const [Password, setPassword] = useState(false)

//   const submit = (e) => {
//     e.preventDefault()
//     router.post('/login', values)
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 font-mono">
//       <form
//         onSubmit={submit}
//         className="w-full max-w-md rounded-xl border border-cyan-600 bg-gray-900/70 backdrop-blur-md p-8 shadow-[0_0_20px_#06b6d4] hover:shadow-[0_0_30px_#22d3ee] transition duration-300"
//       >
//         <h2 className="mb-6 text-center text-3xl font-bold text-white uppercase tracking-wide">
//           Se connecter
//         </h2>

//         <label className="block mb-2 text-sm text-white tracking-wide" htmlFor="email">
//           Adresse email
//         </label>
//         <input
//           id="email"
//           type="email"
//           value={values.email}
//           onChange={e => setValues({ ...values, email: e.target.value })}
//           required
//           autoFocus
//           placeholder="coder@devmail.com"
//           className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-cyan-100 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none mb-6 transition"
//         />

//         <label className="block mb-2 text-sm text-white tracking-wide" htmlFor="password">
//           Mot de passe
//         </label>
//         <div className="relative mb-4">
//           <input
//             id="password"
//             type={Password ? 'text' : 'password'}
//             value={values.password}
//             onChange={e => setValues({ ...values, password: e.target.value })}
//             required
//             placeholder="••••••••"
//             className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 pr-12 text-cyan-100 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
//           />
//           <button
//             type="button"
//             onClick={() => setPassword(!Password)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-cyan-600"
//             tabIndex={-1}
//             aria-label={Password ? "Masquer le mot de passe" : "Afficher le mot de passe"}
//           >
//             {Password ? <GrFormViewHide size={20} /> : <FaEye size={18} />}
//           </button>
//         </div>

//         {code && (
//           <a href="#reset-password" className="block mb-4 text-xs text-white hover:underline">
//             Mot de passe oublié ?
//           </a>
//         )}

//         <label className="inline-flex items-center mb-6 text-sm text-white">
//           <input
//             type="checkbox"
//             checked={memoire}
//             onChange={e => setMemoire(e.target.checked)}
//             className="mr-2 h-4 w-4 rounded border-cyan-500 bg-gray-800 text-white focus:ring-2 focus:ring-cyan-500"
//           />
//           Se souvenir de moi
//         </label>

//         <button
//           type="submit"
//           className="w-full rounded-md bg-cyan-600 py-3 font-semibold text-white hover:bg-cyan-700 transition focus:ring-2 focus:ring-cyan-300 focus:outline-none"
//         >
//           Se connecter
//         </button>
//       </form>
//     </div>
//   )
// }

import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { GrFormViewHide } from 'react-icons/gr';

export default function Login({ code }) {
    const [values, setValues] = useState({ email: '', password: '' });
    const [memoire, setMemoire] = useState(false);
    const [Password, setPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        router.post('/login', values);
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black p-4 font-mono">
            <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-cyan-700 opacity-10 blur-3xl" />

            <form
                onSubmit={submit}
                className="relative z-10 w-full max-w-md rounded-xl border border-cyan-600 bg-gray-900/70 p-8 shadow-[0_0_30px_#06b6d4] backdrop-blur-md transition duration-300 hover:shadow-[0_0_40px_#22d3ee]"
            >
                <h2 className="mb-6 text-center text-3xl font-bold tracking-wide text-white uppercase">Se connecter</h2>

                <label className="mb-2 block text-sm tracking-wide text-white" htmlFor="email">
                    Adresse email
                </label>
                <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    placeholder="coder@devmail.com"
                    className="mb-6 w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 transition focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />

                <label className="mb-2 block text-sm tracking-wide text-white" htmlFor="password">
                    Mot de passe
                </label>
                <div className="relative mb-4">
                    <input
                        id="password"
                        type={Password ? 'text' : 'password'}
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 pr-12 text-gray-900 placeholder-gray-700 transition focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setPassword(!Password)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-700 hover:text-cyan-600"
                        tabIndex={-1}
                        aria-label={Password ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    >
                        {Password ? <GrFormViewHide size={20} /> : <FaEye size={18} />}
                    </button>
                </div>
{/* 
                <a href="/reset-password" className="mb-4 block text-xs text-white hover:underline">
                    Mot de passe oublié ?
                </a> */}

                <label className="mb-6 inline-flex items-center text-sm text-white">
                    <input
                        type="checkbox"
                        checked={memoire}
                        onChange={(e) => setMemoire(e.target.checked)}
                        className="mr-2 h-4 w-4 rounded border-cyan-500 bg-gray-800 text-white focus:ring-2 focus:ring-cyan-500"
                    />
                    Se souvenir de moi
                </label>

                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-md bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
                >
                    Se connecter
                </button>

                <div className="mt-6 text-center text-sm text-white">
                    Pas encore de compte ?{' '}
                    <Link href="/register" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                        Inscrivez-vous
                    </Link>
                </div>
            </form>
        </div>
    );
}
