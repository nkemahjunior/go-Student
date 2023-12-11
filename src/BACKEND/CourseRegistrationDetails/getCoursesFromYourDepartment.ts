import { cookies } from "next/headers";
import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supaabaseRoute } from "../General/supabaseRoute";





export async function getCoursesFromYourDepartment(tableName:string | null,level:string | null,semester:string | null){
    try {

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        const cookieStore = cookies()
        const supabase = createRouteHandlerClient({ cookies: () => cookieStore },{supabaseUrl,supabaseKey})
        
        
        
        if(tableName === null || level === null || semester === null ) throw new Error("tableName or level or semester can not be null boy")

 
        const levelToNumber = Number(level)

        let { data, error } = await supabase
        .from(`${tableName}Courses`)
        .select("*")
        .eq('semester', semester)
        .eq('level',levelToNumber)
    
        if (error) throw new Error(error.message)


        return {data,error}

    } catch (error) {
        //console.log("error getting your department")
        console.log(error)
    }

}