"use client"
import HomeNavBar from "@/components/HomeNavbar"
import TypewriterComponent from "typewriter-effect"

const Landing = () => {
    return (
        <div className="">
         <HomeNavBar/>
         <span className="flex flex-col justify-center text-center pt-52 text-3xl text-emerald-500 font-bold">
            AI Platform For 
         </span>
          <div className="pb-72  h-screen flex flex-col items-center justify-center text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500">
          <TypewriterComponent 
              options={{
                strings: [
                    "Under Development",
                    "Backgound Removal",
                    "Object Removal",
                    "Color Changing",
                    "Ratio Conversion"
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
