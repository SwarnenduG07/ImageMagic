import HomeNavBar from '@/components/HomeNavbar'
import { BorderBeam } from '@/components/magicui/border-beam'
import Meteors from '@/components/magicui/meteors'
import Particles from '@/components/magicui/particles'
import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import { DarkMode } from '@/components/ui/darktoggle'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
        <Meteors number={65}/>
        <MobileNav/>
        {/* <HomeNavBar /> */}
       <div className='root-container'>
         <div className='wrapper'>
           {children}
           </div>
        </div> 
    </main>
  )
}

export default Layout