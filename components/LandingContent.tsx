import TypewriterComponent from "typewriter-effect"

const LandingContent = () => {
  return (
    <main>
          <span className="flex flex-col justify-center text-center pt-52 text-6xl text-emerald-500 font-bold">
             The best AI Platform For
         </span>
        
          <div className="flex flex-col items-center justify-center text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500">
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
          <span className="flex flex-col justify-center text-center pt-20 text-2xl text-slate-400 font-light">
            No credit Card Required
         </span>
    </main>
  )
}

export default LandingContent