import { getCoursesForDepartment } from "@/BACKEND/CourseRegistrationDetails/departments"
import { dropAcourse } from "@/BACKEND/CourseRegistrationDetails/dropAcourse"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import toast from "react-hot-toast"
import { ImSpinner8 } from "react-icons/im"
import { MdDelete } from "react-icons/md"


function DropButton({cid,department,creditValue}:{cid:string,department:string | null | undefined,creditValue:number}):JSX.Element {

    const [isPending,startTransition] = useTransition()
    

    const router = useRouter()
    const [dropping,setDropping] = useState(false)

    async function dropCourse(courseID:string){
        try {

          if(!department) throw new Error("why is department null boy")
            
          const dept = getCoursesForDepartment[department]
          setDropping(true)
    
          await dropAcourse(courseID,dept,creditValue)
          //router.refresh()
    
        } catch (error) {
          console.log(error)
        }finally{
          setDropping(false)
        }
      }

    return (
        <>
            <button  
                // onClick={()=> dropCourse(cid)}
                onClick={()=> startTransition(()=> dropCourse(cid)) }
                className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95">
                {
                    isPending ? <span className="flex justify-center items-center "><span className="animate-spin"><ImSpinner8/></span>&nbsp;Dropping</span> :  <span className="flex justify-center items-center"><MdDelete />&nbsp;Drop</span> 
                }
            </button>
        </>
    )
}

export default DropButton
