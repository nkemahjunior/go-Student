'use server'

import { revalidatePath } from "next/cache"
import { supabaseServer } from "../General/supabaseServer"
import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { getStudentInfo } from "../StudentDetails/getStudentInfo"
import { getTotalCredits } from "../General/getTotalCredits"
import { getNewCredits } from "../General/getNewCredits"
import { updateCredits } from "../General/updateCredits"


export async function saveMinor(selectedCourses:courses[],department:string,deptFrom:string,minor:string,creditValueArr:number[]){

    let noError = false
    
    try {
        const supabase = supabaseServer()

        const userData = await getStudentInfo()
        //checking if the courses the user took is from their minor department and not from some other minor department
        if(userData.minor && userData.minor !== minor) return "hasMinor"

        const currentCredit = await getTotalCredits()
        if(currentCredit   &&  currentCredit >= 36) return "maximumCredit"

        const totalCredits = getNewCredits(currentCredit,creditValueArr)
        if(totalCredits > 36 ) return "maximumCredit"

        const { data: { user },error:getuserError } = await supabase.auth.getUser()


        if(!getuserError){

            if(!userData.minor){
                //if the user does not yet have a minor, create a new minor for the student base on which department their courses are from
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

            await updateCredits(totalCredits,noError)
            

            
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