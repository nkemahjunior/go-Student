import { departmentKeys, getCoursesForDepartment } from "../CourseRegistrationDetails/departments";
import { getRegisteredCourses } from "../CourseRegistrationDetails/getRegisteredCourses";
import { getElectiveCourses } from "../ElectiveRegistration/getElectiveCourses";
import { supabaseServer } from "../General/supabaseServer";
import { getMinorCourses } from "../MinorRegistration/getMinorCourses";
import { getStudentInfo} from "../StudentDetails/getStudentInfo";


export async function getAllRegisteredCourses(){
    /**
     * fetch major course
     * fetch minor if any
     * fetch electives
     * 
     * to fetch major go to student profile table ,take the major and go their department and get the courses where their id's are equal
     * 
     * to fetch the minor go to the student profile table take the minor ,and go to the the department where they are minoring and get all the courses
     * 
     * 
     * to fetch the electives, since you already got their department ,go their department and ask which electives is the student doing ,then do to the respective elective departments and get the courses
    */

    try {

        const supabase =  supabaseServer()

        const studentInfo = await getStudentInfo()
        const department = getCoursesForDepartment[studentInfo.department]
        const minorDepartment = getCoursesForDepartment[studentInfo?.minor]
    
        const major = await getRegisteredCourses(studentInfo.department)
        const minor = await getMinorCourses()
        const elective = await  getElectiveCourses()

        const majorAndTeachers:any[]= []
        const minorAndTeachers:any[]= []
        const electiveAndTeachers:any[]= []

        // console.log(major)

        if(major){
            

            await Promise.all(
                major.map(async (el) => {
                
                    let { data, error } = await supabase
                    .from(`${department}Lecturers`)
                    .select('teacherID')
                    .eq("courseID",el?.courseID)

                    // console.log("---------------------------------------")
                    // console.log(data?.at(0)?.teacherID)
                    
                    if(error) throw new Error(error.message)
    
                    
                    let { data: teachers, error:teacherError } = await supabase
                    .from('teachers')
                    .select('teacherName')
                    .eq("teacherID",data?.at(0)?.teacherID)

                    if(teacherError) throw new Error(teacherError.message)

                    majorAndTeachers.push({...el,teacherName:teachers?.at(0)?.teacherName})

            })
            )
        }


        if(minor){
            

           await Promise.all(
                minor.map( async (el) => {
                    let { data, error } = await supabase
                    .from(`${minorDepartment}Lecturers`)
                    .select('teacherID')
                    .eq("courseID",el?.courseID)

                    if(error) throw new Error(error.message)

                    let { data: teachers, error:teacherError } = await supabase
                    .from('teachers')
                    .select('teacherName')
                    .eq("teacherID",data?.at(0)?.teacherID)

                    if(teacherError) throw new Error(teacherError.message)

                    minorAndTeachers.push({...el,teacherName:teachers?.at(0)?.teacherName})
                })
            )
        }


        //console.log(elective)


        if(elective){
            

            await Promise.all(elective.map( async (el) => {
                let { data, error } = await supabase
                .from(`${departmentKeys[el.deptID]}Lecturers`)
                .select('teacherID')
                .eq("courseID",el?.courseID)

                if(error) throw new Error(error.message)

                let { data: teachers, error:teacherError } = await supabase
                .from('teachers')
                .select('teacherName')
                .eq("teacherID",data?.at(0)?.teacherID)

                if(teacherError) throw new Error(teacherError.message)

                electiveAndTeachers.push({...el,teacherName:teachers?.at(0)?.teacherName})
                
            }) )
        }





        return{
            majorAndTeachers,
            minorAndTeachers,
            electiveAndTeachers
        }



        

    } catch (error) {
        console.log(error)
    }

}