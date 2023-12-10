import { getRegisteredCourses } from "@/BACKEND/CourseRegistrationDetails/getRegisteredCourses"
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"
import MajorCourseRegistration from "@/FRONTEND/MAJOR_COURSE_REGISTRATION/MajorCourseRegistration"

async function page() {

    const data = await getStudentInfo()
    const {department, name}= data
    const courses = await getRegisteredCourses(department)
    

    return (
        <>
            <MajorCourseRegistration department={department}  name={name} registeredCourses={courses}/>
        </>
    )
}

export default page
