"use client"
import  Link  from 'next/link'
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

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
                    <ul className='sidebar-nav_elements'>
                            {navLinks.slice(0,6).map((link) => {
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
                         <ul className='sidebar-nav_elements'>   
                         {navLinks.slice(6).map((link) => {
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
                            <li className='flex-center cursor-pointer gap-2 p-4 transition ease-in-out delay-10 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-10 rounded-full sidebar-nav_elements'>
                                <UserButton afterSwitchSessionUrl='/dashboard' showName />
                            </li>
                        </ul>
                </SignedIn>
            
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover transition ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-200 ...'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default SideBar