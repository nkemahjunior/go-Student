import { checkIfUserIsStudent } from "@/BACKEND/ProtectingRoutes/checkIfUserIsStudent";
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo";
import MainFooter from "@/FRONTEND/GENERAL_UI/MainFooter";
import MainHeader from "@/FRONTEND/GENERAL_UI/MainHeader";
import { redirect } from "next/navigation";


export default async function Applicationlayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const admitionDetail = await checkIfUserIsStudent() 
  const admittedOrNot = admitionDetail?.at(0)?.admissionAccepted

  if(admittedOrNot === false || admittedOrNot === null || admittedOrNot === undefined) {

    redirect('/generalAdmission')

  }
  else if(admittedOrNot === true){ 
    
    const data = await getStudentInfo()

    
    return( 
    <>
      <MainHeader photo = {data?.photo} name={data?.name}/>
      {children}

      <MainFooter/>
    </>
    )
  }

}
