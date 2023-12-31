import { departments, departmentsKeys, getCoursesForDepartment } from "@/BACKEND/CourseRegistrationDetails/departments"
import { getSemester } from "@/FRONTEND/GENERAL_UI/getSemester"
import { useState, useTransition } from "react"
import toast from "react-hot-toast"
import { ImSpinner8 } from "react-icons/im"
import { IoSaveOutline } from "react-icons/io5"
import { courses } from "../MAJOR_COURSE_REGISTRATION/SelectCourses"
import LoadingCourses from "../SHARED_COURSE_REG/LoadingCourses"
import { saveMinor } from "@/BACKEND/MinorRegistration/saveMinor"
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"

interface props{
  toggleHidden:any
  deptFrom:string
  name:string
}

function SelectMinor({toggleHidden,deptFrom,name}:props):JSX.Element {
    const[loadingCourses,setLoadingCourses] = useState(false)
    const[courseData,setCourseData] = useState<courses[]>([])
    const[holdCourses,setHoldCourses] = useState<courses[]>()
    const[saving,setSaving] = useState(false)


    const[minor,setMinor] = useState("")

    //const getMinor = (e:any) => setMinor(e.target.value)

    function getMinor(e:any){
      if(minor !== e.target.value) setHoldCourses([])
      setMinor(e.target.value)
    }

    async function getLevelAndLoadCourses(e:any){
      try {
        if(minor.length < 1) return;
        if(e.target.value === "noOption") return;

        const level = e.target.value
        const semester = getSemester()

        setLoadingCourses(true)

        //const userInfo =  await getStudentInfo()



        const res = await fetch(`${location.origin}/getCoursesInYourDepartment?semester=${semester}&level=${level}&department=${getCoursesForDepartment[minor]}`)
        if(!res.ok) return toast.error("error getting courses,please refresh and try again")

        const data:courses[] = await res.json()
        setCourseData(data)
        
        
      } catch (error) {
        console.log("error getting  minor courses boy")
        console.log(error)
      }finally{
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
         if(!deptFrom) throw new Error("why is department null boy")
         
         setSaving(true)
        
       
          const minorDepartment = getCoursesForDepartment[minor] 

          const holdCreditValues = holdCourses.map((el) => Number(el.creditValue) )
          const error = await saveMinor(holdCourses,minorDepartment,deptFrom,minor,holdCreditValues)

          if(error === "maximumCredit") return toast.error("you can not have morethan 36 credit values")
          if(error === "hasMinor") return toast.error("you can not register courses from a different minor")
          if (error === true && holdCourses.length < 2) return toast.error("course already registered")
          if (error === true && holdCourses.length > 1) return toast.error("one of the courses is  already registered")

          return toggleHidden()
        
      } catch (error) {
        console.log(error)
      }finally{
        setSaving(false)
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

          <div className="  md:flex md:space-x-4 md:w-[100%] ">

            <div className="w-[100%]  md:w-[70%] md:space-y-2 mt-2 md:mt-8 ">
                <p className=" text-stone-400">
                  Select Minor
                </p>
                <select
                  onChange={getMinor}
                  name="level"
                  className="w-[100%]    p-4 outline-none border-b-2 border-stone-200 space-y-2  h-[2px]"
                  
                >
                  <option value="noOption">noOption</option>
                  <option value="csc">BSc Computer Science</option>
                  <option value="cengS">BEng Computer Engineering</option>
                  <option value="eng">BA English</option>
                  <option value="hist">BA History</option>
                  <option value="cengM">BEng Mechanical Engineering</option>
                  <option value="phy">BSc Physics</option>

                </select>
              </div>

              <div className="w-[100%]  md:w-[70%] md:space-y-2 mt-2 md:mt-8  ">
                <p className=" text-stone-400">
                  Select a level to load its courses
                </p>
                <select
                  onClick={getLevelAndLoadCourses}
                  onChange={getLevelAndLoadCourses }
                  name="level"
                  className="w-[100%]  p-4 outline-none border-b-2 border-stone-200  h-[2px]"
                >
                  <option value="noOption">no option</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  {/* <option value="500">500</option>
                  <option value="600">600</option> */}
                </select>
              </div>
          </div>
  
            <div className="mt-8 ">
              {
                minor.length > 0 && <p className="  text-sm">
                Minor Courses in{" "}
                <span className=" font-semibold">
                  {departments[minor]}
                </span>
              </p>
              }
  
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
                    <caption className="mt-4 md:mt-0">
                      Courses in{" "}
                      <span className="uppercase">{name} </span>
                      &apos;s Minor
                    </caption>
                    <thead>
                      <tr>
                        <th className="p-4 whitespace-nowrap text-sm ">Course code</th>
                        <th className="p-4 whitespace-nowrap text-sm ">Course Title</th>
                        <th className="p-4 whitespace-nowrap text-sm ">credit Value</th>
                        <th className="p-4 whitespace-nowrap text-sm ">Remove</th>
                      </tr>
                    </thead>
  
                    <tbody>
                      {
                        holdCourses?.map((el,i) => (
                          <tr key={Math.random()} className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
                                <td className=" font-light p-4 text-center uppercase">
                                   {el.cid}
                                </td>
                                <td className=" font-light p-4 text-center uppercase whitespace-nowrap">
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
                        ))
                      }
                    </tbody>
                    
                  </table>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex justify-center mt-2  md:mt-4">
        <button
           onClick={saveThe_selectedCourses}
          //onClick={() => startTransition(() => saveThe_selectedCourses() )}
          className=" bg-[#198AC2] text-white text-sm md:text-base p-2 mt-4 w-[60%] shadow-lg rounded-md lg:hover:scale-95"
        >     
            {saving ? <span className="flex justify-center items-center  "><span className=" animate-spin"><ImSpinner8/></span>&nbsp;saving </span> :
            <span className="flex justify-center items-center "><IoSaveOutline />&nbsp;save changes</span>}
        </button>
      </div>
        </>
    )
}


export default SelectMinor
