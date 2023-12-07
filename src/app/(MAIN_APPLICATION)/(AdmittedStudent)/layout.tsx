import { checkIfUserIsStudent } from "@/BACKEND/ProtectingRoutes/checkIfUserIsStudent";
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo";
import MainHeader from "@/FRONTEND/GENERAL_UI/MainHeader";
import { redirect } from "next/navigation";


export default async function Applicationlayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const admitionDetail = await checkIfUserIsStudent() 
    const admittedOrNot:boolean = admitionDetail?.at(0)?.admissionAccepted

    // console.log("---------------------------////////////////////------------------------------------------------------------------")
    // console.log("---------------------------------------------------------------------------------------------")

    // console.log(admitionDetail)



    if(admittedOrNot === false) {
      //console.log("redirecting")
      redirect('/generalAdmission')

    }
    else if(admittedOrNot === true){ 
      
      const data = await getStudentInfo()
      const {photo,name}= data
      
      return( 
      <>
        <MainHeader photo = {photo} name={name}/>
        {children}
      </>
      )
    }

}
