import { PlayIcon } from '@heroicons/react/solid'

const episodeItem = ({category, title, excerpt, imageSrc}) => {
    return (
        <div className="md:col-span-1">
            <img src={imageSrc} alt="" className="rounded h-60 w-full md:w-auto object-cover object-center" />
            <div className="uppercase text-xs font-semibold font-header tracking-tighter mt-2">{ category }</div>
            <h2 className="text-2xl font-bold mt-2 capitalize">{ title }</h2>
            {
                excerpt &&
                    <p className="my-4 text-sm">
                        { excerpt }
                    </p>
            }
            <div className="pt-3 flex">
                <a href="#" className="px-4 py-2 rounded-full border border-gray-900 bg-gray-800 font-medium flex-shrink">
                    <span className="flex justify-center items-center">
                        <PlayIcon className="w-6 h-6 flex-initial mr-2 text-white" />
                        <span className="flex-initial text-white text-sm">Play Episode</span>
                    </span>
                </a>
            </div>
        </div>
    )
}
export default episodeItem