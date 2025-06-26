import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { FaUser, FaUserSlash } from 'react-icons/fa6';
import { FiCamera, FiHome, FiInfo, FiMail, FiMessageSquare } from 'react-icons/fi';

function LogoutButton() {
    function deconnexion(e) {
        e.preventDefault();
        router.post('/logout');
    }

    return (
        <button
            onClick={deconnexion}
            className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-orange-400 md:text-xl md:font-semibold "
            aria-label="déconnexion"
            type="button"
        >
            <FaUserSlash size={18} />
            <span>Déconnexion</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full " />
        </button>
    );
}

export default function NavBarre({ auth_user_id }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/*  tel/tablette */}
            <div className="fixed top-0 left-0 z-50 flex h-[180px] md:h-[180px] w-full flex-col bg-black/50 px-5 backdrop-blur-md md:px-8 lg:hidden ">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="mt-8 ml-4 block h-14 w-14 overflow-hidden rounded-lg md:mt-20 md:ml-8 md:h-20 md:w-20">
                        <img src="/images/logo3.png" alt="Logo" className="h-full w-full object-cover cursor-pointer" />
                    </Link>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="mt-3 mr-4 flex h-8 w-8 flex-col justify-between md:mt-15 md:mr-6"
                        aria-label="Toggle menu"
                    >
                        <span className={`h-1 w-9 bg-orange-400 transition-all duration-300 ${menuOpen ? 'translate-y-3 rotate-45' : ''}`} />
                        <span className={`h-1 w-9 bg-cyan-400 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`h-1 w-9 bg-orange-400 transition-all duration-300 ${menuOpen ? '-translate-y-4 -rotate-45' : ''}`} />
                    </button>
                </div>

                {menuOpen && (
                   <div className="mx-auto grid w-[90vw] max-w-lg grid-cols-3 grid-rows-2 gap-x-6 gap-y-6 py-4 md:gap-x-4 md:gap-y-4 font-bold text-white md:ms-30 mt-3">

                        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center justify-center space-x-2 hover:text-cyan-600 md:text-xl md:font-semibold  ">
                            <FiHome className="text-cyan-600" />
                            <span>Accueil</span>
                        </Link>

                        <Link
                            href="#about"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center space-x-2 hover:text-cyan-600 md:text-xl md:font-semibold"
                        >
                            <FiInfo className="text-cyan-600" />
                            <span>À propos</span>
                        </Link>

                        <Link
                            href="/#media"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center space-x-2 hover:text-cyan-600 md:text-xl md:font-semibold"
                        >
                            <FiCamera className="text-cyan-600" />
                            <span>Média</span>
                        </Link>

                        <Link
                            href="/#myTemoignages"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center space-x-2 hover:text-cyan-600 md:text-xl md:font-semibold"
                        >
                            <FiMessageSquare className="text-cyan-600" />
                            <span>Témoignages</span>
                        </Link>

                        <Link
                            href="/#contact"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center space-x-2 hover:text-cyan-600 md:text-xl md:font-semibold"
                        >
                            <FiMail className="text-cyan-600" />
                            <span>Contact</span>
                        </Link>

                        {auth_user_id ? (
                            <LogoutButton />
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center space-x-2 hover:text-cyan-600 md:text-xl md:font-semibold"
                            >
                                <FaUser className="text-cyan-600" />
                                <span>Connexion</span>
                            </Link>
                        )}
                    </div>
                )}
            </div>

            {/* pc */}
            <nav className="max-w-8xl fixed top-8 left-1/2 z-40 hidden h-25 w-[95%] -translate-x-1/2 rounded-full border border-cyan-600 bg-black/80 px-8 py-3 shadow-lg lg:flex">
                <div className="flex w-full items-center justify-between">
                    <div className="h-18 w-18 overflow-hidden rounded-lg">
                        <img src="/images/logo3.png" alt="Logo" className="h-full w-full object-cover cursor-pointer" />
                    </div>

                    <div className="flex items-center space-x-8">
                        <Link href="/" className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600">
                            <FiHome size={18} />
                            <span className="text-sm font-semibold tracking-wider text-white uppercase">Accueil</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="#about" className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600">
                            <FiInfo size={18} />
                            <span className="text-sm font-semibold tracking-wider text-white uppercase">À propos</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="/#media" className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600">
                            <FiCamera size={18} />
                            <span className="text-sm font-semibold tracking-wider text-white uppercase">Média</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link
                            href="/#myTemoignages"
                            className="group relative flex items-center space-x-2 text-cyan-600 transition hover:text-cyan-600"
                        >
                            <FiMessageSquare size={18} />
                            <span className="text-sm font-semibold tracking-wider text-white uppercase">Témoignages</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="/#contact" className="group relative flex items-center space-x-2 transition hover:text-cyan-600">
                            <FiMail size={18} className="text-cyan-600" />
                            <span className="text-sm font-semibold tracking-wider text-white uppercase">Contact</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
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
    );
}
