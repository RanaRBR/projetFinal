// import { Link, router } from '@inertiajs/react';
// import { FaUserAltSlash } from "react-icons/fa";
// import { FaUser } from 'react-icons/fa6';
// import { FiCamera, FiHome, FiInfo, FiMail, FiMessageSquare } from 'react-icons/fi';

// function LogoutButton() {
//   function deconnexion(e) {
//     e.preventDefault();
//     router.post('/logout');
//   }

//   return (
//     <button
//       onClick={deconnexion}
//       className="cursor-pointer text-white transition hover:text-cyan-600"
//       aria-label="logout"
//       type="button"
//     >
//       <FaUserAltSlash size={18} />
//     </button>
//   );
// }

// export default function NavBarre({ auth_user_id })  {
//     return (
//         <nav className="max-w-8xl fixed top-4 left-1/2 z-50 mt-6 w-[95%] -translate-x-1/2 rounded-full border border-sky-400/40 bg-black/30 px-8 py-3 shadow-lg backdrop-blur-md">
//             <div className="flex items-center justify-between">
//                 <Link href="/" className="flex flex-shrink-0 items-center">
//                     <div className="h-18 w-18 overflow-hidden rounded-lg">
//                         <img src="/images/logo3.png" alt="Logo" className="h-full w-full object-cover" />
//                     </div>
//                 </Link>

//                 <div className="hidden items-center space-x-8 md:flex">
//                     <Link href="/" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
//                         <FiHome size={18} />
//                         <span className="text-sm font-semibold tracking-wider uppercase">Accueil</span>
//                         <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>

//                     <Link href="#about" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
//                         <FiInfo size={18} />
//                         <span className="text-sm font-semibold tracking-wider uppercase">A propos</span>
//                         <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>

//                     <Link href="/#media" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
//                         <FiCamera size={18} />
//                         <span className="text-sm font-semibold tracking-wider uppercase">Média</span>
//                         <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>

//                     <Link href="/#myTemoignages" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
//                         <FiMessageSquare size={18} />
//                         <span className="text-sm font-semibold tracking-wider uppercase">Témoignages</span>
//                         <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                 </div>

//                 <div className="flex items-center space-x-6">
//                     <Link href="/#contact" className="group flex items-center space-x-2 text-white transition hover:text-cyan-600">
//                         <FiMail className="text-cyan-600 group-hover:animate-pulse" size={18} />
//                         <span className="font-medium tracking-wide uppercase">Contact</span>
//                     </Link>

//                     {auth_user_id ? (
//                         <LogoutButton />
//                     ) : (
//                         <Link href="/login">
//                             <FaUser className="cursor-pointer text-white transition hover:text-cyan-600" size={18} />
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }


//nav barre responsive

// import { Link, router } from '@inertiajs/react'
// import { useState } from 'react'
// import { FaUserAltSlash } from 'react-icons/fa'
// import { FaUser } from 'react-icons/fa6'
// import {
//   FiCamera,
//   FiHome,
//   FiInfo,
//   FiMail,
//   FiMessageSquare
// } from 'react-icons/fi'

// function LogoutButton() {
//   function deconnexion(e) {
//     e.preventDefault()
//     router.post('/logout')
//   }

//   return (
//     <button
//       onClick={deconnexion}
//       className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-orange-400"
//       aria-label="déconnexion"
//       type="button"
//     >
//       <FaUserAltSlash size={18} />
//       <span>Déconnexion</span>
//       <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
//     </button>
//   )
// }

// export default function NavBarre({ auth_user_id }) {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <>
//       {/* bouton burger mobile */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="fixed top-6 right-6 z-50 flex h-8 w-8 flex-col justify-between md:hidden"
//         aria-label="Toggle menu"
//       >
//         <span
//           className={`h-1 w-9 bg-orange-400 transition-all duration-300 ${
//             menuOpen ? 'translate-y-3 rotate-45' : ''
//           }`}
//         />
//         <span
//           className={`h-1 w-9 bg-cyan-400 transition-opacity duration-300 ${
//             menuOpen ? 'opacity-0' : 'opacity-100'
//           }`}
//         />
//         <span
//           className={`h-1 w-9 bg-orange-400 transition-all duration-300 ${
//             menuOpen ? '-translate-y-4 -rotate-45' : ''
//           }`}
//         />
//       </button>

