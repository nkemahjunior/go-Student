import checkIfUserIsLogin from "@/BACKEND/ProtectingRoutes/checkIfUserIsLogin";
import { redirect } from "next/navigation";


export default async function Applicationlayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await checkIfUserIsLogin();
  if(!session) redirect('/login')

  return <>{children}</>;
}
