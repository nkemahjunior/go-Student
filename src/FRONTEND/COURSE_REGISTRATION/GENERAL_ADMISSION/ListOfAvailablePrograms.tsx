function ListOfAvailablePrograms({title,programs}:{title:string,programs:string[] }):JSX.Element {

    const classname = " font-extralight"

    return (
        <div className="bg-white overflow-x-hidden">
            <p className=" uppercase mb-2 ">{title}</p>
            <ol className=" list-decimal  space-y-2 p-8">
                {
                    programs.map((el,i) => <li className ="font-extralight capitalize ml-2" key={i}>{ el}</li> )
                }
            </ol>

        </div>
    )
}

export default ListOfAvailablePrograms
