import { useState, useTransition } from "react"
import { ImSpinner8 } from "react-icons/im"
import { IoSaveOutline } from "react-icons/io5"

function SelectElective():JSX.Element {
    const[loadingCourses,setLoadingCourses] = useState(false)
    const[courseData,setCourseData] = useState([])
    const[holdCourses,setHoldCourses] = useState()
    const [isPending,startTransition] = useTransition()
    

  
    return (
      <>
        <div>
          <div className="  md:flex md:space-x-4 md:w-[100%] ">

            <div className="w-[100%]  md:w-[70%] md:space-y-2 mt-2 md:mt-8 ">
              <p className=" text-stone-400">
                Select a level to load its courses
              </p>
              <select
                //onChange={getLevel}
                name="level"
                className="w-[100%]    p-4 outline-none border-b-2 border-stone-200 space-y-2"
                
              >
                <option value="noOption">noOption</option>
                <option value="csc">BSc Computer Science</option>
                <option value="cengS">BEng Computer Engineering</option>
                <option value="eng">BA English</option>
                <option value="hist">BA History</option>
                <option value="cengM">BEng Mechanical Engineering</option>
                <option value="phy">BSc Physics</option>

              </select>
            </div>

            <div className="w-[100%]  md:w-[70%] md:space-y-2 mt-2 md:mt-8  ">
              <p className=" text-stone-400">
                Select a level to load its courses
              </p>
              <select
                //onChange={getLevel}
                name="level"
                className="w-[100%]  p-4 outline-none border-b-2 border-stone-200"
              >
                <option value="noOption">no option</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                {/* <option value="500">500</option>
                <option value="600">600</option> */}
              </select>
            </div>

          </div>
  
          <div className="mt-8 ">
              <p className="  text-sm">
                Major Courses in{" "}
                <span className=" font-semibold">
                  computer science
                </span>
              </p>
  
              <div className=" md:grid md:grid-cols-[30fr,70fr] md:gap-x-4 w-full ">
                <ul className="divide-y border  border-blue-800 h-[12rem] overflow-auto w-full  ">
                  {
                    courseData.length < 1 && <p className="mt-1"> select a level to load courses</p>
                  }
  
  
  
                  {/* {
                    loadingCourses ? <LoadingCourses/> : 
                    courseData.map(el => (
                        <li key={Math.random()} 
                        className="p-4 cursor-pointer"
                        onClick={() => getSelectedCourse(el)}
                        > 
                            <span className="uppercase">{el.cid}</span>-<span className="capitalize">{el.courseName}</span>
                        </li>
                    ))
                  } */}
  
                </ul> 
                
  
                <div  className="w-full overflow-auto">
                  <table className=" w-full   border-stone-300 border border-collapse table-auto  ">
                    <caption>
                      Courses in{" "}
                      <span className="uppercase">zeco suzuki </span>
                      &apos;s Major
                    </caption>
                    <thead>
                      <tr>
                        <th className="p-4 ">Course code</th>
                        <th className="p-4 ">Course Title</th>
                        <th className="p-4 ">credit Value</th>
                        <th className="p-4 ">Remove</th>
                      </tr>
                    </thead>
  
                    <tbody>
                      
                        
                            <tr key={Math.random()} className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
                                <td className=" font-light p-4 text-center uppercase">
                                   csc405
                                </td>
                                <td className=" font-light p-4 text-center uppercase">
                                artificial intelligence
                                </td>
                                <td className=" font-light p-4 text-center uppercase">
                                6
                                </td>
                                <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                                  <button 
                                  //onClick={()=> deleteAselectedCourse(el.cid)}
                                  className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95"
                                  >
                                      {" "}
                                      Remove
                                  </button>
                                </td>
                            </tr>
                            <tr key={Math.random()} className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
                                <td className=" font-light p-4 text-center uppercase">
                                   csc405
                                </td>
                                <td className=" font-light p-4 text-center uppercase">
                                artificial intelligence
                                </td>
                                <td className=" font-light p-4 text-center uppercase">
                                6
                                </td>
                                <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                                  <button 
                                  //onClick={()=> deleteAselectedCourse(el.cid)}
                                  className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95"
                                  >
                                      {" "}
                                      Remove
                                  </button>
                                </td>
                            </tr>
                       
                        
                    </tbody>
                    
                  </table>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex justify-center mt-2  md:mt-4">
        <button
          // onClick={saveThe_selectedCourses}
          //onClick={() => startTransition(() => saveThe_selectedCourses() )}
          className=" bg-[#198AC2] text-white text-sm md:text-base p-2 mt-4 w-[60%] shadow-lg rounded-md lg:hover:scale-95"
        >     
            {isPending ? <span className="flex justify-center items-center  "><span className=" animate-spin"><ImSpinner8/></span>&nbsp;saving </span> :
            <span className="flex justify-center items-center "><IoSaveOutline />&nbsp;save changes</span>}
        </button>
      </div>
        </>
    )
}

export default SelectElective
