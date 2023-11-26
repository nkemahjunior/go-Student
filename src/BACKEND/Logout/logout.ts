import toast from "react-hot-toast"

export async function logout(){
    const res = await fetch(`${location.origin}/auth/logout`,{
        method:"post"
    })

    if(!res.ok ) toast.error("error logging out,please try again")
    
}