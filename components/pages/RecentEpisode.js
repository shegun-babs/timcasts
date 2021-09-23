import {MdPlayCircleOutline} from "react-icons/md";

const RecentEpisode = ({imageSrc, title, owner}) => {

    return (
        <div className="flex flex-col space-y-0 md:space-y-3">
            <img
                className="rounded-md my-4 w-auto h-96 object-cover object-center"
                src={ imageSrc }
                alt="recent episode" />
            <div className="space-y-3 md:space-y-0 flex flex-col md:flex-row md:items-start md:space-x-3">
                <button className="">
                    <MdPlayCircleOutline className="w-10 h-10 text-sky-700" />
                </button>
                <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-semibold md:font-bold">{ title }</h3>
                    <p className="text-sm md:text-base font-medium">
                        { owner }
                    </p>
                </div>
            </div>
        </div>
    )

}
export default RecentEpisode