//       {/* menu mobile vertical plein écran */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-40 bg-black/90 px-6 py-10 flex flex-col space-y-6 text-base font-bold text-white md:hidden">
//           <Link
//             href="/"
//             onClick={() => setMenuOpen(false)}
//             className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
//           >
//             <FiHome className="text-cyan-600" />
//             <span>Accueil</span>
//             <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="#about"
//             onClick={() => setMenuOpen(false)}
//             className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
//           >
//             <FiInfo className="text-cyan-600" />
//             <span>À propos</span>
//             <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/#media"
//             onClick={() => setMenuOpen(false)}
//             className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
//           >
//             <FiCamera className="text-cyan-600" />
//             <span>Média</span>
//             <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/#myTemoignages"
//             onClick={() => setMenuOpen(false)}
//             className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
//           >
//             <FiMessageSquare className="text-cyan-600" />
//             <span>Témoignages</span>
//             <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/#contact"
//             onClick={() => setMenuOpen(false)}
//             className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
//           >
//             <FiMail className="text-cyan-600" />
//             <span>Contact</span>
//             <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           {auth_user_id ? (
//             <LogoutButton />
//           ) : (
//             <Link
//               href="/login"
//               onClick={() => setMenuOpen(false)}
//               className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
//             >
//               <FaUser className="text-cyan-600" />
//               <span>Connexion</span>
//               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           )}
//         </div>
//       )}

//       {/* navbar desktop */}
//       <nav className="fixed top-4 left-1/2 z-40 w-[95%] max-w-8xl -translate-x-1/2 rounded-full border border-cyan-600 bg-black/80 px-8 py-3 shadow-lg md:flex hidden">
//         <div className="flex items-center justify-between w-full">
//           <Link href="/" className="flex flex-shrink-0 items-center">
//             <div className="h-14 w-14 overflow-hidden rounded-lg">
//               <img
//                 src="/images/logo3.png"
//                 alt="Logo"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </Link>

//           <div className="hidden items-center space-x-8 md:flex">
//             <Link
//               href="/"
//               className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
//             >
//               <FiHome size={18} />
//               <span className="text-sm font-semibold tracking-wider uppercase">
//                 Accueil
//               </span>
//               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <Link
//               href="#about"
//               className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
//             >
//               <FiInfo size={18} />
//               <span className="text-sm font-semibold tracking-wider uppercase">
//                 À propos
//               </span>
//               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <Link
//               href="/#media"
//               className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
//             >
//               <FiCamera size={18} />
//               <span className="text-sm font-semibold tracking-wider uppercase">
//                 Média
//               </span>
//               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <Link
//               href="/#myTemoignages"
//               className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
//             >
//               <FiMessageSquare size={18} />
//               <span className="text-sm font-semibold tracking-wider uppercase">
//                 Témoignages
//               </span>
//               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </div>

//           <div className="flex items-center space-x-6">
//             <Link
//               href="/#contact"
//               className="group flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
//             >
//               <FiMail className="text-cyan-600 group-hover:animate-pulse" size={18} />
//               <span className="font-medium tracking-wide uppercase">Contact</span>
//             </Link>

//             {auth_user_id ? (
//               <LogoutButton />
//             ) : (
//               <Link href="/login">
//                 <FaUser className="cursor-pointer text-cyan-600 transition hover:text-orange-400" size={18} />
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }


import { Link, router } from '@inertiajs/react'
import { useState } from 'react'
import { FaUserAltSlash } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import {
  FiCamera,
  FiHome,
  FiInfo,
  FiMail,
  FiMessageSquare
} from 'react-icons/fi'

function LogoutButton() {
  function deconnexion(e) {
    e.preventDefault()
    router.post('/logout')
  }

  return (
    <button
      onClick={deconnexion}
      className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-orange-400"
      aria-label="déconnexion"
      type="button"
    >
      <FaUserAltSlash size={18} />
      <span>Déconnexion</span>
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
    </button>
  )
}

