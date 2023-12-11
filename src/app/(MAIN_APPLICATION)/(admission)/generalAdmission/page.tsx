
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo";
import AvailablePrograms from "@/FRONTEND/COURSE_REGISTRATION/GENERAL_ADMISSION/AvailablePrograms";

async function page() {
  const data = await getStudentInfo()

  return (
    <>
    <AvailablePrograms name = {data?.name ?? "user"}/>
    </>
  )

}

export default page;
