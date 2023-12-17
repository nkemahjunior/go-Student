import FinalRegistered from "@/FRONTEND/COURSE_REGISTRATION/FINAL_REGISTERED/FinalRegistered"

function page():JSX.Element {
    return (
        <>
        <div className="border-4 border-solid border-stone-100 w-full h-fit px-2 bg-stone-100 md:px-16 ">
            <div className="border-[1px] border-solid  w-full h-full bg-white -mt-[2rem] md:-mt-[3rem] pt-16 pb-8">
                
                <FinalRegistered/>

            </div>
        </div>
      </>
    )
}

export default page
