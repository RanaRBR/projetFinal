
import NavBarre from '@/components/navBarre/NavBarre';
import SectionCommentaire from '@/components/sectionCommentaire/SectionCommentaire';


export default function ArticleDetails({ article }) {

    return (
        <>
            <NavBarre />
            <div id="media" className="min-h-screen bg-white px-6 py-12 flex justify-center mt-40">
                <div className="max-w-3xl w-full border-t-2 border-cyan-600 pt-8" style={{ fontFamily: "'Merriweather', serif" }}>
                    <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-6">
                        {article.titre}
                    </h1>

                    <div className="text-gray-800 text-lg leading-relaxed" style={{ fontWeight: 400, lineHeight: 1.7 }}>
                        <img
                            src={article.photo}
                            alt={article.titre}
                            className="float-left w-105 mr-6 rounded-sm shadow-md object-cover mb-10"
                            style={{ maxHeight: '200px' }}
                        />
                        {article.paragraphe}
                    </div>

                    <div className='text-black'>
                        {article.tags.map((elem, index)=>
                        (
                            <div key= {index}>{elem.name}</div>
                        )
                        )}
                    </div>

                    <section className="mt-10 flex justify-between text-sm text-gray-600 italic font-serif">
                        <span><strong>Date :</strong> {article.date}</span>
                        <span><strong>Auteur :</strong> {article.auteur}</span>
                    </section>
                </div>
            </div>
            <SectionCommentaire article={article} />
        </>
    );
}
