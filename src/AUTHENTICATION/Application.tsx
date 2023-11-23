"use client";

import ApplyHeader from "./ApplyHeader"
import { useState, useRef } from "react";

import BlueLineOnBorder from "./BlueLineOnBorder";
import { useForm,SubmitHandler } from "react-hook-form";

enum admissionType {
  general ="general",
  entrance = "entrance"
}

interface formLabels {

  names:string
  dateOfBirth:string
  admission: admissionType
  email:string
  password:string
  confirmPassword:string


}



function Application() {

  const { register,formState: { errors }, handleSubmit } = useForm<formLabels>()

  const onSubmit: SubmitHandler<formLabels> = (data) => console.log(data)

  // function onSubmit(data):SubmitHandler<formLabels>{
  //   console.log(data)
  //   return data;
  // }

  const [passwordMatch1, setPasswordMatch1] = useState("")
  const [passwordMatch2, setPasswordMatch2] = useState("")
  const [passwordDontMatch,setPasswordDontMatch] = useState(false)
  const [passwordDontMatch2,setPasswordDontMatch2] = useState(false)


  const [focus, setFocus] = useState(false);
  const [focusValue, setFocusValue] = useState("");

  const [focus2, setFocus2] = useState(false);
  const [focusValue2, setFocusValue2] = useState("");

  const [focus3, setFocus3] = useState(false);
  const [focusValue3, setFocusValue3] = useState("");



  

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
    setPasswordMatch1(e.target.value)

    if(passwordMatch2.length > 0){
      console.log(passwordMatch2)
      if(e.target.value !== passwordMatch2){
        setPasswordDontMatch(true)
      }else{
        setPasswordDontMatch(false)
      }
    }
  }


  function updateBorder6() {
    setFocus6((v) => !v);
  }

  function value6(e:any){
    setFocusValue6(e.target.value)
    setPasswordMatch2(e.target.value)
    //console.log(e.target.value)
    
    if(e.target.value !== passwordMatch1 ){
      setPasswordDontMatch(true)
    }else{
      setPasswordDontMatch(false)
    } 

  }

  function correctPassword():JSX.Element | undefined{
    if(passwordMatch2.length > 0 ){
      return <p className='text-green-500'> passwords  match ✔</p>
    }
  }


  
  


  return (
    <div className="   w-screen  h-fit flex justify-center items-center bg-stone-100"
    onClick={updateBorder3ToFalse}
    >

        <div className="  md:w-[35dvw] bg-white ">
            <div>
                <ApplyHeader/>


                <div className="  px-4 ">
                    <form action="" className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                                
                                
                                type="text"
                                onFocus={updateBorder}
                               
                                {...register("names",{
                                  pattern: /^[A-Za-z0-9" "]+$/i,
                                  required:true,
                                  maxLength:30,
                                  
                                  onChange:value1,
                                  onBlur:updateBorder
                                })}
                                className={` p-2 outline-none w-full font-light 
                                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus}/>

                                { errors.names?.type === "required" && (
                                    <p role="alert" className='text-red-500'> name is required</p>
                                )}
                                { errors.names?.type === "pattern" && (
                                    <p role="alert" className='text-red-500'> name can include only letters</p>
                                )}

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
                                
                                onFocus={updateBorder2}
                                
                                {...register("dateOfBirth",{
                                  required:true,
                                  onChange:value2,
                                  onBlur:updateBorder2
                                })}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus2}/>

                                { errors.dateOfBirth?.type === "required" && (
                                    <p role="alert" className='text-red-500'> date of birth is required</p>
                                )}

                            </div>

                        



                            <div className="mt-8  ">
                              <p className="text-stone-400">Choose your Admission Type</p>
                              
                              <div className="flex space-x-4 border-b-2  border-stone-400 p-2">

                                <div className="flex items-center space-x-1">

                                  <input 
                                  id="general" type="radio" value={"general"}
                                  className="p-[0.1rem] appearance-none border-2 border-solid border-stone-400 w-[0.8rem] h-[0.8rem] rounded-[50%] checked:after:block  after:bg-[#0293DB] after:h-full after:w-full after:rounded-[50%]"
                                  
                                  onFocus={updateBorder3}
                                  {...register("admission",{
                                    required:true,
                                    onChange:value3
                                    
                                    
                                  })} 
                                  //onBlur={updateBorder3ToFalse}

                                  />

                                  <label className="text-stone-400" htmlFor="general">General Admission</label>

                                </div>

                                <div className="flex items-center space-x-1">
                                  
                                  <input 
                                   id="entrance" type="radio"  className="p-[0.1rem] appearance-none border-2 border-solid border-stone-400 w-[0.8rem] h-[0.8rem] rounded-[50%] checked:after:block  after:bg-[#0293DB] after:h-full after:w-full after:rounded-[50%] " value={"entrance"}
                                  
                                   onFocus={updateBorder3}
                                   {...register("admission",{
                                    required:true,
                                    onChange:value3
                                    
                                  })}
                                  //onBlur={updateBorder3ToFalse}
                                  />

                                  <label className="text-stone-400" htmlFor="entrance">Entrance Exam</label>

                                </div>

                              </div>
                              <BlueLineOnBorder focus={focus3}/>

                              { errors.admission?.type === "required" && (
                                    <p role="alert" className='text-red-500'> please choose admission type</p>
                                )}

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
                                onFocus={updateBorder4}
                                
                                {...register("email",{
                                  required:true,
                                  maxLength:40,
                                  onChange:value4,
                                  onBlur:updateBorder4
                                })}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus4}/>

                                { errors.email?.type === "required" && (
                                    <p role="alert" className='text-red-500'> email is required</p>
                                )}

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
                                onFocus={updateBorder5}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                {...register("password",{
                                  required:true,
                                  pattern: /^[A-Za-z0-9]+$/i,
                                  minLength:8,
                                  maxLength:30,
                                  onChange:value5,
                                  onBlur:updateBorder5
                                })}
                                
                                />

                                <BlueLineOnBorder focus={focus5}/>
                                { errors.password?.type === "required" && (
                                    <p role="alert" className='text-red-500'> password is required</p>
                                )}
                                { errors.password?.type === "minLength" && (
                                    <p role="alert" className='text-red-500'> password should not be less than 8</p>
                                )}

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
                                
                                onFocus={updateBorder6}
                                
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     " type="text"`}
                                {...register("confirmPassword",{
                                  required:true,
                                  pattern: /^[A-Za-z0-9]+$/i,
                                  minLength:8,
                                  maxLength:30,
                                  onChange:value6,
                                  onBlur:updateBorder6
                                })}
                                
                                />

                                <BlueLineOnBorder focus={focus6}/>

                                { errors.password?.type === "required" && (
                                    <p role="alert" className='text-red-500'> password is required</p>
                                )}
                                { errors.password?.type === "minLength" && (
                                    <p role="alert" className='text-red-500'> password should not be less than 8</p>
                                )}
                                
                                {
                                  passwordDontMatch ? <p className='text-red-500'> passwords don&apos;t match</p> : correctPassword()
                                }
                            </div>

                        
                        </div>

                        <button className="text-center bg-[#0293DB] w-full p-2 text-white shadow-md">Login</button>
                    </form>

                    <div className="flex justify-between mt-4 space-x-2 md:space-x-6">
                        <p className=" text-green-600 font-light">Already have an account?</p>
                        <p className="text-red-500 font-light">Forgot password?</p>
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
