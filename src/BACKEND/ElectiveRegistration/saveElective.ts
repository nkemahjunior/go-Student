'use server'

import { revalidatePath } from "next/cache"
import { supabaseServer } from "../General/supabaseServer"
import { courses } from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/SelectCourses"
import { getStudentInfo } from "../StudentDetails/getStudentInfo"
import { getCoursesForDepartment } from "../CourseRegistrationDetails/departments"


export async function saveElective(selectedCourses:courses[],department:string,deptFrom:string,electiveDept:string){

    let noError = false
    try {
        const supabase = supabaseServer()

        const { data: { user },error:getuserError } = await supabase.auth.getUser()

        if(getuserError) noError = true
        if(getuserError) throw new Error("error getting user id")

        const studentInfo = await getStudentInfo()

        if(!studentInfo.department) noError = true
        if(!studentInfo.department) throw new Error("error getting student info in the saveElective code block")

        const studentDepartment = getCoursesForDepartment[studentInfo.department]

        const takingElectivesValues = selectedCourses.map(el => (
            {studID:user?.id,cid:el.cid,electiveDepartment:electiveDept}
        ))

        
        const {error:electiveDepartmentError } = await supabase
        .from(`${studentDepartment}TakingElective`)
        .insert(takingElectivesValues)       

        if(electiveDepartmentError) noError = true
        if(electiveDepartmentError) throw new Error(electiveDepartmentError.message)


        const valuesToInsert = selectedCourses.map(el => (
            { deptID: `${el.departmentID}`, courseID:`${el.cid}`,
            deptFrom:`${deptFrom}`,courseName:`${el.courseName}`,creditValue:`${el.creditValue}` }
        ))

        const {  error } = await supabase
        .from(`${department}Elective`)
        .insert(valuesToInsert)

        if(error){
            await supabase
            .from(`${studentDepartment}TakingElective`)
            .delete()
            .eq('id', user?.id)
            .eq('electiveDepartment',electiveDept)


            noError=true
            throw new Error(error.message)
        }



    } catch (error) {
        console.log("error saving elective boy")
        console.log(error)
       
    }

    revalidatePath('/courseRegistration/elective')
    return noError



}