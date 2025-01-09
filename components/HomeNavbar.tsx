"use client"
import { motion } from "framer-motion";
import { Button } from "./ui/button"
import Link from "next/link"
import { useAuth } from '@clerk/nextjs';

export const HomeNavBar = () => {
    const { isSignedIn } = useAuth()
    
    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50"
        >
            <div className="backdrop-blur-xl bg-black/10 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"
                        >
                            IMAGE-MAGIC
                        </motion.span>

                        <div className="flex gap-4">
                            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                                <Button className="relative overflow-hidden group bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2 rounded-full">
                                    <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-all duration-300" />
                                    <span className="relative text-white font-semibold">
                                        Get Started
                                    </span>
                                </Button>
                            </Link>
                            {!isSignedIn && (
                                <Link href="/sign-in">
                                    <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                                        Sign In
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
export default HomeNavBar
