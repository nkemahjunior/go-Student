'use server';

import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { supabaseServer } from "../General/supabaseServer"
import { revalidatePath } from "next/cache";




export async function saveSelectedCourses(selectedCourses:courses[],department:string){

    let noError = false
    try {

       //console.log("--------------------------------------------------------------------------------------------------------")

        const supabase = supabaseServer()

        const valuesToInsert = selectedCourses.map(el => (
            { deptID: `${el.departmentID}` , courseID:`${el.cid}`,courseName:`${el.courseName}`,creditValue:`${el.creditValue}` }
        ))

        const {  error } = await supabase
        .from(`${department}Students`)
        .insert(valuesToInsert)

        //let noError; 

        //if(error) noError = true

        //console.log(error?.message)
        if(error){
            noError =true
            throw new Error(error.message)
        } 

       
        

    } catch (error) {
        console.log("error saving code")
        console.log(error)
       
    }

    revalidatePath('/courseRegistration/major')
    return noError



}

