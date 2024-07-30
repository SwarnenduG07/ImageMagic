import LandingNavBar from "@/components/LandingNavBar"
import Particles from "@/components/magicui/particles"


 const Landing = () => {
    return (
        <div>
            <LandingNavBar />
            <div className="flex flex-col items-center justify-center h-screen text-8xl  text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-lime-600">
                 Coming Soon
            </div>
            
        </div>
    )
}
export default Landing