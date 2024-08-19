"use client"
import TypewriterComponent from "typewriter-effect"
import ShinyButton from "./magicui/shiny-button"
import Link from "next/link"
import { SparklesCore } from "./ui/sparkles"

const LandingContent = () => {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

    <div>
          <span className="flex flex-col justify-center text-center pt-36 text-6xl text-emerald-500 font-bold">
             The best AI Platform For
         </span>
        
          <div className="flex flex-col items-center justify-center text-6xl font-semibold pt-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">
          <TypewriterComponent 
              options={{
                strings: [
                    "Backgound Removal",
                    "Object Removal",
                    "Object Recolor",
                    "Ratio Conversion"
                ],
                autoStart: true,
                loop: true,
              }}
           />
          </div>
          <Link href="/dashboard">
           <span className="flex flex-col items-center    mt-12">
             <ShinyButton text="Get Started" className="rounded-full w-56 h-10 "/>
            </span>
           </Link>
          <span className="flex flex-col justify-center text-center pt-10 pb-4 text-2xl text-slate-400 font-light">
            No credit Card Required
         </span>

    </div>
  </div>  
  )
}

export default LandingContent