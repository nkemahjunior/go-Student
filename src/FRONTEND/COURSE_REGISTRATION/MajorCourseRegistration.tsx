"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import SelectCourses from "./SelectCourses";


function MajorCourseRegistration({department,name}: {department: string,name:string}): JSX.Element {


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
              Registered Major Courses
            </caption>
            <thead>
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
                <td className=" font-light p-4 text-center uppercase">
                  CSC405
                </td>
                <td className=" font-light p-4 text-center uppercase">
                  artificial intelligence
                </td>
                <td className=" font-light p-4 text-center">6</td>
                <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                  <button className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95">
                    <span>
                      <MdDelete />
                    </span>{" "}
                    Drop
                  </button>
                </td>
              </tr>

              <tr className=" border border-stone-300 border-solid p-24 lg:hover:bg-stone-200">
                <td className=" font-light p-4 text-center">1</td>
                <td className=" font-light p-4 text-center uppercase">
                  CSC405
                </td>
                <td className=" font-light p-4 text-center uppercase">
                  artificial intelligence
                </td>
                <td className=" font-light p-4 text-center">6</td>
                <td className=" font-light p-4 text-center capitalize flex items-center justify-center">
                  <button className=" bg-red-600 p-2 text-center text-white flex items-center justify-center shadow-lg rounded-sm lg:hover:scale-95">
                    <span>
                      <MdDelete />
                    </span>{" "}
                    Drop
                  </button>
                </td>
              </tr>
            </tbody>
          </table>


          <div className="flex justify-center mt-2  md:mt-4">
            <button
              onClick={toggleHidden}
              className=" bg-[#198AC2] text-white text-sm md:text-base p-2 mt-4 w-[60%] shadow-lg rounded-md lg:hover:scale-95"
            >
              <span>Add More Major Courses</span>
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

          <SelectCourses department={department} name={name} toggleHidden={toggleHidden}/>
          
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

export default MajorCourseRegistration;
