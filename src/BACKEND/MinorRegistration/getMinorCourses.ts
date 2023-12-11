import { UUID } from "crypto"
import { getCoursesForDepartment } from "../CourseRegistrationDetails/departments"
import { supabaseServer } from "../General/supabaseServer"
import { getStudentInfo } from "../StudentDetails/getStudentInfo"




export async function getMinorCourses(){
    try {
        const supabase = supabaseServer()

        const { data: { user },error:getuserError } = await supabase.auth.getUser()

        if(!getuserError){

            const userData = await getStudentInfo()
            if(!userData.minor) return
            const tableName = getCoursesForDepartment[userData.minor]


            let { data, error } = await supabase
            .from(`${tableName}Minor`)
            .select("*")
            .eq('studID', user?.id)

            if(error) throw new Error(error.message)
            
            return data

        }

        if(getuserError) throw new Error(getuserError.message)

        
    } catch (error) {
        console.log("error getting minor courses")
        console.log(error)
    }
}