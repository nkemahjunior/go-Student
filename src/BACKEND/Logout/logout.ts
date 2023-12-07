import { revalidatePath } from "next/cache"
import toast from "react-hot-toast"

export async function logout(){
    const res = await fetch(`${location.origin}/auth/logout`,{
        method:"post"
    })

    revalidatePath("/generalAdmission")

    if(!res.ok ) toast.error("error logging out,please try again")
    
}