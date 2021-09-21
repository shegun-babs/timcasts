
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Logo from '@components/assets/logo'

const links = {
    home: '/',
    episodes: '/episodes',
    about: '/about',
    contact: '/contact',
    login: '/auth/login',
    register: '/auth/register'
}

const Footer = () => {

    return (
        <section className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 px-4 py-12 lg:border-b">
                <h3 className="font-bold mb-6 lg:mb-0 flex">
                    <Logo className="inline h-10 w-auto" />
                </h3>

                <ul className="space-y-3 lg:space-y-0 lg:space-x-8 text-sm mb-6 lg:mb-0 flex flex-col lg:flex-row items-center">
                    <li>
                        <Link href={links.home}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={links.episodes}>
                            <a>Episodes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={links.about}>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={links.contact}>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center lg:justify-center">
                    <ul className="space-x-4 flex items-center lg:justify-center">
                        <li>
                            <a href="#">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTwitter className="text-2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-sm text-center my-10">
                <span>Copyright &copy;2021</span>
            </div>
        </section>
    )
}
export default Footer