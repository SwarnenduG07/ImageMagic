"use client"
import  Link  from 'next/link'
import Image from "next/image"
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

export const SideBar = () => {
const pathname = usePathname();
    return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
            <span className='ml-2.5'>
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28}/>
            </span>
            </Link>
            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements '>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700 transition ease-in-out delay-10 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-10 ...'}`}>
                                        <Link className='sidebar-link' href={link.route}>
                                        <Image src={link.icon} alt='logo'
                                        width={24}
                                        height={24}
                                        className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.label}
                                        
                                        </Link>
                                    </li>
                                )
                            })}
                    </ul>
                </SignedIn>
            </nav>
        </div>
    </aside>
  )
}

export default SideBar