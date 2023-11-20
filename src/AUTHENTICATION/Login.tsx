"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import BlueLineOnBorder from "./BlueLineOnBorder";


function Login() {
  const [focus, setFocus] = useState(false);
  const [focusValue, setFocusValue] = useState("");

  const [focus2, setFocus2] = useState(false);
  const [focusValue2, setFocusValue2] = useState("");

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



  return (
    <div className="  w-screen h-screen flex justify-center items-center bg-stone-100">

        <div className="  md:w-[35dvw] bg-white ">
            <div>
                <div className="relative  mb-[4.5rem] md:mb-[2.3rem]">

                    <div className="pt-4 px-4 pb-12   bg-[#0293DB]  space-y-4 ">
                        <div className=" h-fit w-full  flex md:justify-center">
                            <div className="relative h-[5rem] w-[5rem] ">
                            <Image src={"/logo.png"} alt="logo" fill />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-center font-serif font-semibold text-white">
                            University of Zustaland
                            </h1>
                            <p className="text-white font-light">
                            Enter your matriculation number and password in the fields below
                            to sign in
                            </p>
                        </div>
                    </div>


                    <div className="md:flex mr-4   absolute right-0 -mt-8   w-fit  ">
                        <div className="flex  items-center p-2 bg-[#14b8a6] w-fit  space-x-1 md:shadow-md">
                            <MdEmail  style={{color:"#fff"}}/>
                            <p className="  text-white "> Credential Verification</p>
                        </div>

                        <div className="flex justify-end w-full md:flex-none md:justify-normal md:w-fit md:shadow-md">
                            <div className="flex  items-baseline p-2 bg-[#0293DB] w-fit  space-x-1">
                                <FaUniversity style={{color:"#fff"}}/>
                                <p className="  text-white "> Admission</p>
                            </div>
                        </div>
                    </div>
                
                </div>


                <div className="  px-4 ">
                    <form action="" className=" space-y-4">

                        <fieldset>
                            <legend>test</legend>
                            <input type="text" />
                        </fieldset>

                        <div className="space-y-6">
                        
                            <div>
                                <label
                                className={`absolute pointer-events-none text-stone-400  mt-0    ${focus || focusValue? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                `}
                                htmlFor="Matriculation Number"
                                >
                                Matriculation Number
                                </label> 

                                <input
                                type="text" 
                                onChange={value1}
                                onFocus={updateBorder}
                                onBlur={updateBorder}
                                className={` p-2 outline-none w-full font-light 
                                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus}/>                          

                            </div> 

                            <div className="mt-8">
                                <label
                                className={`absolute pointer-events-none text-stone-400  
                                mt-[0.4rem]    ${focus2 || focusValue2? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                                `}
                                htmlFor="password"
                                >
                                Password
                                </label> 

                                <input 
                                type="password"
                                onChange={value2}
                                onFocus={updateBorder2}
                                onBlur={updateBorder2}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus2}/>

                            </div>

                        
                        </div>

                        <button className="text-center bg-[#0293DB] w-full p-2 text-white shadow-md">Login</button>
                    </form>

                    <div className="flex justify-between mt-4 space-x-2">
                        <p className=" text-green-600 font-light">Create an account</p>
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

export default Login;
