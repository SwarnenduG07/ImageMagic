"use client"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import ShinyButton from "./magicui/shiny-button"
import Link from "next/link"
import { SparklesCore } from "./ui/sparkles"

const features = [
  { title: "Background Removal", description: "Perfect cuts in seconds" },
  { title: "Object Removal", description: "Clean any unwanted elements" },
  { title: "Smart Recolor", description: "Change colors naturally" },
  { title: "Auto Resize", description: "Perfect for any platform" }
];

const LandingContent = () => {
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center">
      {/* Updated background effects */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <motion.div 
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-8 rounded-2xl backdrop-blur-sm border border-white/5 bg-black/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Transform Your Images with AI
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-zinc-300">
            Professional-grade image editing made simple. No design skills needed.
          </p>

          <div className="mt-8 text-5xl md:text-6xl font-semibold bg-gradient-to-r from-blue-200 via-violet-200 to-purple-200 bg-clip-text text-transparent">
            <TypewriterComponent 
              options={{
                strings: [
                  "Remove Backgrounds Instantly",
                  "Erase Unwanted Objects",
                  "Change Colors Magically",
                  "Resize for Any Platform"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 flex flex-col items-center gap-4">
            <Link href="/dashboard">
              <button className="group relative px-12 py-4 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-white/30 group-hover:bg-transparent transition-colors" />
                <span className="relative text-lg font-medium text-white">
                  Start Editing for Free
                </span>
              </button>
            </Link>
            <p className="text-lg text-zinc-400">
              No credit card required • 5 free edits included
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingContent