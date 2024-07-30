import { BorderBeam } from '@/components/magicui/border-beam'
import Meteors from '@/components/magicui/meteors'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
        {/* <Meteors number={65}/> */}
       <div className='root-container'>
         <div className='wrapper'>
           {children}
           </div>
        </div> 
    </main>
  )
}

export default Layout