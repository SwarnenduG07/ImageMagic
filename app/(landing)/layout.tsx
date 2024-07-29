import { BorderBeam } from "@/components/magicui/border-beam"
import { MagicCard } from "@/components/magicui/magic-card"
import Meteors from "@/components/magicui/meteors"

const LandingLayout = ({children}: {children: React.ReactNode}) => {
    return (        
        <div>
           <main className="h-full backdrop-filter backdrop-blur-lg">
            <BorderBeam />
             <Meteors number={65}/>
             <div>
                {children}
            </div>
          </main>
        </div>
    )
}
export default LandingLayout