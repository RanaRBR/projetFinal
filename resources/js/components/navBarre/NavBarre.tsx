// import { Link } from '@inertiajs/react';
// import { FaRegEnvelope } from 'react-icons/fa';

// export default function NavBarre() {
//     return (
//         <nav className="fixed top-0 right-0 left-0 z-50 flex h-[120px] items-center justify-between bg-black px-8 py-4 shadow-lg">
//             <div className="flex items-center">
//                 <Link href="/">
//                     <img src="/images/logo.png" alt="Logo" className="h-30 w-30" />
//                 </Link>
//             </div>

//             <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 space-x-8 transition-transform duration-300 ease-in-out">
//                 <Link
//                     href="/"
//                     className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
//                 >
//                     Accueil
//                 </Link>
//                 <Link
//                     href="#about"
//                     className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
//                 >
//                     A propos
//                 </Link>
//                 <Link
//                     href="/#media"
//                     className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
//                 >
//                     Média
//                 </Link>
//                 <Link
//                     href="/#myTemoignages"
//                     className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
//                 >
//                     Témoignages
//                 </Link>
//             </div>

//             <div className="mr-15 flex items-center p-10">
//                 <Link
//                     href="/#contact"
//                     className="flex text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
//                 >
//                     <FaRegEnvelope className="mt-1 mr-2" size={20} />
//                     Contact
//                 </Link>
//             </div>
//         </nav>
//     );


//Nav stylée 

// import { Link } from '@inertiajs/react'
// import { FiMail, FiHome, FiUser, FiCamera, FiMessageSquare } from 'react-icons/fi'


// export default function NavBarre() {
//   return (
//     <nav className="fixed top-4 mt-6 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-7xl rounded-full bg-gray-200/30 backdrop-blur-md shadow-lg px-8 py-3 border border-cyan-400/40">
//       <div className="flex items-center justify-between">
// <Link href="/" className="flex items-center flex-shrink-0">
//   <div className="h-18 w-18 rounded-lg overflow-hidden ">
//     <img
//       src="/images/logo6.png"
//       alt="Logo"
//       className="h-full w-full object-cover"
//     />
//   </div>
// </Link>


//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="group relative flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition">
//             <FiHome size={18} />
//             <span className="uppercase text-sm font-semibold tracking-wider">Accueil</span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link href="#about" className="group relative flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition">
//             <FiUser size={18} />
//             <span className="uppercase text-sm font-semibold tracking-wider">A propos</span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link href="#media" className="group relative flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition">
//             <FiCamera size={18} />
//             <span className="uppercase text-sm font-semibold tracking-wider">Média</span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link href="#myTemoignages" className="group relative flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition">
//             <FiMessageSquare size={18} />
//             <span className="uppercase text-sm font-semibold tracking-wider">Témoignages</span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>

//         <Link
//           href="#contact"
//           className="group flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition"
//         >
//           <FiMail className="text-cyan-600 group-hover:animate-pulse" size={18} />
//           <span className="font-medium tracking-wide uppercase">Contact</span>
//         </Link>

//       </div>
//     </nav>
//   )
// }



import { Link } from '@inertiajs/react'
import { FiMail, FiHome, FiUser, FiCamera, FiMessageSquare } from 'react-icons/fi'
import { FaUser } from "react-icons/fa6";



export default function NavBarre() {
  return (
    <nav className="fixed top-4 mt-6 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-7xl rounded-full bg-black/30 backdrop-blur-md shadow-lg px-8 py-3 border border-cyan-400/40">
      <div className="flex items-center justify-between">
<Link href="/" className="flex items-center flex-shrink-0">
  <div className="h-18 w-18 rounded-lg overflow-hidden ">
    <img
      src="/images/logo6.png"
      alt="Logo"
      className="h-full w-full object-cover"
    />
  </div>
</Link>


        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="group relative flex items-center space-x-2 text-white hover:text-cyan-600 transition">
            <FiHome size={18} />
            <span className="uppercase text-sm font-semibold tracking-wider">Accueil</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#about" className="group relative flex items-center space-x-2 text-white hover:text-cyan-600 transition">
            <FiUser size={18} />
            <span className="uppercase text-sm font-semibold tracking-wider">A propos</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#media" className="group relative flex items-center space-x-2 text-white hover:text-cyan-600 transition">
            <FiCamera size={18} />
            <span className="uppercase text-sm font-semibold tracking-wider">Média</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#myTemoignages" className="group relative flex items-center space-x-2 text-white hover:text-cyan-600 transition">
            <FiMessageSquare size={18} />
            <span className="uppercase text-sm font-semibold tracking-wider">Témoignages</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <Link
          href="#contact"
          className="group flex items-center space-x-2 text-white hover:text-cyan-600 transition"
        >
          <FiMail className="text-cyan-600 group-hover:animate-pulse" size={18} />
          <span className="font-medium tracking-wide uppercase">Contact</span>
        </Link>

        <Link 
        href="/login">

        <FaUser className=" text-white hover:text-cyan-600 transition cursor-pointer" size={18}  />

        </Link>

        


      </div>
    </nav>
  )
}
