import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function Register() {
  const [values, setValues] = useState({
    name: '',
    date: '',
    age: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const ajouter = (e) => {
    e.preventDefault()
    router.post('/register', values)
  }

  const changer = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black font-mono overflow-hidden p-4">
      {/* néons en arrière-plan */}
      <div className="absolute -top-20 -right-10 w-60 h-60 bg-cyan-700 opacity-10 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-cyan-500 opacity-10 blur-3xl rounded-full" />
      
      <form
        onSubmit={ajouter}
        className="relative z-10 w-full max-w-2xl rounded-xl border border-cyan-600 bg-gray-900/80 backdrop-blur-lg p-10 shadow-[0_0_30px_#06b6d4] hover:shadow-[0_0_40px_#22d3ee] transition duration-300"
      >
        <h1 className="mb-10 text-center text-3xl font-bold uppercase tracking-wide text-cyan-400">
          Crée ton compte
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold text-cyan-200">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={changer}
              placeholder="Ton nom"
              required
              className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="age" className="block mb-1 text-sm font-semibold text-cyan-200">Âge</label>
            <input
              id="age"
              name="age"
              type="number"
              value={values.age}
              onChange={changer}
              placeholder="Ton âge"
              required
              className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="date" className="block mb-1 text-sm font-semibold text-cyan-200">Date</label>
            <input
              id="date"
              name="date"
              type="text"
              value={values.date}
              onChange={changer}
              placeholder="JJ/MM/AAAA"
              required
              className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-cyan-200">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={changer}
              placeholder="dev@mail.com"
              required
              className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-semibold text-cyan-200">Mot de passe</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={changer}
              placeholder="••••••••"
              required
              className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password_confirmation" className="block mb-1 text-sm font-semibold text-cyan-200">Confirme mot de passe</label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              value={values.password_confirmation}
              onChange={changer}
              placeholder="Confirmation"
              required
              className="w-full rounded-md border border-cyan-500 bg-white px-4 py-2 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            type="submit"
            className="w-full md:w-1/2 rounded-lg bg-cyan-600 py-3 font-semibold text-white hover:bg-cyan-700 transition focus:ring-2 focus:ring-cyan-300 focus:outline-none cursor-pointer"
          >
            Créer un compte
          </button>
        </div>
      </form>
    </div>
  )
}
