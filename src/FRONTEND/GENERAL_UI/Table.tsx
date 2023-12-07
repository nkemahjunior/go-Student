import { MdDelete } from "react-icons/md"

function Table({}):JSX.Element {
    return (
        <>
            <table className=" w-full  border-stone-300 border border-collapse table-auto">
                    <caption className="p-4 text-center capitalize text-white font-semibold bg-[#198AC2]">Registered Major Courses</caption>
                    <thead  >
                        <tr>
                            <th className="p-4 ">S/N</th>
                            <th className="p-4">Course Code</th>
                            <th className="p-4">Course Title</th>
                            <th className="p-4">Credit Value</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>

                    <tbody> 
                        <tr className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
                            <td className=" font-light p-4 text-center">1</td>
                            <td className=" font-light p-4 text-center uppercase">CSC405</td>
                            <td className=" font-light p-4 text-center uppercase">artificial intelligence</td>
                            <td className=" font-light p-4 text-center">6</td>
                            <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                                <button className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95"><span><MdDelete  /></span> Drop</button>
                            </td>
                        </tr>
                         
                        <tr className=" border border-stone-300 border-solid p-24 lg:hover:bg-stone-200">
                            <td className=" font-light p-4 text-center">1</td>
                            <td className=" font-light p-4 text-center uppercase">CSC405</td>
                            <td className=" font-light p-4 text-center uppercase">artificial intelligence</td>
                            <td className=" font-light p-4 text-center">6</td>
                            <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                                <button className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95"><span><MdDelete  /></span> Drop</button>
                            </td>
                        </tr>
                       
                    </tbody>
                    
                </table>
        </>
    )
}

export default Table
