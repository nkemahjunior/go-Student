"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";



function CourseRegistrationLinks({ children,}: {children: React.ReactNode; }):JSX.Element {

    const pathname = usePathname()
  

    const links = ["/courseRegistration/major","/courseRegistration/minor","/courseRegistration/elective","/courseRegistration/required",
    "/courseRegistration/finalRegistered"]
    const linksTitle = ["Major Course Registration","Minor Course Registration","Elective Course Registration","Required Course Registration",
    "Final Registered courses"]

    const currentLink = links?.find(el => el === pathname)
    const currentLinkIndex = links.indexOf(currentLink!)

 

    
    return (
        //don't touch this border oh boy ,or else code layout will break
        <div className="  bg-stone-400  px-2 md:px-16 pb-6 border-2  border-solid border-stone-400 ">
            <div className=" bg-white -mt-[2rem] md:-mt-[3rem]  pt-4 px-1 md:px-4 pb-4 border-1  border-solid border-bg-stone-400">

                <div className=" overflow-x-scroll md:overflow-hidden">

                    <div className=" flex space-x-2 md:space-x-0    bg-stone-100   w-fit md:w-full ">

                        <div className={ ` ${pathname ==="/courseRegistration/major" && "border-b-4 border-[#198AC2] border-solid" }  md:w-full md:flex md:justify-center md:items-center md:hover:bg-stone-200`}>
                        <Link  href={"/courseRegistration/major"}  className={`  md:py-4 md:pr-4 `}>Register Major Courses</Link>
                        </div>
                        <div className={`${pathname ==="/courseRegistration/minor" && "border-b-4 border-[#198AC2] border-solid" }  md:w-full md:flex md:justify-center md:items-center md:hover:bg-stone-200`}>
                        <Link href={"/courseRegistration/minor"}   className={`md:py-4 md:pr-4 `}> Register Minor Courses</Link>
                        </div>
                        <div className={`${pathname ==="/courseRegistration/elective" && "border-b-4 border-[#198AC2] border-solid" } 
                        md:w-full md:flex md:justify-center md:items-center md:hover:bg-stone-200`}>
                        <Link href={"/courseRegistration/elective"}   className={`md:py-4 md:pr-4 `}> Register Elective Courses</Link>
                        </div>
                        <div className={` ${pathname ==="/courseRegistration/required" && "border-b-4 border-[#198AC2] border-solid" } md:w-full md:flex md:justify-center md:items-center md:hover:bg-stone-200`}>
                        <Link  href={"/courseRegistration/required"}   className={`md:py-4 md:pr-4 `}> Registered Required Courses</Link>
                        </div>
                        <div className={`${pathname ==="/courseRegistration/finalRegistered" && "border-b-4 border-[#198AC2] border-solid" }
                        md:w-full md:flex md:justify-center md:items-center md:hover:bg-stone-200`}>
                        <Link href={"/courseRegistration/finalRegistered"}   className={`md:py-4 md:pr-4 `}> Final Registered Courses</Link>
                        </div>

                    </div>

                </div>

                    {children}

                    <div className=" mt-8 md:flex space-y-1 md:space-y-0 md:justify-center  md:space-x-8 items-center ">


                        <div className="md:w-[40%] flex justify-center items-center">
                            {
                                currentLinkIndex === 0 || <Link href={`${links[currentLinkIndex - 1]}`} className=" text-xs md:text-base w-[70%]  p-1 md:p-2 text-center  flex justify-center items-center bg-[#47B2E7]    lg:hover:scale-95">{linksTitle[currentLinkIndex-1]} &lt;&lt;Previous
                                </Link>
                            }
                        </div>
                        <div className="md:w-[40%] flex justify-center items-center">
                            {
                                currentLinkIndex === links.length -1 || <Link href={`${links[currentLinkIndex + 1]}`} className="text-xs md:text-base w-[70%] text-center  p-1 md:p-2  flex justify-center items-center bg-[#47B2E7]    lg:hover:scale-95">Next&gt;&gt; {linksTitle[currentLinkIndex + 1]}
                                </Link>
                            }
                        </div>

                    </div>
            
            </div>


        </div>
    )
}

export default CourseRegistrationLinks


/**
 * 
 * 
 * 
 * 
 * 
 * md:p-2
md:-mt-[3rem]
-mt-[2rem]
 * <div className=" flex space-x-2">
            <Link  href={"#majorCourses"} className={` border-r-2 border-red-700 border-solid`}>Register Major Courses</Link>
            <Link href={"#elective"} className={` border-r-2 border-red-700 border-solid`}> Register Minor Courses</Link>
            <Link  href={"#required"} className={` border-r-2 border-red-700 border-solid`}> Registered Required Courses</Link>
            <Link href={"#final"} className={` `}> Final Registered Courses</Link>
           
        </div>
 */