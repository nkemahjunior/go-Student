import Application from "@/AUTHENTICATION/Application";
import checkIfUserIsLogin from "@/BACKEND/checkIfUserIsLogin";
import { redirect } from "next/navigation";

export const revalidate = 1

export default async function page(){

    const session = await checkIfUserIsLogin()
    if(session) redirect('/')

    return (
        <Application/>
    );
}