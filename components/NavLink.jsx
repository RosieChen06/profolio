'use client'
import Link from 'next/link'

const NavLink = ({href, title, setIsMenuOpen}) => {
    return (
        <Link
            href={href}
            className=''
            onClick={()=>{setIsMenuOpen(false);}}
        >
            {title}
        </Link>
    )
}

export default NavLink