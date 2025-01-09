"use client"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import ShinyButton from "./magicui/shiny-button"
import Link from "next/link"
import { SparklesCore } from "./ui/sparkles"

const LandingContent = () => {
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <motion.div 
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"
        />
        <motion.div 
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:shadow-sm cursor-pointer hover:shadow-sky-400"
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              The best AI Platform For
            </span>
          </h1>
          
          <div className="mt-8 text-5xl md:text-6xl font-semibold bg-gradient-to-r from-blue-200 via-violet-200 to-purple-200 bg-clip-text text-transparent">
            <TypewriterComponent 
              options={{
                strings: [
                  "Background Removal",
                  "Object Removal",
                  "Object Recolor",
                  "Ratio Conversion"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <motion.div 
            className="mt-12 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/dashboard">
              <button className="group relative px-12 py-4 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-white/30 group-hover:bg-transparent transition-colors" />
                <span className="relative text-lg font-medium text-white">
                  Get Started Free
                </span>
              </button>
            </Link>
            <p className="text-lg text-zinc-400">
              No credit card required • Free tier available
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingContent