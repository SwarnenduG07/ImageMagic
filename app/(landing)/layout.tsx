import HomeNavBar from '@/components/HomeNavbar'
import { BorderBeam } from '@/components/magicui/border-beam'
import Meteors from '@/components/magicui/meteors'
import Particles from '@/components/magicui/particles'
import RetroGrid, { GridPattern } from '@/components/magicui/grid-pattern'
import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import { DarkMode } from '@/components/ui/darktoggle'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen bg-gradient-to-r from-lime-600 to-blue-700'>
       <div className='root-container'>
         <div className='wrapper'>
           {children}
           </div>
        </div> 
    </div>
  )
}

export default Layout