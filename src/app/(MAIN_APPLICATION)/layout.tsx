import checkIfUserIsLogin from "@/BACKEND/checkIfUserIsLogin"
import { redirect } from "next/navigation"

export const revalidate = 1

export default async function Applicationlayout({children}:{children: React.ReactNode}){

   
        const session = await checkIfUserIsLogin()
        if(!session) redirect('/login')

    return (
        <>
        
            {children}
        
        
        </>
    )
}