"use client"
import { usePathname } from "next/navigation"

function MainFooter():JSX.Element {

    const pathname = usePathname()

    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <>

        <div className={`pt-4 md:pt-6 ${pathname === "/courseRegistration/major" || pathname ==="/courseRegistration/minor" 
            || pathname ==="/courseRegistration/elective" || pathname ==="/courseRegistration/required" || pathname ==="/courseRegistration/finalRegistered" ? "bg-stone-400" : "bg-stone-100" } `}>
                    <p className="text-center font-light">Powered by <span className=" text-orange-600">ZecoJunior</span></p>
                    <p className="text-center font-light">&copy;{currentYear}</p>
        </div>
            
        </>
    )
}

export default MainFooter
