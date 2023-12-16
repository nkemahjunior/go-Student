import { UUID } from "crypto"
import { getCoursesForDepartment } from "../CourseRegistrationDetails/departments"
import { supabaseServer } from "../General/supabaseServer"
import { getStudentInfo } from "../StudentDetails/getStudentInfo"
import { PostgrestError } from "@supabase/supabase-js"

export interface electives{
    studID:UUID
    deptID:string
    deptFrom:string
    courseID:string
    courseName:string
    creditValue:number
}




export async function getElectiveCourses(){
    try {
        const supabase = supabaseServer()

        const { data: { user },error:getuserError } = await supabase.auth.getUser()
        if(getuserError) throw new Error(getuserError.message)

        const userData = await getStudentInfo()
        if(!userData.department) return
        const tableName = getCoursesForDepartment[userData.department]

        let { data, error } = await supabase
        .from(`${tableName}TakingElective`)
        .select("*")
        .eq('studID', user?.id)

        if(!data) return 
        if(error) throw new Error(error.message)

        //this data is going to comeback with double values ,so i filter it to remove the double values

        const filteredData = filterDoubleValues(data)
        let holdElectives:any[] = []


        await Promise.all(
        filteredData.map(async (el) => {

            let { data:electiveCourses, error:electiveCoursesError }
                = await supabase
                .from(`${getCoursesForDepartment[el]}Elective`)
                .select('*')
                .eq('studID', user?.id)

                if(electiveCoursesError) throw new Error(electiveCoursesError.message)

                if(!electiveCourses ) return

                //elective courses is going to return an array for each table, so i'm looping over this array and getting out its elements and pushing it to the new array
                electiveCourses.forEach(el => {
                    holdElectives.push( el)
                })

        })
       )
       

        return holdElectives

        
    } catch (error) {
        console.log("error getting elective courses")
        console.log(error)
    }
}





function filterDoubleValues(data:any[]){
    const newArray:any[] = []
    data.forEach((el)=>(
        newArray.includes(el.electiveDepartment) || newArray.push(el.electiveDepartment)
    ))

    return newArray
}