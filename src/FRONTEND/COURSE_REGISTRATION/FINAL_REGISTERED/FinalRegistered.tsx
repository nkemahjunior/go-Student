import { departments } from "@/BACKEND/CourseRegistrationDetails/departments"
import { getAllRegisteredCourses } from "@/BACKEND/FinalRegistered/getAllRegisteredCourses"
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"
import { getSemester } from "@/FRONTEND/GENERAL_UI/getSemester"
import Image from "next/image"

async function FinalRegistered() {

    const data = await getAllRegisteredCourses()
    const studentInfo = await getStudentInfo()

    const semester = getSemester()
    const date = new Date()
    const currentYear = date.getFullYear()
    
    
    const major = data?.majorAndTeachers
    const minor = data?.minorAndTeachers
    const elective = data?.electiveAndTeachers

    


    
    return ( 
        <div>
            <div className="  px-8 lg:px-16">
                <hr className="bg-stone-200  mt-4" />

                <div className="mt-4 grid grid-cols-[1fr,1fr,1fr] space-x-8 overflow-x-auto  pl-8 ">

                        <div className=" space-y-4  ">
                            <div className="w-fit font-light text-sm text-center  ">Name:<span className="uppercase  ">{studentInfo?.name}</span> 
                            <p className="border-b-[1px] border-solid border-stone-200 w-[15rem] mt-2"></p></div>

                            <div className="w-fit font-light text-sm text-center">Major:  {departments[studentInfo?.department]}
                            <p className="border-b-[1px] border-solid border-stone-200 w-[15rem] mt-2"></p></div>

                            <div className="w-fit font-light text-sm text-center">Minor:{departments[studentInfo?.minor] || "none"}<p className="border-b-[1px] border-solid border-stone-200 w-[15rem] mt-2"></p></div>
                        </div>

                        <div className="  space-y-8">
                            <div className="flex justify-center pt-4">
                                <div className="relative w-[5rem] h-[5rem]  ">
                                    <Image src={"/logo.png"} alt="school logo" fill/>
                                </div>
                            </div>

                            <h1 className="hidden md:block text-center  font-serif  uppercase font-light">Registered&nbsp;Courses</h1>
                            
                        </div>

                        <div className="space-y-4">
                            <div className="uppercase w-fit font-light text-sm text-center">department:{departments[studentInfo?.department]}<p className="border-b-[1px] border-solid border-stone-200 w-[17rem] mt-2"></p></div>
                            <div className="w-fit font-light text-sm text-center  ">{semester === "sem1" ?   "First Semester":"Second Semester" }<p className="border-b-[1px] border-solid border-stone-200 w-[17rem] mt-2"></p></div>
                            <div className="w-fit font-light text-sm text-center  ">Acamedic Year: {currentYear}/{currentYear + 1}<p className="border-b-[1px] border-solid border-stone-200 w-[17rem] mt-2"></p></div>
                        </div>

                </div> 

                <h1 className=" pl-10 mt-2 md:hidden   font-serif  uppercase font-light">Registered&nbsp;Courses</h1>
                <hr className="bg-stone-200  mb-4" />

                <div className=" overflow-auto">
                    <table className=" w-full   border-stone-300 border border-collapse table-auto">

                        <thead>
                            <tr className="bg-stone-200">
                            <th className="p-4 text-sm bg-stone-200">S/N</th>
                            <th className="p-4 text-sm bg-stone-200">Course&nbsp;Code</th>
                            <th className="p-4 text-sm bg-stone-200">Course&nbsp;Title</th>
                            <th className="p-4 text-sm bg-stone-200">Credit&nbsp;Value</th>
                            <th className="p-4 text-sm bg-stone-200">Course&nbsp;Status</th>
                            <th className="p-4 text-sm bg-stone-200">Course&nbsp;Instructor(s)</th>
                            </tr>
                        </thead> 
            
                        
                        <tbody className="">


                            
                            <tr className="bg-stone-400 ">
                                <td className=" font-light p-4  bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4  bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-serif p-4  bg-stone-400  text-white text-end whitespace-nowrap">Major Courses</td>
                                <td className=" font-light p-4  bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4  bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4  bg-stone-400  text-white  ">&nbsp;</td>
                            </tr>

                            {
                                major?.map((el,i) => (
                                    <tr key={Math.random()} className=" border border-stone-300 border-solid  odd:white even:bg-stone-100">
                                    <td className=" font-light p-4 text-center">{i+1}</td>
                                    <td className=" font-light p-4 text-center uppercase">
                                    {el.courseID}
                                    </td>
                                    <td className=" font-light p-4 text-center uppercase  whitespace-nowrap">
                                    {el.courseName}
                                    </td>
                                    <td className=" font-light p-4 text-center">{el.creditValue}</td>
                                    <td className=" font-light p-4 text-center uppercase ">
                                    C
                                    </td>
    
                                    <td className="font-light p-4 text-center capitalize  whitespace-nowrap">
                                    {el.teacherName}
                                    </td>
    
                                </tr>
                                ))
                            }

                            {/***********************************************************************************************/}

                            
                            <tr className="bg-stone-400 ">
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-serif p-4 bg-stone-400  text-white text-end whitespace-nowrap">Minor Courses</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                            </tr>

                            {
                                minor?.map((el,i) => (
                                    <tr key={Math.random()} className=" border border-stone-300 border-solid  odd:white even:bg-stone-100">
                                    <td className=" font-light p-4 text-center">{i+1}</td>
                                    <td className=" font-light p-4 text-center uppercase">
                                    {el.courseID}
                                    </td>
                                    <td className=" font-light p-4 text-center uppercase   whitespace-nowrap">
                                    {el.courseName}
                                    </td>
                                    <td className=" font-light p-4 text-center">{el.creditValue}</td>
                                    <td className=" font-light p-4 text-center uppercase ">
                                    c
                                    </td>
    
                                    <td className="font-light p-4 text-center capitalize  whitespace-nowrap">
                                        {el.teacherName}
                                    </td>
    
                                </tr>
                                ))
                            }


                               

                            {/***********************************************************************************************/}

                            
                            <tr className="bg-stone-400 ">
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-serif p-4 bg-stone-400  text-white text-end whitespace-nowrap">Elective Courses</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                                <td className=" font-light p-4 bg-stone-400  text-white  ">&nbsp;</td>
                            </tr>

                            
                            {
                                elective?.map((el,i) => (
                                    <tr key={Math.random()} className=" border border-stone-300 border-solid  odd:white even:bg-stone-100">
                                    <td className=" font-light p-4 text-center">{i+1}</td>
                                    <td className=" font-light p-4 text-center uppercase">
                                    {el.courseID}
                                    </td>
                                    <td className=" font-light p-4 text-center uppercase whitespace-nowrap">
                                    {el.courseName}
                                    </td>
                                    <td className=" font-light p-4 text-center">{el.creditValue}</td>
                                    <td className=" font-light p-4 text-center uppercase ">
                                    e
                                    </td>
    
                                    <td className="font-light p-4 text-center capitalize  whitespace-nowrap">
                                    {el.teacherName}
                                    </td>
    
                                </tr>
                                ))
                            }

                            <tr className="border border-stone-300 border-solid  odd:white even:bg-stone-100 ">
                                <td className=" font-light p-6    ">&nbsp;</td>
                                <td className=" font-light p-6    ">&nbsp;</td>
                                <td className=" font-serif p-6  text-lg   text-center ">Total Credit Value</td>
                                <td className=" font-light p-6 text-center  text-lg  ">{studentInfo.totalCredits || "0"}</td>
                                <td className=" font-light p-6    ">&nbsp;</td>
                                <td className=" font-light p-6    ">&nbsp;</td>
                            </tr>




                               
                        </tbody> 
                    </table>
                </div> 
                
            </div>
        </div>
    )
}

export default FinalRegistered


{/* <caption className="p-4 text-center capitalize text-white font-semibold bg-[#198AC2]">
Registered Elective Courses
</caption>  */}