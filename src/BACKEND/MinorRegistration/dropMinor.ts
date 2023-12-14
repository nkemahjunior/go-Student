'use server'

import { revalidatePath } from "next/cache";
import { supabaseServer } from "../General/supabaseServer";
import { getStudentInfo } from "../StudentDetails/getStudentInfo";
import { getCoursesForDepartment } from "../CourseRegistrationDetails/departments";
import { getTotalCredits } from "../General/getTotalCredits";
import { updateCredits } from "../General/updateCredits";


export async function dropMinor(courseID:string,creditValue:number){
    try {

        const supabase = supabaseServer();

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
        if(getuserError) throw new Error(getuserError.message)


        const userData = await getStudentInfo()
        if(!userData.minor) throw new Error("error getting user's minor boy")

        const currentCredit = await getTotalCredits()
        const newCredit = currentCredit - creditValue
        await updateCredits(newCredit,false)

        const department = getCoursesForDepartment[userData.minor]            
        const { error } = await supabase
        .from(`${department}Minor`)
        .delete()
        .eq('studID', user?.id)
        .eq('courseID',courseID)
     

        if(error) throw new Error(error.message)
     

        


        
    } catch (error) {
        console.log("error dropping a minor ")
        console.log(error)
    }

    revalidatePath('/courseRegistration/minor')
}