"use client";

import ApplyHeader from "./ApplyHeader"
import { useState } from "react";

import BlueLineOnBorder from "./BlueLineOnBorder";
import { useForm } from "react-hook-form";
import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import Link from "next/link";



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



function Application():JSX.Element {

  const { register,formState: { errors }, handleSubmit } = useForm<formLabels>()

  //const onSubmit: SubmitHandler<formLabels> = (data) => console.log(data)

  const [loading,setLoading] = useState(false)
  const router = useRouter()



  async function onSubmit(data:any){
   try{
      if(passwordDontMatch) return;

      setLoading(true)

      const res = await fetch(`${location.origin}/auth/sign-up/`,{
      method: 'post',
      body: JSON.stringify(data)
      
      }) 
      console.log(res)

      
      if(!res.ok) return toast.error("account already exist")
      router.replace(`/generalAdmission`)

      //console.log("sigiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")


    } catch (error) {
      console.log(error)

    } finally{
      setLoading(false)
    } 
    
  }

  const [passwordMatch1, setPasswordMatch1] = useState("")
  const [passwordMatch2, setPasswordMatch2] = useState("")
  const [passwordDontMatch,setPasswordDontMatch] = useState(false)
  


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
  
  
  //const min = currentYear - 

  

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
    if(!focus3) setFocus3(true) 
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
    <div className="    h-fit flex justify-center items-center bg-stone-100"
    onClick={updateBorder3ToFalse}
    >

        <div className="  md:w-[35dvw] bg-white ">
            <div>
                <ApplyHeader marginBottom={4.5} marginBottomLarge={2.3}/>


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
                                min="1970-01-01" max="2012-01-01"
                                
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

                        



                            {/*<div className="mt-8  ">
                              <p className="text-stone-400">Choose your Admission Type</p>
                              
                              <div className="flex space-x-4 border-b-2  border-stone-400 p-2">

                                <div className="flex items-center space-x-1">

                                  <input 
                                  id="general" type="radio" value={"generalAdmission"}
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
                                   id="entrance" type="radio"  className="p-[0.1rem] appearance-none border-2 border-solid border-stone-400 w-[0.8rem] h-[0.8rem] rounded-[50%] checked:after:block  after:bg-[#0293DB] after:h-full after:w-full after:rounded-[50%] " value={"entranceExams"}
                                  
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

                            </div>*/}

                        



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
                                  pattern: /^[A-Za-z0-9.:,?/-]+$/i,
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
                                 { errors.password?.type === "pattern" && (
                                    <p role="alert" className='text-red-500'> password can not contain that character</p>
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
                                  pattern: /^[A-Za-z0-9.:,?/-]+$/i,
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

                        <button className="lg:hover:scale-95 bg-[#0293DB] w-full p-2 text-white shadow-md flex justify-center items-center">{loading? "Applying":"Apply"} &nbsp; { loading && <span className=' animate-spin'> <ImSpinner8 /> </span>  } </button>
                    </form>

                    <div className="flex justify-between mt-4 space-x-2 md:space-x-6">
                        <Link href={"/login"}><p className=" text-green-600 font-light">Already have an account?</p></Link>
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
