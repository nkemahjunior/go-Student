import { supabaseServer } from "./supabaseServer"


export async function updateCredits(totalCredits:number,noError:boolean){
    try {

        const supabase = supabaseServer()
        
        const { data: { user },error:getuserError } = await supabase.auth.getUser()
        if(getuserError) throw new Error(getuserError.message)

        const { error:creditsError } = await supabase
        .from('Profile')
        .update({ totalCredits: totalCredits })
        .eq('id', user?.id)

        if(creditsError){
            noError = true
            throw new Error(creditsError.message)
        }

        return noError

    } catch (error) {
        console.log("error inserting updated credits boy")
        console.log(error)
    }
}