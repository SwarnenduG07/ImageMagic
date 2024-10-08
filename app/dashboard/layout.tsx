
import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import { Toaster } from '@/components/ui/toaster'
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
        <Toaster />
    </main>
  )
}

export default Layout