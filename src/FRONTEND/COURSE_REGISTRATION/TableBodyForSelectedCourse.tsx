// import { useState } from "react"
// import { courses } from "./SelectCourses"

// function TableBodyForSelectedCourse({coursesArray}:{coursesArray:Array<courses>}):JSX.Element {
//     console.log(coursesArray)
//     return (
//         <>
//             <tbody>
//                 {
//                     coursesArray?.map(el => (
//                         <tr key={Math.random()} className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
//                         <td className=" font-light p-4 text-center uppercase">
//                             {el.cid}
//                         </td>
//                         <td className=" font-light p-4 text-center uppercase">
//                             {el.courseName}
//                         </td>
//                         <td className=" font-light p-4 text-center uppercase">
//                             {el.creditValue}
//                         </td>
//                         <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
//                             <button className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95">
//                             {" "}
//                             Remove
//                             </button>
//                         </td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </>
//     )
// }

// export default TableBodyForSelectedCourse
