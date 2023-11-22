"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { FaUniversity } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BlueLineOnBorder from "./BlueLineOnBorder";





function Application() {
  const [focus, setFocus] = useState(false);
  const [focusValue, setFocusValue] = useState("");

  const [focus2, setFocus2] = useState(false);
  const [focusValue2, setFocusValue2] = useState("");

  const [focus3, setFocus3] = useState(false);
  const [focusValue3, setFocusValue3] = useState("");

  const ref1 = useRef(null)
  const ref2 = useRef(null)

  

  const [focus4, setFocus4] = useState(false);
  const [focusValue4, setFocusValue4] = useState("");

  const [focus5, setFocus5] = useState(false);
  const [focusValue5, setFocusValue5] = useState("");

  const [focus6, setFocus6] = useState(false);
  const [focusValue6, setFocusValue6] = useState("");

  const currentYear = new Date().getFullYear();

  function updateBorder() {
    setFocus((v) => !v);
  }

  function value1(e:any){
    setFocusValue(e.target.value)
    
  }


  function updateBorder2() {
    setFocus2((v) => !v);
  }

  function value2(e:any){
    setFocusValue2(e.target.value)
  }

  function updateBorder3(e:any) {

    //  if(!focus3 === true && !e.target.value) setFocus3(true) 
    //  else  setFocus3(false) 
    //setFocus3(v => !v)

    if(!focus3) setFocus3(true)
    

    //console.log(e.target.type)
   
     
  }

  let test = false

  function updateBorder3ToFalse(e:any){
   
    if(focus3 && e?.target?.type !== 'radio' ) 
    setFocus3(false)
    
    
  }

  function value3(e:any){
    setFocusValue3(e.target.value)
    
  }
  

  function updateBorder4() {
    setFocus4((v) => !v);
  }

  function value4(e:any){
    setFocusValue4(e.target.value)
  }


  function updateBorder5() {
    setFocus5((v) => !v);
  }

  function value5(e:any){
    setFocusValue5(e.target.value)
  }


  function updateBorder6() {
    setFocus6((v) => !v);
  }

  function value6(e:any){
    setFocusValue6(e.target.value)
  }


  


  return (
    <div className="   w-screen  h-fit flex justify-center items-center bg-stone-100"
    onClick={updateBorder3ToFalse}
    >

        <div className="  md:w-[35dvw] bg-white ">
            <div>
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


                <div className="  px-4 ">
                    <form action="" className=" space-y-4">
                        <div className="space-y-6">
                        
                            <div>
                                <label
                                className={`absolute pointer-events-none text-stone-400  mt-0    ${focus || focusValue ? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                `}
                                htmlFor="Matriculation Number"
                                >
                                Your Name( <span className="text-red-500">As on  Birth Certificate</span>)
                                </label> 

                                <input
                                onChange={value1} 
                                type="text"
                                onFocus={updateBorder}
                                onBlur={updateBorder}
                                className={` p-2 outline-none w-full font-light 
                                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus}/>

                            </div> 



                            <div className="mt-8">
                                <label
                                className={`pointer-events-none text-stone-400  
                                
                                                `}
                                htmlFor="date"
                                >
                                Date of Birth
                                </label> 

                                <input 
                                type="date"
                                onChange={value2}
                                onFocus={updateBorder2}
                                onBlur={updateBorder2}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus2}/>

                            </div>

                        



                            <div className="mt-8  ">
                              <p className="text-stone-400">Choose your Admission Type</p>
                              
                              <div className="flex space-x-4 border-b-2  border-stone-400 p-2">

                                <div className="flex items-center space-x-1">

                                  <input  id="general" type="radio" name="admissionType" 
                                  className="p-[0.1rem] appearance-none border-2 border-solid border-stone-400 w-[0.8rem] h-[0.8rem] rounded-[50%] checked:after:block  after:bg-[#0293DB] after:h-full after:w-full after:rounded-[50%]"
                                  onChange={value3}
                                  onFocus={updateBorder3}
                                  //onBlur={updateBorder3ToFalse}

                                  />

                                  <label className="text-stone-400" htmlFor="general">General Admission</label>

                                </div>

                                <div className="flex items-center space-x-1">
                                  
                                  <input  id="entrance" type="radio" name="admissionType" className="p-[0.1rem] appearance-none border-2 border-solid border-stone-400 w-[0.8rem] h-[0.8rem] rounded-[50%] checked:after:block  after:bg-[#0293DB] after:h-full after:w-full after:rounded-[50%] " 
                                  onChange={value3}
                                  onFocus={updateBorder3}
                                  //onBlur={updateBorder3ToFalse}
                                  />

                                  <label className="text-stone-400" htmlFor="entrance">Entrance Exam</label>

                                </div>

                              </div>
                              <BlueLineOnBorder focus={focus3}/>

                            </div>

                        



                            <div className="mt-8">
                                <label
                                className={`absolute pointer-events-none text-stone-400  
                                mt-[0.4rem]    ${focus4 || focusValue4 ? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                                `}
                                htmlFor="password"
                                >
                                Your Email
                                </label> 

                                <input 
                                type="email"
                                onChange={value4}
                                onFocus={updateBorder4}
                                onBlur={updateBorder4}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus4}/>

                            </div>

                        



                            <div className="mt-8">
                                <label
                                className={`absolute pointer-events-none text-stone-400  
                                mt-[0.4rem]    ${focus5 || focusValue5? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                                `}
                                htmlFor="password"
                                >
                                Password
                                </label> 

                                <input 
                                type="password"
                                onChange={value5}
                                onFocus={updateBorder5}
                                onBlur={updateBorder5}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus5}/>

                            </div>

                        



                            <div className="mt-8">
                                <label
                                className={`absolute pointer-events-none text-stone-400  
                                mt-[0.4rem]    ${focus6 || focusValue6 ? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                                `}
                                
                                >
                                Confirm Password
                                </label> 

                                <input 
                                type="password"
                                onChange={value6}
                                onFocus={updateBorder6}
                                onBlur={updateBorder6}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     " type="text"`}
                                
                                />

                                <BlueLineOnBorder focus={focus6}/>

                            </div>

                        
                        </div>

                        <button className="text-center bg-[#0293DB] w-full p-2 text-white shadow-md">Login</button>
                    </form>

                    <div className="flex justify-between mt-4 space-x-2 md:space-x-6">
                        <p className=" text-green-600 font-light">Already have an account?</p>
                        <p className="text-red-600 font-light">Forgot password?</p>
                        <p className=" text-green-600 font-light">Live chat support</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-center font-light">Powered by <span className=" text-orange-600">ZecoJunior</span></p>
                    <p className="text-center font-light">&copy;{currentYear}</p>
                </div>
            </div>
        
        </div>
    </div>
  );
}

export default Application
