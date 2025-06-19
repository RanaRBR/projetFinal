import { Link, useForm } from '@inertiajs/react';

export default function SectionContact({ contacts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const contact = contacts[0];

    const soumettre = (e) => {
        e.preventDefault();
        post('/send-email', {
            onSuccess: () => reset(),
        });
    };

    return (
        <section className="body-font relative overflow-hidden bg-gray-50 text-gray-800 ">
            <div id="contact" className="m-8 mx-auto mt-16 max-w-7xl rounded-lg bg-white p-10 shadow-md sm:p-16">
                <h2
                    className="mb-6 text-5xl font-medium text-cyan-600 uppercase text-center p-5"
                    style={{ fontFamily: "'Merriweather', sans-serif", fontStyle: 'normal', fontWeight: 600 }}
                >
                    Contact
                </h2>

                <div className="container mx-auto flex flex-wrap gap-8 sm:flex-nowrap">
                    <div className="relative flex flex-col overflow-hidden rounded-lg bg-gray-100 p-8 shadow-lg sm:mr-8 md:w-1/2">
                        <iframe
                            width="100%"
                            height="300"
                            className="rounded-lg"
                            title="map"
                            src={contact.localisation} 
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="mt-4 flex flex-col rounded bg-white py-6 shadow-md px-6">
                            <h3 className="title-font text-xs font-semibold tracking-widest text-gray-700 uppercase">
                                Adresse
                            </h3>
                            <a
                                href={contact.map_link || contact.localisation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 text-sm text-cyan-600 hover:underline"
                            >
                                Voir sur la carte
                            </a>

                            <h3 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-700 uppercase">
                                Email
                            </h3>
                            <a href={`mailto:${contact.mail}`} className="text-sm leading-relaxed text-cyan-600">
                                {contact.mail}
                            </a>

                            <h3 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-700 uppercase">
                                Téléphone
                            </h3>
                            <a href={`tel:${contact.telephone}`} className="text-sm leading-relaxed text-cyan-600">
                                {contact.telephone}
                            </a>
                        </div>
                    </div>

                    <form onSubmit={soumettre} className="w-full max-w-lg rounded-lg border border-gray-300 bg-white p-10 shadow-lg md:w-1/2">
                        <h2 className="mb-4 text-center text-2xl font-semibold text-cyan-600">Envoyer un message</h2>
                        <p className="mb-8 text-center text-sm text-gray-600">Remplir ce formulaire pour m'envoyer un message</p>

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-1 block font-medium text-gray-700">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                                    placeholder="Votre nom"
                                    required
                                />
                                {errors.name && <div className="mt-1 text-sm text-red-500">{errors.name}</div>}
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-1 block font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                                    placeholder="Votre email"
                                    required
                                />
                                {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-1 block font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                                    placeholder="Votre message"
                                    required
                                />
                                {errors.message && <div className="mt-1 text-sm text-red-500">{errors.message}</div>}
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full cursor-pointer rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400 focus:ring-2 focus:ring-blue-400 focus:outline-none disabled:opacity-50"
                            >
                                {processing ? 'Envoi...' : 'Envoyer'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
