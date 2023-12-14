import { getStudentInfo } from "../StudentDetails/getStudentInfo"


export async function getTotalCredits(){
    const studentInfo = await getStudentInfo()
    const currentCredit = studentInfo?.totalCredits

    return currentCredit
}