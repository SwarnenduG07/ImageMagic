"use client"
import { motion } from "framer-motion";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen relative bg-[#030014] overflow-hidden'>
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute h-full w-full bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        
        {/* Primary gradients */}
        <div className="absolute top-[-20%] right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,#7775D6_0%,transparent_70%)] blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,#332FD0_0%,transparent_70%)] blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,#0E1C6A_0%,transparent_50%)] blur-[120px]" />
        
        {/* Animated stars */}
        <motion.div 
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-40"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Layout