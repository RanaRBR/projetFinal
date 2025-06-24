import Footer from '@/components/footer/Footer';
import NavBarre from '@/components/navBarre/NavBarre';
import SectionCommentaire from '@/components/sectionCommentaire/SectionCommentaire';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function ArticleDetails({ article, auth_user_id }) {
    const [liked, setLiked] = useState(article.likes?.some((like) => like.user_id === auth_user_id) || false);
    const [likesCount, setLikesCount] = useState(article.likes?.length || 0);
    const [loading, setLoading] = useState(false);

    function toggle(e) {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        const onSuccess = () => {
            setLiked(!liked);
            setLikesCount((count) => (liked ? Math.max(count - 1, 0) : count + 1));
            setLoading(false);
        };

        const onFail = () => setLoading(false);

        if (!liked) {
            router.post('/likes', { article_id: article.id }, { onSuccess, onError: onFail, onCancel: onFail });
        } else {
            router.delete(`/likes/${article.id}`, { onSuccess, onError: onFail, onCancel: onFail });
        }
    }

    return (
        <>
            <NavBarre auth_user_id={auth_user_id} />
            <div id="media" className="mt-40 flex min-h-screen justify-center bg-white px-6 py-12">
                <div className="w-full max-w-3xl border-t-2 border-orange-400 pt-8" style={{ fontFamily: "'Merriweather', serif" }}>
                    <h1 className="mb-10 text-3xl font-extrabold text-cyan-400 uppercase tracking-wide leading-tight">{article.titre}</h1>

                    <div className="text-lg leading-relaxed text-gray-800" style={{ fontWeight: 400, lineHeight: 1.7 }}>
                        <img
                            src={article.photo}
                            alt={article.titre}
                            className="float-left mr-6 mb-10 w-105 rounded-sm object-cover shadow-md"
                            style={{ maxHeight: '200px' }}
                        />
                        {article.paragraphe}
                    </div>

                    <div className="text-black">{article.tags?.map((elem, index) => <div key={index}>{elem.name}</div>)}</div>

                    <section className="mt-10 flex justify-between font-serif text-sm text-gray-600 italic">
                        <span>
                            <strong>Date :</strong> {article.date}
                        </span>
                        <span>
                            <strong>Auteur :</strong> {article.auteur}
                        </span>
                    </section>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="cursor-pointer rounded bg-cyan-500 px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan-600"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={toggle}
                        disabled={loading}
                        className={`mt-6 flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 ${liked ? 'text-red-600' : 'text-gray-700'}`}
                        aria-label={liked ? 'unlike' : 'like'}
                    >
                        <FaHeart size={24} />
                        <span>{likesCount}</span>
                    </button>

                    <SectionCommentaire article={article} />
                </div>
            </div>
            <Footer auth_user_id={auth_user_id} />
        </>
    );
}
