
import Layout from "@components/layouts/web";
import {Navbar} from "@components/pages";
import { ImPhone, ImLocation } from 'react-icons/im'
import { MailSolid, LocationMarkerSolid } from '@components/assets/icons'
import Logo from '@components/assets/logo'

const contact = () => {
    return (
        <div className="mb-40">
            <section className="overflow-hidden bg-gradient-to-br from-teal-600 to-teal-900">
                <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <Navbar />

                    <div className="py-12 md:py-24">
                        <h1 className="text-3xl font-semibold tracking-tighter md:text-5xl text-white">
                            Contact us <br/>
                            <span className="text-base uppercase tracking-[10px] font-light text-teal-200">connect with <Logo className="inline h-7 w-auto"/></span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center my-20">
                    <h2 className="inline-flex text-xl tracking-[10px] uppercase text-gray-600">Have questions?</h2>
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-14">
                        <div className="col-span-1 justify-self-start">
                            <div className="flex gap-4 items-center justify-center sm:items-start">
                                <ImPhone className="h-6 w-auto text-gray-500" />
                                <div className="space-y-1">
                                    <div className="uppercase text-sm tracking-widest font-medium text-gray-500">Call Us</div>
                                    <div>+234 903 054 2488</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 justify-self-start">
                            <div className="flex gap-4 items-center justify-center">
                                <LocationMarkerSolid className="h-7 w-auto text-gray-500"/>
                                <div className="space-y-1">
                                    <div className="uppercase text-sm tracking-widest font-medium text-gray-500">Our Location
                                    </div>
                                    <div>+234 90 3054 2488</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 justify-self-start">
                            <div className="flex gap-4 items-center justify-center">
                                <MailSolid   className="h-7 w-auto text-gray-500"/>
                                <div className="space-y-1">
                                    <div className="uppercase text-sm tracking-widest font-medium text-gray-500">Email
                                    </div>
                                    <div>contact@timcasts.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-lg mx-auto mb-10 mt-20">
                            <fieldset>
                                <legend className="block text-sm font-medium text-gray-700"></legend>
                                <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                                    <div className="flex -space-x-px">
                                        <div className="w-1/2 flex-1 min-w-0">
                                            <label htmlFor="name" className="sr-only">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="focus:ring-teal-500 focus:border-teal-500 relative block w-full rounded-none rounded-tl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <label htmlFor="card-cvc" className="sr-only">
                                                CVC
                                            </label>
                                            <input
                                                type="text"
                                                name="card-cvc"
                                                id="card-cvc"
                                                className="focus:ring-teal-500 focus:border-teal-500 relative block w-full rounded-none rounded-tr-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="sr-only">
                                            Message
                                        </label>
                                        <textarea
                                            className="focus:ring-teal-500 focus:border-teal-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300 h-32 resize-none"
                                            placeholder="Message"
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="w-full text-right my-4">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent
                                        text-sm font-medium rounded-md shadow-sm text-white bg-gray-600
                                        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >Submit Message</button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default contact

contact.getLayout = function getLayout(page){
    return (
        <Layout>
            { page }
        </Layout>
    )
}