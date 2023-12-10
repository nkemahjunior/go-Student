'use server'

import { revalidatePath } from "next/cache";
import { supabaseServer } from "../supabaseServer"

export async function dropAcourse(courseID:string,department:string){
    try {

        const supabase = supabaseServer();

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
    
        if(!getuserError){
            
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