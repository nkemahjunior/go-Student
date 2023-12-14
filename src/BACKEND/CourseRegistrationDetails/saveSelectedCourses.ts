'use server';

import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { supabaseServer } from "../General/supabaseServer"
import { revalidatePath } from "next/cache";
import { getStudentInfo } from "../StudentDetails/getStudentInfo";
import { getTotalCredits } from "../General/getTotalCredits";
import { getNewCredits } from "../General/getNewCredits";
import { updateCredits } from "../General/updateCredits";




export async function saveSelectedCourses(selectedCourses:courses[],department:string,creditValueArr:number[]){

    let noError = false
    try {
        const supabase = supabaseServer()

        const currentCredit = await getTotalCredits()
        if(currentCredit   &&  currentCredit >= 36) return "maximumCredit"

        const totalCredits = getNewCredits(currentCredit,creditValueArr)
        if(totalCredits > 36 ) return "maximumCredit"


        const valuesToInsert = selectedCourses.map(el => (
            { deptID: `${el.departmentID}` , courseID:`${el.cid}`,courseName:`${el.courseName}`,creditValue:`${el.creditValue}` }
        ))

        const {  error } = await supabase
        .from(`${department}Students`)
        .insert(valuesToInsert)

        if(error){
            noError =true
            throw new Error(error.message)
        } 

        
       const updateError =  await updateCredits(totalCredits,noError)
       if(updateError) noError = true


    } catch (error) {
        console.log("error saving code")
        console.log(error)
       
    }

    revalidatePath('/courseRegistration/major')
    return noError



}

