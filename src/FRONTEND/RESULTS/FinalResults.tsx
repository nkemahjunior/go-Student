function FinalResults():JSX.Element {
    return (
        <div className="border-4 border-solid border-stone-100 w-full h-[60dvh] px-2 bg-stone-100 md:px-16 ">
            <div className="border-[1px] border-solid  w-full h-full bg-white -mt-[2rem] md:-mt-[3rem] pt-16">
                <h1 className="text-center  font-semibold text-lg">Final Results</h1>

                <div className=" h-full w-full  flex items-center justify-center">
                    <p className="bg-yellow-400  p-2 text-center w-[80%] text-xs md:text-base">No  results yet .Please contact your course Master to verify</p>
                </div>

            </div>
        </div>
    )
}

export default FinalResults


