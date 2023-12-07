import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"
import MajorCourseRegistration from "@/FRONTEND/COURSE_REGISTRATION/MajorCourseRegistration"

async function page() {

    const data = await getStudentInfo()
    const {department, name}= data

    return (
        <>
            <MajorCourseRegistration department={department}  name={name}/>
        </>
    )
}

export default page
