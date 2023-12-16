import Image from "next/image"
import Link from "next/link"
import { FaUniversity } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function LoginHeader():JSX.Element {
    return (
        <div className="relative  mb-[4.5rem] md:mb-[2.3rem]">

        <div className="pt-4 px-4 pb-12   bg-[#0293DB]  space-y-4 ">
            <div className=" h-fit w-full  flex md:justify-center">
                <div className="relative h-[5rem] w-[5rem] ">
                <Image src={"/logo.png"} alt="logo" fill />
                </div>
            </div>

            <div>
                <h1 className="text-center font-serif font-semibold text-white">
                University of Zustaland
                </h1>
                <p className="text-white font-light">
                Enter your matriculation number and password in the fields below
                to sign in
                </p>
            </div>
        </div>


        <div className="md:flex mr-4   absolute right-0 -mt-8   w-fit  ">
            <div className="flex  items-center p-2 bg-[#14b8a6] w-fit  space-x-1 md:shadow-md">
                <MdEmail  style={{color:"#fff"}}/>
                <p className="  text-white "> Credential Verification</p>
            </div>

            <div className="flex justify-end w-full md:flex-none md:justify-normal md:w-fit md:shadow-md">
                <div className="flex  items-baseline p-2 bg-[#0293DB] w-fit  space-x-1">
                    <FaUniversity style={{color:"#fff"}}/>
                    <Link href={"/apply"} className="block" ><p className="  text-white "> Admission</p></Link>
                </div>
            </div>
        </div>
    
    </div>
    )
}

export default LoginHeader
