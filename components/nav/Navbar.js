
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from "@components/assets/logo";
import Link from 'next/link'
import useStore from "@components/store/store";
import Divider from "@components/pages/Divider";
import { useRouter } from 'next/router';
import NavLink from './/NavLink'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
    const links = {
        home: '/',
        episodes: '/episodes',
        about: '/about',
        contact: '/contact',
        login: '/auth/login',
        register: '/auth/register'
    }

export default function Navbar({ className }) {

    const isLoggedIn = useStore(state => state.isLoggedIn);

    const activeLink = (href) => {
        const router = useRouter();
        const style = router.asPath === href
                ? "text-teal-200"
                : "border-transparent text-gray-50 hover:text-gray-200 inline-flex items-center px-1 pt-1 font-medium";
        console.log("router href: " +router.asPath)
        console.log("Passed href: " +href)
        return style;
    }

    return (
        <Disclosure as="nav" className={className}>
            {({ open }) => (
                <>
                    <div className="">
                        <div className="flex justify-between h-16 border-b border-teal-50 border-opacity-40">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <Logo className="h-10 w-auto text-gray-100" />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <NavLink href={links.home}>Home</NavLink>
                                    <NavLink href={links.episodes}>Episodes</NavLink>
                                    <NavLink href={links.about}>About</NavLink>
                                    <NavLink href={links.contact}>Contact</NavLink>
                                </div>
                            </div>
                            <div className={`hidden ${!isLoggedIn ? 'sm:hidden' : ''} sm:ml-6 sm:flex sm:items-center`}>
                                <button
                                    type="button"
                                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/*Mobile menu links*/}
                    <Disclosure.Panel className="sm:hidden bg-teal-50">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Link href={links.home}>
                                <a
                                    className="bg-teal-100 border-teal-500 text-teal-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                    Home
                                </a>
                            </Link>
                            <Link href={links.episodes}>
                                <a
                                    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                    Episodes
                                </a>
                            </Link>
                            <Link href={links.about}>
                                <a
                                    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                    About
                                </a>
                            </Link>
                            <Link href={links.contact}>
                                <a
                                    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                    Contact
                                </a>
                            </Link>
                        </div>
                        <div className={`pt-4 pb-3 border-t border-gray-200`}>
                            {
                                isLoggedIn &&
                                    <>
                                        <div className="flex items-center px-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                                <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                                            </div>
                                            <button
                                                type="button"
                                                className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </>
                            }
                            <div className={`mt-3 ${!isLoggedIn ? 'mb-4 space-y-2': 'space-y-1'}`}>
                                {
                                    !isLoggedIn &&
                                    <>
                                        <Link href={links.register}>
                                            <a className="text-center rounded-md mx-2 block px-4 py-2 text-base font-medium bg-gradient-to-l from-teal-800 to-teal-700 text-white hover:text-gray-800 hover:bg-gray-100">
                                                Register
                                            </a>
                                        </Link>

                                        <Divider text="or" bg="bg-teal-50" />

                                        <Link href={links.login}>
                                            <a className="text-center rounded-md mx-2 block px-4 py-2 text-base font-semibold bg-white border border-teal-800 text-teal-600 hover:text-gray-800 hover:bg-gray-100">
                                                Login
                                            </a>
                                        </Link>
                                    </>
                                }

                                {
                                    isLoggedIn &&
                                        <>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                                Your Profile
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                                Settings
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                                Sign out
                                            </a>
                                        </>
                                }
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
