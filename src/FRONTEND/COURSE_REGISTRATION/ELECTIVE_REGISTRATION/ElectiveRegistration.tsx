"use client"
import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import DropElective from "./DropElective";
import { IoIosAdd } from "react-icons/io";
import SelectElective from "./SelectElective";
import { electives } from "@/BACKEND/ElectiveRegistration/getElectiveCourses";

interface props{
  deptFrom:string
  courses:electives[] | undefined | any[]
  name:string
}

function ElectiveRegistration({deptFrom,courses,name}:props):JSX.Element {
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden((v) => !v);
  

  
    const variants = {
      initial: {
        width: "0%",
      },
  
      animate: {
        width: "100%",
        transition: {
          duration: 0.5,
          type: "spring",
          ease: "anticipate",
          //staggerChildren:0.15
        },
      },
  
      exit: {
        opacity: 0.1,
        width: "0%",
        //height: "0",
  
        transition: {
          duration: 0.5,
          ease: "anticipate",
          // staggerChildren:0.15,
          // staggerDirection: -1,
          // when:"afterChildren"
        },
      },
    };
  
    const variants2 = {
      initial: { width: "0%" },
  
      animate: {
        width: "100%",
        transition: {
          duration: 1,
          type: "spring",
          //staggerChildren:0.15,
        },
      },
  
      exit: {
        width: "0%",
        transition: {
          duration: 0.5,
          //staggerChildren:5,
          // staggerDirection: -1,
          when: "afterChildren",
        },
      },
    };
  
  
  
    return (
      <>
      
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()}
            variants={variants}
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${hidden ? "" : "hidden"}     overflow-x-auto mt-8 `}
          >
            <table className=" w-full  border-stone-300 border border-collapse table-auto">
              <caption className="p-4 text-center capitalize text-white font-semibold bg-[#198AC2]">
                Registered Elective Courses
              </caption>
              <thead>
                <tr>
                  <th className="p-4 text-sm whitespace-nowrap ">S/N</th>
                  <th className="p-4 text-sm whitespace-nowrap">Course Code</th>
                  <th className="p-4 text-sm whitespace-nowrap">Course Title</th>
                  <th className="p-4 text-sm whitespace-nowrap">Credit Value</th>
                  <th className="p-4 text-sm whitespace-nowrap">Action</th>
                </tr>
              </thead>
  
              <tbody>
                
                  
              {
                courses?.map((el,i) => (
                  <tr key={Math.random()} className=" border border-stone-300 border-solid lg:hover:bg-stone-200 ">
                    <td className=" font-light p-4 text-center">{i+1}</td>
                    <td className=" font-light p-4 text-center uppercase">
                      {el.courseID}
                    </td>
                    <td className=" font-light p-4 text-center uppercase whitespace-nowrap">
                      {el.courseName}
                    </td>
                    <td className=" font-light p-4 text-center">{el.creditValue}</td>
                    <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                      <DropElective cid={el.courseID} electDept={el.deptID} creditValue={el.creditValue} />
                    </td>
                  </tr>
                ))
              }

  
                
              </tbody>
            </table>
  
  
            <div className="flex justify-center mt-2  md:mt-4">
              <button
                onClick={toggleHidden}
                className=" bg-[#198AC2] text-white text-sm md:text-base p-2 mt-4 w-[60%] shadow-lg rounded-md lg:hover:scale-95"
              >
                <span className="flex justify-center items-center"><IoIosAdd/> &nbsp;Add More Elective Courses</span>
              </button>
          </div>
            
          </motion.div>
        </AnimatePresence>
  
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()}
            variants={variants2}
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            className={`  ${hidden ? "hidden" : ""}      `}
          > 
  
            <SelectElective toggleHidden={toggleHidden} deptFrom={deptFrom}  name={name} />
            
          </motion.div>
        </AnimatePresence>
  
        {/* <div className="flex justify-center mt-2  md:mt-4">
          <button
            onClick={toggleHidden}
            className=" bg-[#198AC2] text-white text-sm md:text-base p-2 mt-4 w-[60%] shadow-lg rounded-md lg:hover:scale-95"
          >
            {" "}
            <span></span>{" "}
            {hidden ? (
              <span>Add More Major Courses</span>
            ) : (
              <span> save changes</span>
            )}
          </button>
        </div> */}
  
        <hr className="w-full bg-stone-200 mt-4 md:mt-8" />
      </>
    );
}

export default ElectiveRegistration