export default function NavBarre({ auth_user_id }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* bouton burger mobile (visible < md) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-50 flex h-8 w-8 flex-col justify-between md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-1 w-9 bg-orange-400 transition-all duration-300 ${
            menuOpen ? 'translate-y-3 rotate-45' : ''
          }`}
        />
        <span
          className={`h-1 w-9 bg-cyan-400 transition-opacity duration-300 ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`h-1 w-9 bg-orange-400 transition-all duration-300 ${
            menuOpen ? '-translate-y-4 -rotate-45' : ''
          }`}
        />
      </button>

      {/* menu mobile vertical plein écran (visible < md) */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 px-6 py-10 flex flex-col space-y-6 text-base font-bold text-white md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
          >
            <FiHome className="text-cyan-600" />
            <span>Accueil</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
          >
            <FiInfo className="text-cyan-600" />
            <span>À propos</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/#media"
            onClick={() => setMenuOpen(false)}
            className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
          >
            <FiCamera className="text-cyan-600" />
            <span>Média</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/#myTemoignages"
            onClick={() => setMenuOpen(false)}
            className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
          >
            <FiMessageSquare className="text-cyan-600" />
            <span>Témoignages</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
          >
            <FiMail className="text-cyan-600" />
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {auth_user_id ? (
            <LogoutButton />
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
            >
              <FaUser className="text-cyan-600" />
              <span>Connexion</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </div>
      )}

      {/* navbar tablette (visible md à lg) */}
      <nav className="hidden md:flex lg:hidden fixed top-4 left-1/2 z-40 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-cyan-600 bg-black/80 px-6 py-3 shadow-lg items-center justify-between text-white">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-12 w-12 overflow-hidden rounded-lg">
            <img
              src="/images/logo3.png"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-bold text-cyan-600 text-lg">MonSite</span>
        </Link>

        <div className="flex space-x-6">
          <Link
            href="/"
            className="flex items-center space-x-1 text-cyan-600 hover:text-orange-400 transition"
          >
            <FiHome size={20} />
            <span className="hidden sm:inline font-semibold">Accueil</span>
          </Link>

          <Link
            href="#about"
            className="flex items-center space-x-1 text-cyan-600 hover:text-orange-400 transition"
          >
            <FiInfo size={20} />
            <span className="hidden sm:inline font-semibold">À propos</span>
          </Link>

          <Link
            href="/#media"
            className="flex items-center space-x-1 text-cyan-600 hover:text-orange-400 transition"
          >
            <FiCamera size={20} />
            <span className="hidden sm:inline font-semibold">Média</span>
          </Link>

          <Link
            href="/#myTemoignages"
            className="flex items-center space-x-1 text-cyan-600 hover:text-orange-400 transition"
          >
            <FiMessageSquare size={20} />
            <span className="hidden sm:inline font-semibold">Témoignages</span>
          </Link>

          <Link
            href="/#contact"
            className="flex items-center space-x-1 text-cyan-600 hover:text-orange-400 transition"
          >
            <FiMail size={20} />
            <span className="hidden sm:inline font-semibold">Contact</span>
          </Link>
        </div>

        <div>
          {auth_user_id ? (
            <LogoutButton />
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-1 text-cyan-600 hover:text-orange-400 transition"
            >
              <FaUser size={20} />
              <span className="hidden sm:inline font-semibold">Connexion</span>
            </Link>
          )}
        </div>
      </nav>

      {/* navbar desktop (visible ≥ lg) */}
      <nav className="hidden lg:flex fixed top-4 left-1/2 z-40 w-[95%] max-w-8xl -translate-x-1/2 rounded-full border border-cyan-600 bg-black/80 px-8 py-3 shadow-lg">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <div className="h-14 w-14 overflow-hidden rounded-lg">
              <img
                src="/images/logo3.png"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
            >
              <FiHome size={18}  className="text-cyan-600" />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Accueil
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#about"
              className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
            >
              <FiInfo size={18}  className="text-cyan-600" />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                À propos
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/#media"
              className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
            >
              <FiCamera size={18} className="text-cyan-600" />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Média
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/#myTemoignages"
              className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
            >
              <FiMessageSquare size={18} className="text-cyan-600" />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Témoignages
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
        <Link
            href="/#contact"
            className="group relative flex items-center space-x-2 transition hover:text-cyan-600"
          >
            <FiMail size={18} className='text-cyan-600'/>
                <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Contact
              </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0  bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

            {auth_user_id ? (
              <LogoutButton />
            ) : (
              <Link href="/login">
                <FaUser className="cursor-pointer text-cyan-600 transition hover:text-orange-400" size={18} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
