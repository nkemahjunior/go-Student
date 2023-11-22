import Image from "next/image"

function ApplyHeader() {
    return (
        <div className="relative  mb-[4.5rem] md:mb-[2.3rem]">

            <div className="pt-4 px-4 pb-12   bg-[#0293DB]  space-y-4 ">
                <div className=" h-fit w-full  flex md:justify-center">
                    <div className="relative h-[5rem] w-[5rem] ">
                    <Image src={"/logo.png"} alt="logo" fill />
                    </div>
                </div>

                <div >
                    <h1 className="text-center font-serif font-semibold text-white">
                    University of Zustaland
                    </h1>
                    <p className="md:text-center  text-white font-light">
                    Apply for Admission into the University of Zustaland
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default ApplyHeader
