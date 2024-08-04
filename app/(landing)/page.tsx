"use client"
import HomeNavBar from "@/components/HomeNavbar"
import TypewriterComponent from "typewriter-effect"

const Landing = () => {
    return (
        <div className="">
         <HomeNavBar/>
          <div className="h-screen flex flex-col items-center justify-center text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500">
          <TypewriterComponent 
              options={{
                strings: [
                    "Under Development"
                ],
                autoStart: true,
                loop: true,
              }}
           />
          </div>
         
        </div>
    )
}
  export default Landing
