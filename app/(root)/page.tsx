import LandingNavBar from "@/components/LandingNavBar"
import { UserButton } from "@clerk/nextjs"
 const Landing = () => {
    return (
        <div>
       <p>Home</p>

       <UserButton afterSwitchSessionUrl="/" />
        </div>
    )
}
  export default Landing
