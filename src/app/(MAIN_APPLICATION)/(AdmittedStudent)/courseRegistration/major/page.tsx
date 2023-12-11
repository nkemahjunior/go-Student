import { getRegisteredCourses } from "@/BACKEND/CourseRegistrationDetails/getRegisteredCourses"
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"
import MajorCourseRegistration from "@/FRONTEND/COURSE_REGISTRATION/MAJOR_COURSE_REGISTRATION/MajorCourseRegistration"



async function page() {

    const data = await getStudentInfo() 
    
   // const {department, name} = data
    const courses = await getRegisteredCourses(data?.department)
    

    return (
        <>
            <MajorCourseRegistration department={data?.department}  name={data?.name} registeredCourses={courses}/>
        </>
    )
}

export default page
