import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { supabaseServer } from "../General/supabaseServer"
import { departments, getCoursesForDepartment } from "./departments"
import { PostgrestError } from "@supabase/supabase-js"
import { UUID } from "crypto"

export interface registeredCourses{
    studID:UUID
    courseID:string
    deptID:string
    courseName:string
    creditValue:number
}


export async function getRegisteredCourses( department:string | undefined | null){

    try {

        if(!department ) throw new Error("department can not be null or undefined boy")
 
        const supabase = supabaseServer()

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
        const dept = getCoursesForDepartment[department]

        if(!getuserError){

            if(!user) throw new Error("there is no user boy")

            let { data, error }:{data:registeredCourses[] | [] |  null , error:PostgrestError | null} = await supabase
            .from(`${dept}Students`)
            .select('*')
            .eq('studID',user?.id)
    
            if(error) throw new Error(error.message)

            return data
        }

        if(getuserError) throw new Error("could not get the user id")
        

    } catch (error) {
        console.log(error)
    }
    
}