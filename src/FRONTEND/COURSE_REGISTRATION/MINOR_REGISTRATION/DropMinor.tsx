


import { dropMinor } from "@/BACKEND/MinorRegistration/dropMinor"
import { useState, useTransition } from "react"
import { ImSpinner8 } from "react-icons/im"
import { MdDelete } from "react-icons/md"

function DropMinor({cid,creditValue}:{cid:string,creditValue:number}):JSX.Element {
    const [isPending,startTransition] = useTransition()
    


    const [dropping,setDropping] = useState(false)

    async function dropCourse(courseID:string){
        try {

          //setDropping(true)
    
          await dropMinor(courseID,creditValue)
          //router.refresh()
    
        } catch (error) {
          console.log(error)
         }//finally{
        //   setDropping(false)
        // }
      }

    return (
        <>
            <button  
                //onClick={()=> dropCourse(cid)}
                onClick={()=> startTransition(()=> dropCourse(cid)) }
                className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95">
                {
                    isPending ? <span className="flex justify-center items-center "><span className="animate-spin"><ImSpinner8/></span>&nbsp;Dropping</span> :  <span className="flex justify-center items-center"><MdDelete />&nbsp;Drop</span> 
                }
            </button>
        </>
    )
}

export default DropMinor
