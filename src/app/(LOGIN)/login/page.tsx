import Login from "@/AUTHENTICATION/Login";
import checkIfUserIsLogin from "@/BACKEND/ProtectingRoutes/checkIfUserIsLogin";
import { checkIfUserIsStudent } from "@/BACKEND/ProtectingRoutes/checkIfUserIsStudent";
import { redirect } from "next/navigation";

export const revalidate = 1;

export default async function page() {
  const session = await checkIfUserIsLogin();
  if(session) redirect('/')


  return (
    <>
      <Login />
    </>
  );
}
