'use server'

import { revalidatePath } from "next/cache";
import { supabaseServer } from "../General/supabaseServer"
import { getTotalCredits } from "../General/getTotalCredits";
import { updateCredits } from "../General/updateCredits";

export async function dropAcourse(courseID:string,department:string,creditValue:number){
    try {
        const supabase = supabaseServer();

        const { data: { user },error:getuserError } = await supabase.auth.getUser()


    
        if(!getuserError){

            const currentCredit = await getTotalCredits()
            const newCredit = currentCredit - creditValue
            await updateCredits(newCredit,false)
            //if(updateError) throw new Error("error reducing credit value in dropAcourse function boy")
            
            const { error } = await supabase
            .from(`${department}Students`)
            .delete()
            .eq('studID', user?.id)
            .eq('courseID',courseID)
            console.log(error?.message)

            if(error) throw new Error(error.message)
        }

        if(getuserError) throw new Error(getuserError.message)


        
    } catch (error) {
        console.log("error dropping a course ")
        console.log(error)
    }

    revalidatePath('/courseRegistration/major')
}