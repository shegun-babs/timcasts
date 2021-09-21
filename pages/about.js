
import Layout from "@components/layouts/web";
import {Navbar} from "@components/pages";
import { MicrophoneIcon, DocumentDuplicateIcon, DownloadIcon, ChatAlt2Icon } from "@heroicons/react/outline";

const About = () => {

    return (
        <>
            <section className="overflow-hidden bg-gradient-to-br from-teal-600 to-teal-900">
                <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <Navbar />

                    <div className="py-12 md:py-24">
                        <h1 className="text-3xl font-semibold tracking-tighter md:text-5xl text-white">
                            About tim.casts <br/>
                            <span className="text-base uppercase tracking-[7px] font-light text-teal-200">Wealth inspiring podcasts</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto">
                <div className="py-36 px-4 sm:px-6 md:px-8">
                    <h2 className="font-header text-2xl text-gray-700 tracking-widest uppercase">who we are</h2>
                    <div className="grid md:grid-cols-2 gap-x-20 py-6 text-gray-600">
                        <div className="">
                            <p className="leading-loose my-2 md:my-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos eaque enim
                                exercitationem ipsam laborum quam sequi. Commodi culpa dicta inventore,
                                itaque rerum similique sunt? Eaque nemo quam rem veniam?

                            </p>
                        </div>
                        <div>
                            <p className="leading-loose my-2 md:my-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet blanditiis culpa dolore
                                dolores doloribus eligendi neque nostrum odit quaerat sint, tempora! Accusantium
                                deserunt doloribus ipsa iure neque, quaerat sint!
                            </p>
                        </div>
                    </div>

                    <div className="py-20">
                        <ul className="grid grid-cols-4 py-10 border">
                            <li className="items-center flex justify-center">
                                <div className="text-center space-y-2">
                                    <div className="text-5xl font-semibold">300</div>
                                    <div className="uppercase tracking-[0.2em] text-sm text-gray-400 font-medium flex space-x-1 items-center">
                                        <MicrophoneIcon className="inline h-4 w-auto" /> <span>Total Podcasts</span>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center flex justify-center">
                                <div className="text-center space-y-2">
                                    <div className="text-5xl font-semibold">421</div>
                                    <div className="uppercase tracking-[0.2em] text-sm text-gray-400 font-medium flex space-x-1 items-center">
                                        <DocumentDuplicateIcon className="inline h-4 w-auto" /> <span>episodes</span>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center flex justify-center">
                                <div className="text-center space-y-2">
                                    <div className="text-5xl font-semibold">1800</div>
                                    <div className="uppercase tracking-[0.2em] text-sm text-gray-400 font-medium flex space-x-1 items-center">
                                        <DownloadIcon className="inline h-4 w-auto" /> <span>downloads</span>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center flex justify-center">
                                <div className="text-center space-y-2">
                                    <div className="text-5xl font-semibold">520</div>
                                    <div className="uppercase tracking-[0.2em] text-sm text-gray-400 font-medium flex space-x-1 items-center">
                                        <ChatAlt2Icon className="inline h-4 w-auto" /> <span>comments</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="uppercase tracking-widest font-header text-2xl text-gray-600 text-center">Our Story</h3>
                        {/*<div className="grid grid-cols-2 gap-x-10 my-10">*/}
                        {/*    <div className="border">*/}
                        {/*        <h3 className="font-header uppercase text-xs border rounded-full px-4 py-3 border-black inline-flex text-center">Our Vision</h3>*/}
                        {/*        <p>*/}
                        {/*            Our mission is to vison*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*    <div className="border">*/}
                        {/*        <h3 className="font-header uppercase text-sm">Our Mission</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    )

}
export default About

About.getLayout = function getLayout(page){
    return (
        <Layout>
            { page }
        </Layout>
    )
}