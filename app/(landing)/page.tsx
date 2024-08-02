"use client"
import HomeNavBar from "@/components/HomeNavbar"
import TypewriterComponent from "typewriter-effect"

const Landing = () => {
    return (
        <div>
         <HomeNavBar/>
           <div className="flex flex-col items-center h-screen justify-center text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-lime-600">
           <TypewriterComponent 
              options={{
                strings: [
                    "under development"
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
