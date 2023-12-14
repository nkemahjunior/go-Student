import { useState, useTransition } from "react"
import { getSemester } from "../../GENERAL_UI/getSemester"
import { departments, getCoursesForDepartment } from "@/BACKEND/CourseRegistrationDetails/departments"
import toast from "react-hot-toast"
import { IoSaveOutline } from "react-icons/io5";

import LoadingCourses from "../SHARED_COURSE_REG/LoadingCourses"
import { saveSelectedCourses } from "@/BACKEND/CourseRegistrationDetails/saveSelectedCourses"
import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { registeredCourses } from "@/BACKEND/CourseRegistrationDetails/getRegisteredCourses";


export interface courses{
  cid:string
  departmentID:string
  courseName:string
  creditValue:number
  semester:string
  level:number
}

function  SelectCourses( {department,name,toggleHidden,registeredCourses,minor}: {department: string | null | undefined,name:string| null | undefined,toggleHidden:any,registeredCourses:registeredCourses[] | [] | null | undefined ,minor:boolean }):JSX.Element {

  const[loadingCourses,setLoadingCourses] = useState(false)
  const[courseData,setCourseData] = useState<courses[]>([])
  const[holdCourses,setHoldCourses] = useState<courses[] | undefined>()
  const [isPending,startTransition] = useTransition()
  
  async function getLevelAndLoadCoures(e: any) {
    try {

      if(e.target.value === "noOption") return;
      if(!department) throw new Error("why is department null boy")

      let level = e.target.value
  
      setLoadingCourses(true)
      const semester = getSemester()
      
  
      const res = await fetch(`${location.origin}/getCoursesInYourDepartment?semester=${semester}&level=${level}&department=${getCoursesForDepartment[department]}`)
  
      if(!res.ok) return toast.error("error getting courses,please refresh and try again")
  
      const data:courses[] = await res.json()
      setCourseData(data)
  
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoadingCourses(false)
    }
  }

    

  function getSelectedCourse(el:courses){

    if(holdCourses === undefined) setHoldCourses([el])

    if(holdCourses !== undefined){

      const elementAlreadyInArray = [...holdCourses].includes(el)
      if (elementAlreadyInArray) return

      const oldValuesInArray:courses[] = [el, ...holdCourses]
      setHoldCourses(oldValuesInArray)
    } 
      
  }

  async function saveThe_selectedCourses(){
    try {
      if(!holdCourses) return toggleHidden()
      if(!department) throw new Error("why is department null boy")

      const dept = getCoursesForDepartment[department]

      const holdCreditValues = holdCourses.map((el) => Number(el.creditValue) )


    


      const error = await saveSelectedCourses(holdCourses,dept,holdCreditValues)
   
      
      if (error === "maximumCredit") return toast.error("you can not have morethan 36 credit values")
      if (error === true && holdCourses.length < 2) return toast.error("course already registered")
      if (error === true && holdCourses.length > 1) return toast.error("one of the courses is  already registered")

      //router.refresh()
      return toggleHidden()

    } catch (error) {
        console.log(error)
    }

  }

  function deleteAselectedCourse(id:string){
    if(!holdCourses) return

    const hold:courses[] = [...holdCourses].filter(el => el.cid !== id )  
    setHoldCourses(hold)

  }








  return (
    <>
      <div>
          <div className="space-y-2 mt-8">
            <p className=" text-stone-400">
              Select a level to load its courses
            </p>
            <select
              onChange={getLevelAndLoadCoures}
              name="level"
              className=" w-[70%] p-4 outline-none border-b-2 border-stone-200"
            >
              <option value="noOption">no option</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              {/* <option value="500">500</option>
              <option value="600">600</option> */}
            </select>
          </div>

          <div className="mt-8 ">
            <p className="  text-sm">
              Major Courses in{" "}
              <span className=" font-semibold">
                B.sc {departments[department!]}
              </span>
            </p>

            <div className=" md:grid md:grid-cols-[30fr,70fr] md:gap-x-4 w-full ">
              <ul className="divide-y border  border-blue-800 h-[12rem] overflow-auto w-full  ">
                {
                  courseData.length < 1 && <p className="mt-1"> select a level to load courses</p>
                }



                {
                  loadingCourses ? <LoadingCourses/> : 
                  courseData.map(el => (
                      <li key={Math.random()} 
                      className="p-4 cursor-pointer"
                      onClick={() => getSelectedCourse(el)}
                      > 
                          <span className="uppercase">{el.cid}</span>-<span className="capitalize">{el.courseName}</span>
                      </li>
                  ))
                }

              </ul> 
              

              <div  className="w-full overflow-auto">
                <table className=" w-full   border-stone-300 border border-collapse table-auto  ">
                  <caption>
                    Courses in{" "}
                    <span className="uppercase">{name} </span>
                    &apos;s Major
                  </caption>
                  <thead>
                    <tr>
                      <th className="p-4 ">Course code</th>
                      <th className="p-4 ">Course Title</th>
                      <th className="p-4 ">credit Value</th>
                      <th className="p-4 ">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      holdCourses?.map(el =>(
                          <tr key={Math.random()} className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
                              <td className=" font-light p-4 text-center uppercase">
                                  {el.cid}
                              </td>
                              <td className=" font-light p-4 text-center uppercase">
                              {el.courseName}
                              </td>
                              <td className=" font-light p-4 text-center uppercase">
                              {el.creditValue}
                              </td>
                              <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                                <button 
                                onClick={()=> deleteAselectedCourse(el.cid)}
                                className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95"
                                >
                                    {" "}
                                    Remove
                                </button>
                              </td>
                          </tr>
                      ) )
                      }
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2  md:mt-4">
      <button
        // onClick={saveThe_selectedCourses}
        onClick={() => startTransition(() => saveThe_selectedCourses() )}
        className=" bg-[#198AC2] text-white text-sm md:text-base p-2 mt-4 w-[60%] shadow-lg rounded-md lg:hover:scale-95"
      >     
          {isPending ? <span className="flex justify-center items-center  "><span className=" animate-spin"><ImSpinner8/></span>&nbsp;saving </span> :
          <span className="flex justify-center items-center "><IoSaveOutline />&nbsp;save changes</span>}
      </button>
    </div>
      </>
  )
}

//<ImSpinner8/> <IoSaveOutline /> &nbsp;save changes

export default SelectCourses
