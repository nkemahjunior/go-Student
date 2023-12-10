import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabaseServer } from "../supabaseServer";
import { cookies } from "next/headers";


export async function getStudentInfo(){
try {

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    const cookieStore = cookies();
    const supabase = createServerComponentClient(
        { cookies: () => cookieStore },
        { supabaseUrl, supabaseKey }
    );
    // const supabase = supabaseServer()


    const { data: { user },error:getuserError } = await supabase.auth.getUser()


    if(!getuserError){

        let { data: profile, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('id',user?.id )
    
        if(error) throw new Error(error.message)
    
        //console.log(profile?.at(0)) ;
    
        const data = profile?.at(0)
        
        return data
    }

    if(getuserError) throw new Error("could not get the user id")

} catch (error) {
    console.log(  error)
}
}