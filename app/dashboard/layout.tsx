import { BorderBeam } from '@/components/magicui/border-beam'
import Meteors from '@/components/magicui/meteors'
import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
        {/* <Meteors number={65}/> */}
        <SideBar />
        <MobileNav/>
       <div className='root-container'>
         <div className='wrapper'>
           {children}
           </div>
        </div> 
    </main>
  )
}

export default Layout