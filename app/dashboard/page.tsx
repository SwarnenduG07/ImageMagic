import { Collection } from "@/components/Collections"
import { navLinks } from "@/constants"
import { getALlImagesById } from "@/lib/actions/image.actions"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"

const Dashboard = async ({searchParams }: SearchParamProps) => {

  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getALlImagesById({page, searchQuery})
  
  return (
     <>
        <section className="home">
             <h1 className="home-heading">
               Unleash Your Creative Vision With ImageMagic
              </h1>
              <ul className="flex-center w-full gap-20">
                  {navLinks.slice(0,5).map((link) => (
                    <Link 
                    href={link.route}
                     key={link.route}
                     className="flex-center flex-col gap-2"
                    >
                      <li className="flex-center w-fit rounded-full bg-white p-4">
                       <Image src={link.icon}
                        alt="Image"
                        width={24}
                        height={24}
                       />
                      </li>
                      <p className="p-14-medium text-center">
                         {link.label}
                      </p>
                    </Link>
                  ))}
              </ul>
        </section>
         <section className="sm:mt-12">
            <Collection
          hasSearch={true}
          totalPages={images?.totalPages}
          page={page}
          images={images?.data}
            />
         </section>
     </> 
  )
}

export default Dashboard