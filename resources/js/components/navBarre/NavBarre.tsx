import { Link, router } from '@inertiajs/react';
import { FaUserAltSlash } from "react-icons/fa";
import { FaUser } from 'react-icons/fa6';
import { FiCamera, FiHome, FiInfo, FiMail, FiMessageSquare } from 'react-icons/fi';

function LogoutButton() {
  function deconnexion(e) {
    e.preventDefault();
    router.post('/logout');
  }

  return (
    <button
      onClick={deconnexion}
      className="cursor-pointer text-white transition hover:text-cyan-600"
      aria-label="logout"
      type="button"
    >
      <FaUserAltSlash size={18} />
    </button>
  );
}

export default function NavBarre({ auth_user_id })  {
    return (
        <nav className="max-w-8xl fixed top-4 left-1/2 z-50 mt-6 w-[95%] -translate-x-1/2 rounded-full border border-cyan-400/40 bg-black/30 px-8 py-3 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex flex-shrink-0 items-center">
                    <div className="h-18 w-18 overflow-hidden rounded-lg">
                        <img src="/images/logo3.png" alt="Logo" className="h-full w-full object-cover" />
                    </div>
                </Link>

                <div className="hidden items-center space-x-8 md:flex">
                    <Link href="/" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                        <FiHome size={18} />
                        <span className="text-sm font-semibold tracking-wider uppercase">Accueil</span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link href="#about" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                        <FiInfo size={18} />
                        <span className="text-sm font-semibold tracking-wider uppercase">A propos</span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link href="/#media" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                        <FiCamera size={18} />
                        <span className="text-sm font-semibold tracking-wider uppercase">Média</span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link href="/#myTemoignages" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                        <FiMessageSquare size={18} />
                        <span className="text-sm font-semibold tracking-wider uppercase">Témoignages</span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    <Link href="/#contact" className="group flex items-center space-x-2 text-white transition hover:text-cyan-600">
                        <FiMail className="text-cyan-600 group-hover:animate-pulse" size={18} />
                        <span className="font-medium tracking-wide uppercase">Contact</span>
                    </Link>

                    {auth_user_id ? (
                        <LogoutButton />
                    ) : (
                        <Link href="/login">
                            <FaUser className="cursor-pointer text-white transition hover:text-cyan-600" size={18} />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
