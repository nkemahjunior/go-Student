"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getSemester } from "./getSemester"


function MainHeader({photo,name}:{photo:string| null | undefined,name:string| null | undefined}):JSX.Element {
   
    const pathname = usePathname()

    const semester = getSemester()
    const date = new Date()
    const currentYear = date.getFullYear()
   
    return(
        <div className="">

            <div className="bg-[#0293DB]  pt-[2rem] md:pt-[3rem]  pb-[4rem] md:pb-[6rem] px-[1rem] md:px-[3rem] space-y-4">

                <div className=" ">
                    <div className="   ">

                        <div className=" flex justify-between "> 

                            <div className="hidden md:block">
                                <p className=" text-white font-bold  text-lg font-serif ">Go-Student</p>
                                <p className=" text-white font-light font-serif">University of Zustaland</p>
                            </div>

                            <div className="flex items-center space-x-2">
            
                                <div className="flex justify-between w-[85vw] md:space-x-8 md:flex-none  md:w-fit ">
                                    <div className="  ">
                                        <p className=" text-center uppercase  text-white font-serif font-light ">{name}</p>
                                        <p className=" text-black  font-light  text-xs text-center capitalize">
                                            {semester === "sem1" ? "First Semester" : "Second Semester"}, {currentYear}/{currentYear + 1}
                                            </p>
                                    </div>

                                    <div className=" h-10 w-10 relative rounded-[50%] overflow-hidden ">
                                        <Image src={photo!?.trim()} alt="student's picture" fill></Image>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    
                </div>
                
                <div>
                    <div className="  flex md:justify-between   space-x-4 w-full overflow-x-scroll lg:overflow-auto pt-4">
                            <Link className={`${pathname === "/student" ? " p-2 bg-white text-[#0293DB] ":"text-white"} ${pathname === "/student" ? " p-2 bg-white text-[#0293DB] ":"text-white"}  capitalize font-extralight font-serif text-sm md:text-base `} href={"/student"}>HOME</Link>
                            
                            <Link className={` text-sm md:text-base 
                            ${pathname.startsWith('/courseRegistration') ? " p-2 bg-white text-[#0293DB] " :
                            "text-white"} capitalize font-extralight font-serif flex flex-nowrap `}   
                            href={"/courseRegistration/major"}
                            >
                                COURSE&nbsp;REGISTRATION
                            </Link>

                            <Link className={`text-sm md:text-base ${pathname === "/formB" ? " p-2 bg-white text-[#0293DB] ":"text-white"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/formB"}>FORM&nbsp;B</Link>

                            <Link className={`text-sm md:text-base ${pathname === "/caResults" ? " p-2 bg-white text-[#0293DB] ":"text-white"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/caResults"}>CA&nbsp;RESULTS</Link>

                            <Link className={`text-sm md:text-base ${pathname === "/finalResults" ? " p-2 bg-white text-[#0293DB] ":"text-white"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/finalResults"}>FINAL&nbsp;RESULTS</Link>

                            <Link className={`text-sm md:text-base ${pathname === "/payFees" ? " p-2 bg-white text-[#0293DB] ":"text-white"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/payFees"}>PAY&nbsp;FEES</Link>
                            
                    </div>

                    <div className="w-full h-[0.1rem]  bg-white ">&nbsp;</div>
                </div>

        
            </div>

        </div>
    )
}

export default MainHeader

/**
 * ${'/major' || '/minor' || 'elective' || 'finalRegistered' || 'elective'   }
 */