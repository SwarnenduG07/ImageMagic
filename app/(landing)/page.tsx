"use client"
import HomeNavBar from "@/components/HomeNavbar"
import LandingContent from "@/components/LandingContent"
import Testimonials from "@/components/Testimonials"

const Landing = () => {
    return (
        <div className="min-h-screen bg-[#030712] relative">
            {/* Dotted background pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712]" />
            
            {/* Content */}
            <div className="relative z-10">
                <HomeNavBar/>
                <LandingContent />  
                <Testimonials />
            </div>
        </div>
    )
}
export default Landing
