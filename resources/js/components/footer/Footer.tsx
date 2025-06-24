import { Link } from '@inertiajs/react';
import { FaSheetPlastic } from 'react-icons/fa6';
import { FiHome, FiInfo } from 'react-icons/fi';

export default function Footer({ auth_user_id }) {
    return (
        <div className="relative h-40 w-full pb-6">
            <footer className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="flex w-full max-w-6xl items-center justify-between text-sm font-semibold tracking-wide text-white uppercase">
                    <div className="flex space-x-8">
                        <Link href="/" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                            <FiHome size={18} />
                            <span className="text-sm font-semibold tracking-wider uppercase">Accueil</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="#about" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                            <FiInfo size={18} />
                            <span className="text-sm font-semibold tracking-wider uppercase">A propos</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <div className="h-20 w-20 overflow-hidden">
                                <img
                                    src="/images/logoF.png"
                                    alt="Logo"
                                    className="h-full w-full animate-spin object-cover duration-[12000ms] ease-linear"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="flex space-x-8">
                        <Link href="#contact" className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600">
                            <FiInfo size={18} />
                            <span className="text-sm font-semibold tracking-wider uppercase">Contact</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link
                            href={route('politique.confidentialite')}
                            className="group relative flex items-center space-x-2 text-white transition hover:text-cyan-600"
                        >
                            <FaSheetPlastic size={18} />
                            <span className="text-sm font-semibold tracking-wider uppercase">Légal</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
