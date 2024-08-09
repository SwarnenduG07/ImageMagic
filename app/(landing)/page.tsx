"use client"
import HomeNavBar from "@/components/HomeNavbar"

import LandingContent from "@/components/LandingContent"
import Testimonials from "@/components/Testimonials"


const Landing = () => {
    return (
        <div className="">
         <HomeNavBar/>
         <LandingContent />  
         <Testimonials />
       </div>
    )
}
  export default Landing
