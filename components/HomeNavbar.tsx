
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { useAuth } from '@clerk/nextjs';


export const HomeNavBar = () => {
    const  isSignedIn  = useAuth()
    return (
         <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
       < div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Image src="/assets/images/logo-text.svg" alt="logo" height={180} width={180} className="cursor-pointer lg:mr-12"/>
     <Link href={isSignedIn? "/dashboard" : "/sign-up" }>
   <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Button  className="rounded-full bg-blue-700 shadow-lg shadow-cyan-500/50  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-violet-400 ">Get started</Button>
     
    </div>
  </Link>
  </div>
</nav>

    )
}
export default HomeNavBar