import { getElectiveCourses } from "@/BACKEND/ElectiveRegistration/getElectiveCourses"
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"
import ElectiveRegistration from "@/FRONTEND/COURSE_REGISTRATION/ELECTIVE_REGISTRATION/ElectiveRegistration"

async function page() {

    const data = await getStudentInfo()

    const courses  = await getElectiveCourses()

    //console.log(courses)

    return (
        <>
            <ElectiveRegistration deptFrom = {data?.department} courses={courses} name={data?.name} />
        </>
    )
}

export default page
