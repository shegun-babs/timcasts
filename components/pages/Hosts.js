import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const Hosts = () => (
    <section className="bg-white mx-auto">
        <div className="py-20 md:py-36 px-4 md:px-8 space-y-10 md:space-y-20 max-w-7xl mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl">Meet Your Hosts</h2>
            <div className="space-y-20">
                <div className="space-y-4 md:space-y-0 grid md:grid-cols-3 gap-10 md:gap-20">
                    <div className="space-y-6 md:order-3">
                        <h4 className="font-semibold">01</h4>
                        <h3 className="font-bold md:font-extrabold text-2xl md:text-4xl md:leading-relaxed text-sky-900">Clement Oladipupo</h3>
                        <ul className="flex gap-x-4">
                            <li><FaFacebook className="text-2xl" /></li>
                            <li><FaTwitter className="text-2xl" /></li>
                            <li><FaYoutube className="text-2xl" /></li>
                            <li><FaInstagram className="text-2xl" /></li>
                        </ul>
                    </div>
                    <div className="md:order-2">
                        <span className="border-t-2 w-20 block border-sky-800">&nbsp;</span>
                        <p className="prose prose-sm leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur dicta,
                            dolorem doloribus dolorum ducimus eligendi fugiat iusto odio odit quia, rem repudiandae sunt
                            veniam. Consequuntur laudantium natus voluptates.
                        </p>
                    </div>
                    <div className="md:order-1">
                        <img
                            src="https://websitedemos.net/creative-podcaster-02/wp-content/uploads/sites/775/2021/02/podcaster-template-host-img-1.jpg"
                            className="rounded-md"
                            alt="Host one" />
                    </div>
                </div>
                <div className="space-y-4 md:space-y-0 grid md:grid-cols-3 gap-10 md:gap-20">
                    <div className="space-y-6 md:order-3">
                        <h4 className="font-semibold">02</h4>
                        <h3 className="font-bold md:font-extrabold text-2xl md:text-4xl md:leading-relaxed text-sky-900">Bukola Olutayo</h3>
                        <ul className="flex gap-x-4">
                            <li><FaFacebook className="text-2xl" /></li>
                            <li><FaTwitter className="text-2xl" /></li>
                            <li><FaYoutube className="text-2xl" /></li>
                            <li><FaInstagram className="text-2xl" /></li>
                        </ul>
                    </div>
                    <div className="md:order-2">
                        <span className="border-t-2 w-20 block border-sky-800">&nbsp;</span>
                        <p className="prose prose-sm leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur dicta,
                            dolorem doloribus dolorum ducimus eligendi fugiat iusto odio odit quia, rem repudiandae sunt
                            veniam. Consequuntur laudantium natus voluptates.
                        </p>
                    </div>
                    <div className="md:order-1">
                        <img
                            src="https://websitedemos.net/creative-podcaster-02/wp-content/uploads/sites/775/2021/02/podcaster-template-host-img-2.jpg"
                            className="rounded-md"
                            alt="Host one" />
                    </div>
                </div>

            </div>
        </div>
    </section>
)
export default Hosts