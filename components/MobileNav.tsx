"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <span className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl h-6 text-transparent bg-clip-text font-semibold bg-gradient-to-br from-purple-700 via bg-pink-600 to-red-600 font-serif'>IMAGE-MAGIC</span>
            </Link>
            <nav className='flex-gap-2'>
                <SignedIn>
                    <UserButton afterSwitchSessionUrl='/' />
                    <Sheet>
                        <SheetTrigger><Image src="/assets/icons/menu.svg" alt='menu' width={32} height={32} className='cursor-pointer'></Image></SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                            <span className='sm:text-2xl text-2xl h-6 text-transparent bg-clip-text font-semibold bg-gradient-to-br from-purple-700 via bg-pink-600 to-red-600 font-serif'>IMAGE-MAGIC</span>

                     <ul className='header-nav_elements'>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-emerald-700 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-11duration-10 rounded-full`}>
                                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                                        <Image src={link.icon} alt='logo'
                                        width={24}
                                        height={24}
                                    
                                        />
                                        {link.label}
                                        
                                        </Link>
                                    </li>
                                )
                            })}
                            </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover transition ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-200 ...'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav
