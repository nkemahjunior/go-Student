"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { getSemester } from "./getSemester"
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { ImSpinner8 } from "react-icons/im"


function MainHeader({photo,name}:{photo:string| null | undefined,name:string| null | undefined}):JSX.Element {
   
    const pathname = usePathname()
    const router = useRouter()

    const semester = getSemester()
    const date = new Date()
    const currentYear = date.getFullYear()

    const[show,setShow] = useState(false)
    const toggleNav = () => setShow(v => !v)
    const ref = useRef<HTMLDivElement>(null)

    const[loggingOut,setLoggingOut] = useState(false)

    useEffect(()=>{
        function toggleNavContainer(e:any){

         
            if(ref.current && !ref.current?.contains(e.target)){
                setShow(false)
            }
        }

        document.addEventListener('click',toggleNavContainer,true)

        return () =>{
            document.removeEventListener('click',toggleNavContainer,true)
        }
    },[])

    async function logout(){
        try {
            setLoggingOut(true)
            const res = await fetch(`${location.origin}/auth/logout`,{
                method:"post"
            })
    
            if(!res.ok ) throw new Error("error loging out from the main application")
            if(!res.ok ) toast.error("error logging out,please try again")
        
            router.refresh()
        
        } catch (error) {
            console.log(error)
        }finally{
            setLoggingOut(false)
        }
        
    }
   
    return(
        <div className="">

            <div className="bg-[#0293DB]  pt-[2rem] md:pt-[3rem]  pb-[4rem] md:pb-[6rem] px-[1rem] md:px-[3rem] space-y-4">

                <div className=" ">
                    <div className="   ">

                        <nav ref={ref}  className={`h-fit w-fit bg-white absolute right-0 z-10 mt-12 mr-4 px-2 py-3 shadow-lg ${!show && "hidden"}`}>
                            <ul className=" space-y-3">
                                <li className=" text-sm"><Link href={"/payFees"} className="flex items-center "> <span><MdAccountBalanceWallet/></span>&nbsp;Pay service Charges</Link></li>
                                <li className=" text-sm flex items-center"><span><IoMdEye/></span>&nbsp;Transacton Details</li>
                                <li className=" text-sm flex items-center"><span><FaQuestion/></span>&nbsp;FAQs</li>
                            </ul>
                            <hr className="mt-2"/>

                            <ul>
                                <li onClick={logout} className=" text-sm text-red-600 mt-2 flex items-center cursor-pointer" >
                                    {loggingOut ? 
                                    <span className="flex items-center"><span className="animate-spin"><ImSpinner8/></span>&nbsp;Logging out</span> 
                                    : 
                                    <span className="flex items-center"><span ><RiLogoutCircleLine/></span>&nbsp;Logout</span>
                                    }
                                </li>
                            </ul>
                        </nav>

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

                                    <div className=" h-10 w-10 relative rounded-[50%] overflow-hidden " onClick={toggleNav} >
                                        <Image src={photo!?.trim()} alt="student's picture" fill></Image>
                                    </div>
                                </div>

                            </div>


                            

                        </div>

                    </div>

                    
                </div>
                
                <div>
                    <div className="  flex md:justify-between   space-x-4 w-full overflow-x-scroll lg:overflow-auto pt-4">
                            <Link className={`${pathname === "/student" ? " p-2 bg-white text-[#0293DB] ":"p-2 text-white"} ${pathname === "/student" ? " p-2 bg-white text-[#0293DB] ":"text-white"}  capitalize font-extralight font-serif text-sm md:text-base `} href={"/student"}>HOME</Link>
                            
                            <Link className={` text-sm md:text-base 
                            ${pathname.startsWith('/courseRegistration') ? " p-2 bg-white text-[#0293DB] " :
                            "text-white p-2"} capitalize font-extralight font-serif flex flex-nowrap `}   
                            href={"/courseRegistration/major"}
                            >
                                COURSE&nbsp;REGISTRATION
                            </Link>

                            <Link className={`text-sm md:text-base ${pathname === "/formB" ? " p-2 bg-white text-[#0293DB] ":"text-white p-2"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/formB"}>FORM&nbsp;B</Link>

                            <Link className={`text-sm md:text-base ${pathname === "/caResults" ? " p-2 bg-white text-[#0293DB] ":"text-white p-2"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/caResults"}>CA&nbsp;RESULTS</Link>

                            <Link className={`text-sm md:text-base ${pathname === "/finalResults" ? " p-2 bg-white text-[#0293DB] ":"text-white p-2"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/finalResults"}>FINAL&nbsp;RESULTS</Link>

                            <Link className={`text-sm md:text-base ${pathname === "/payFees" ? " p-2 bg-white text-[#0293DB] ":"text-white p-2"} capitalize font-extralight font-serif flex flex-nowrap `}  href={"/payFees"}>PAY&nbsp;FEES</Link>
                            
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