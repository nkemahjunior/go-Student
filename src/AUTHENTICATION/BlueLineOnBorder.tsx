function BlueLineOnBorder( {focus}:{focus:boolean}) {
    return (
        <div  className="  -mt-[2px]  relative flex justify-center ">
            <div
            className={`bg-[#0293DB]   h-[0.2rem]  ${
                focus ? "w-[1rem] animate-animateBorder" : " animate-BorderReduce"
            }  `}
            ></div>
        </div>
    )
}

export default BlueLineOnBorder
