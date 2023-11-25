"use client";

import { useRouter } from "next/navigation";

function Redirect() {
    const router = useRouter()
    router.back()
    
    return (
        <>
            
        </>
    )
}

export default Redirect
