import { supabaseServer } from "../supabaseServer";


export async function getStudentInfo(){
try {
    const supabase = supabaseServer()


    const { data: { user },error:getuserError } = await supabase.auth.getUser()


    if(!getuserError){

        let { data: profile, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('id',user?.id)
    
        if(error) throw new Error(error.message)
    
        //console.log(profile?.at(0)) ;
    
        const data = profile?.at(0)
        
        return data
    }


    


    
} catch (error) {
    console.log(  error)
}
}