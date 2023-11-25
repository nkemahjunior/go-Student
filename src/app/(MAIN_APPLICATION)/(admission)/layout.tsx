import { checkIfUserIsStudent } from "@/BACKEND/ProtectingRoutes/checkIfUserIsStudent";
import { redirect } from "next/navigation";

export default async function Applicationlayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  
      const admitionDetail = await checkIfUserIsStudent()
      const admittedOrNot = admitionDetail?.at(0)?.admissionAccepted
  
      if(admittedOrNot === true) redirect('/student')
  
    return <>{children}</>;
  }
  