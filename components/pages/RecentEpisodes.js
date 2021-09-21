import { MdPlayCircleOutline } from 'react-icons/md'
import {RecentEpisode} from "@components/pages/index";
import useStore from "@components/store/store";

const RecentEpisodes = ({episodes}) => {

//    const episodes = useStore(state => state.recentEpisodes);
    const addEpisodes = useStore(state => state.addRecentEpisodes)

    const addToEpisodes = () => {
        addEpisodes({
            title: "Test title",
            author: "Pastor Yemi Adejumo",
            imageSrc: "https://shegunbabs.com/img/shegun-babs.jpg"
        })
    }

        return (
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-36 space-y-6">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between text-center md:text-left space-y-6 md:space-y-0">
                        <h2 className="font-bold text-2xl md:text-3xl w-full">Recent Episodes</h2>
                        <a href="#" className="font-semibold text-white bg-sky-900 py-3 px-5 rounded-full whitespace-nowrap">View All Episodes</a>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-14">
                    {
                        episodes && episodes.map(
                            (episode, index) => (
                                <RecentEpisode key={index}
                                    owner={episode.author}
                                    title={episode.title}
                                    imageSrc={episode.imageSrc}
                                />
                            )
                        )
                    }
                    </div>
                </div>

            </section>
        )
}
export default RecentEpisodes