'use server'

import { revalidatePath } from "next/cache"
import { supabaseServer } from "../General/supabaseServer"
import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { getStudentInfo } from "../StudentDetails/getStudentInfo"


export async function saveMinor(selectedCourses:courses[],department:string,deptFrom:string,minor:string){

    let noError = false
    
    try {
        const supabase = supabaseServer()

        const userData = await getStudentInfo()
        if(userData.minor && userData.minor !== minor) return "hasMinor"

        const { data: { user },error:getuserError } = await supabase.auth.getUser()


        if(!getuserError){

            //const userData = await getStudentInfo()
            //if(userData.minor) throw new Error("error getting user's minor boy")

            if(!userData.minor){
                const { data, error:updateError } = await supabase
                .from('Profile')
                .update({ minor: minor })
                .eq('id', user?.id)

             if(updateError) {
                noError = true
                throw new Error(updateError.message)
             }
            }

            

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