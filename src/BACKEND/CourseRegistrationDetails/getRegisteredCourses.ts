import { courses } from "@/FRONTEND/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { supabaseServer } from "../supabaseServer"
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


export async function getRegisteredCourses( department:string){
    try {

        const supabase = supabaseServer()

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
        const dept = getCoursesForDepartment[department]

        if(!getuserError){
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