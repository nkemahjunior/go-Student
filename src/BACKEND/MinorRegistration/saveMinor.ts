'use server'

import { revalidatePath } from "next/cache"
import { supabaseServer } from "../General/supabaseServer"
import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"


export async function saveMinor(selectedCourses:courses[],department:string,deptFrom:string,minor:string){

    let noError = false
    try {
        const supabase = supabaseServer()

        const { data: { user },error:getuserError } = await supabase.auth.getUser()


        if(!getuserError){

            const { data, error:updateError } = await supabase
            .from('Profile')
            .update({ minor: minor })
            .eq('id', user?.id)

            if(!updateError){

                const valuesToInsert = selectedCourses.map(el => (
                    { deptID: `${el.departmentID}`, courseID:`${el.cid}`,
                    deptFrom:`${deptFrom}`,courseName:`${el.courseName}`,creditValue:`${el.creditValue}` }
                ))
        
                const {  error } = await supabase
                .from(`${department}Minor`)
                .insert(valuesToInsert)

                if(error){

                    await supabase
                        .from('Profile')
                        .update({ minor: null })
                    .eq('id', user?.id)


                    noError =true
                    throw new Error(error.message)
                }
            } 

            if(updateError){
                noError =true
                throw new Error(updateError.message)
            }

        }

        if(getuserError){
            noError =true
            throw new Error(getuserError.message)
        }


    } catch (error) {
        console.log("error saving minor boy")
        console.log(error)
       
    }

    revalidatePath('/courseRegistration/minor')
    return noError



}