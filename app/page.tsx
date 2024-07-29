import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import Meteors from "@/components/magicui/meteors";
import { DarkMode } from "@/components/ui/darktoggle";


export default function Home() {
  return (
     <div>
         <MagicCard>
             <DarkMode />
               <div>
                 <Meteors number={65}/>
      
             <BorderBeam />
             <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-red-500 to-green-400/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-red-300 dark:to-emerald-600 flex flex-col items-center justify-center h-screen">
                   Comming Soon Home Page
             </span>
      
            </div>

         </MagicCard>
     </div>
  );
}
