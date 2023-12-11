'use server'

import { revalidatePath } from "next/cache";
import { supabaseServer } from "../General/supabaseServer";
import { getStudentInfo } from "../StudentDetails/getStudentInfo";
import { getCoursesForDepartment } from "../CourseRegistrationDetails/departments";


export async function dropMinor(courseID:string){
    try {

        const supabase = supabaseServer();

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
    
        if(!getuserError){

            const userData = await getStudentInfo()
            if(!userData.minor) throw new Error("error getting user's minor boy")

            const department = getCoursesForDepartment[userData.minor]            
            const { error } = await supabase
            .from(`${department}Minor`)
            .delete()
            .eq('studID', user?.id)
            .eq('courseID',courseID)
            console.log(error?.message)

            if(error) throw new Error(error.message)
        }

        if(getuserError) throw new Error(getuserError.message)


        
    } catch (error) {
        console.log("error dropping a minor ")
        console.log(error)
    }

    revalidatePath('/courseRegistration/minor')
}