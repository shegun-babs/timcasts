import { useRouter } from 'next/router'
import Link from 'next/link';

const NavLink = ({children, href}) => {

    const router = useRouter();
    const style = router.asPath === href
        ? "text-teal-200"
        : "text-gray-50"
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href)
    }

    return (
        <a href={href}
           onClick={handleClick}
           className={`${style} border-transparent hover:text-gray-200 inline-flex items-center px-1 pt-1 font-medium`}>
            { children }
        </a>
    )
}
export default NavLink