import { getMinorCourses } from "@/BACKEND/MinorRegistration/getMinorCourses"
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo"
import MinorRegistration from "@/FRONTEND/COURSE_REGISTRATION/MINOR_REGISTRATION/MinorRegistration"
import { UUID } from "crypto"

export interface minor{
    studID:UUID
    deptID:string
    deptFrom:string
    courseID:string
    courseName:string
    creditValue:number
}

async function page(){

    const data = await getStudentInfo()

    const courses:minor[] | null | undefined = await getMinorCourses()

    return (
        <>
            <MinorRegistration deptFrom={data?.department} courses = {courses} name={data?.name} />
        </>
    )
}

export default page
