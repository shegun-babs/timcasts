
import Layout from '@components/layouts/web'
import { Navbar } from "@components/pages";
import { EpisodeList } from '@components/pages/episode'


const episodes = () => {
    return (
        <>
            <section className="overflow-hidden bg-gradient-to-br from-teal-600 to-teal-900">
                <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <Navbar />

                    <div className="py-12 md:py-24">
                        <h1 className="text-3xl font-semibold tracking-tighter md:text-5xl text-white font-header">
                            Episodes <br/>
                            <span className="text-base uppercase tracking-[10px] font-light text-teal-200 font-header">Wealth inspiring podcasts</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden">
                <div className="w-full max-w-7xl mx-auto py-36">
                    <div className="flex gap-10 flex-wrap lg:flex-nowrap">
                        <EpisodeList />
                    </div>
                </div>
            </section>
        </>
    )
}

export default episodes

episodes.getLayout = function getLayout(page){
    return (
        <Layout>
            { page }
        </Layout>
    )
}