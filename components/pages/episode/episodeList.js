import { EpisodeItem } from "@components/pages/episode";

const episodeList = () => {

    const episodelist = [
        {
            id: 2001,
            title: 'rewrite your financial story',
            category: 'the finance book',
            excerpt: 'Seamlessly strategize turnkey alignments vis-a-vis ubiquitous models. Source of the way ...',
            imageSrc: 'sigmund-mmPK8J0XpAM-unsplash.jpg'
        },
        {
            id: 2002,
            title: 'rewrite your financial story',
            category: 'the money series',
            excerpt: 'Seamlessly strategize turnkey alignments vis-a-vis ubiquitous models. Source of the way ...',
            imageSrc: 'kelly-sikkema-gcHFXsdcmJE-unsplash.jpg'
        },
        {
            id: 2003,
            title: 'rewrite your financial story',
            category: 'the finance book',
            excerpt: 'Seamlessly strategize turnkey alignments vis-a-vis ubiquitous models. Source of the way ...',
            imageSrc: 'workbook.jpg'
        },
        {
            id: 2004,
            title: 'rewrite your financial story',
            category: 'the money series',
            excerpt: 'Seamlessly strategize turnkey alignments vis-a-vis ubiquitous models. Source of the way ...',
            imageSrc: 'kelly-sikkema-gcHFXsdcmJE-unsplash.jpg'
        },
        {
            id: 2005,
            title: 'rewrite your financial story',
            category: 'the finance book',
            excerpt: 'Seamlessly strategize turnkey alignments vis-a-vis ubiquitous models. Source of the way ...',
            imageSrc: 'workbook.jpg'
        },

    ];

    return (
        <div className="max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-8">
            {
                episodelist && episodelist.map(episode => (
                    <EpisodeItem key={episode.id}
                        category={episode.category}
                        title={episode.title}
                        imageSrc={episode.imageSrc}
                        excerpt={episode.excerpt}
                    />
                ))
            }
        </div>
    )
}
export default episodeList