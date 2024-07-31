"use client"
import HomeNavBar from "@/components/HomeNavbar"
import TypewriterComponent from "typewriter-effect"

const Landing = () => {
    return (
        <div className="bg-green-900">
         <HomeNavBar />
           <div className="flex flex-col items-center h-screen justify-center text-8xl">
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
