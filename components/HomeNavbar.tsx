
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { useAuth } from '@clerk/nextjs';


export const HomeNavBar = () => {
    const  isSignedIn  = useAuth()
    return (
         <nav className="fixed w-full  border-b border-purple-500 dark:border-gray-600">
          <div className="pt-5 pb-5 flex flex-wrap items-center justify-between">
            <span className="text-3xl font-bold text-emerald-400 ml-16">
               IMAGE-MAGIC
            </span>
            <Link href={isSignedIn? "/dashboard" : "/sign-up" }>
              <Button className="transition bg-amber-600 ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-teal-600 mr-10">
                 Get Started
               </Button>
             </Link>
           </div>
       </nav>

    )
}
export default HomeNavBar
