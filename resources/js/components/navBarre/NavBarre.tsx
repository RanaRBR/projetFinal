import { Link } from '@inertiajs/react';
import { FaRegEnvelope } from 'react-icons/fa';

export default function NavBarre() {
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 flex h-[140px] items-center justify-between bg-black px-8 py-4 shadow-lg">
            <div className="flex items-center">
                <Link href="/">
                    <img src="/images/logo.png" alt="Logo" className="h-30 w-30" />
                </Link>
            </div>

            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 space-x-8 transition-transform duration-300 ease-in-out">
                <a
                    href="/"
                    className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    Accueil
                </a>
                <a
                    href="#about"
                    className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    A propos
                </a>
                <a
                    href="#media"
                    className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    Média
                </a>
                <a
                    href="#temoignages"
                    className="text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    Témoignages
                </a>
            </div>

            <div className="mr-15 flex items-center p-10">
                <a
                    href="#contact"
                    className="flex text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    <FaRegEnvelope className="mt-1 mr-2" size={20} />
                    Contact
                </a>
            </div>
        </nav>
    );
}
