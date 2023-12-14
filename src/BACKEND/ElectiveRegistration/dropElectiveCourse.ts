'use server'

import { revalidatePath } from "next/cache";
import { supabaseServer } from "../General/supabaseServer";
import { getStudentInfo } from "../StudentDetails/getStudentInfo";
import { departmentKeys, getCoursesForDepartment } from "../CourseRegistrationDetails/departments";
import { getTotalCredits } from "../General/getTotalCredits";
import { updateCredits } from "../General/updateCredits";



export async function dropElectiveCourse(cid:string,electiveDept:string,creditValue:number){
    try {

        const supabase = supabaseServer();

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
        if(getuserError) throw new Error(getuserError.message)

        const userData = await getStudentInfo()
        if(!userData.department) throw new Error("error getting user's major in drop elective function boy")

        const department  =getCoursesForDepartment[userData.department]
        const { error } = await supabase
        .from(`${department}TakingElective`)
        .delete()
        .eq('studID', user?.id)
        .eq('cid',cid)
    
        if(error) throw new Error(error.message)


        const electiveDepartment = departmentKeys[electiveDept]
       
        const { error:error2 } = await supabase
        .from(`${electiveDepartment}Elective`)
        .delete()
        .eq('studID', user?.id)
        .eq('courseID',cid)

        if(error2) throw new Error(error2.message)

        const currentCredit = await getTotalCredits()
        const newCredit = currentCredit - creditValue
        await updateCredits(newCredit,false)




        
    } catch (error) {
        console.log("error dropping an elective course boy ")
        console.log(error)
    }

    revalidatePath('/courseRegistration/elective')
}