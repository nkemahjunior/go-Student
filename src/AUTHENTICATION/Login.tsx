"use client";
import { useState } from "react";
import BlueLineOnBorder from "./BlueLineOnBorder";
import { useForm } from "react-hook-form";
import LoginHeader from "./LoginHeader";
import { ImSpinner8 } from "react-icons/im";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";



interface formLabels {
    email:string
    password:string  
  }


function Login() {

  const router = useRouter()

    const { register,formState: { errors }, handleSubmit } = useForm<formLabels>()

    const [loading,setLoading] = useState(false)

    async function onSubmit(data:any){
        try {

           setLoading(true)
     
           const res = await fetch(`${location.origin}/auth/login`,{
           method: 'post',
           body: JSON.stringify(data)
           
          })
     
          //console.log(res)
           if(!res.ok) toast.error("email and or password are wrong")

           if(res.ok) router.replace('/student')

          //router.replace('/student')
     
     
         } catch (error) {
           console.log(error)
     
         } finally{
           setLoading(false)
         } 
         
       }


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
    <div className="  w-[99vw] h-screen flex justify-center items-center bg-stone-100">

        <div className="  md:w-[35dvw] bg-white ">
            <div>
               <LoginHeader/>


                <div className="  px-4 ">
                    <form action="" className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>

                        

                        <div className="space-y-6">
                        
                            <div>
                                <label
                                className={`absolute pointer-events-none text-stone-400  mt-0    ${focus || focusValue? " animate-placeholder text-xs  ":" animate-placeholderDown  "}
                                `}
                                htmlFor="email"
                                >
                                Email
                                </label> 

                                <input
                                type="email" 
                                onFocus={updateBorder}
                                {...register("email",{
                                    required:true,
                                    maxLength:40,
                                    onChange:value1,
                                    onBlur:updateBorder
                                  })}
                                className={` p-2 outline-none w-full font-light 
                                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus}/>         

                                 { errors.email?.type === "required" && (
                                    <p role="alert" className='text-red-500'> email is required</p>
                                )}                 

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
                                onFocus={updateBorder2}
                                {...register("password",{
                                    required:true,
                                    pattern: /^[A-Za-z0-9.:,?/-]+$/i,
                                    minLength:8,
                                    maxLength:30,
                                    onChange:value2,
                                    onBlur:updateBorder2
                                  })}
                                className={`p-2 outline-none w-full font-light 
                                border-solid border-b-2 border-stone-400  transition-colors duration-[0.5s]     `}
                                
                                />

                                <BlueLineOnBorder focus={focus2}/>
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

                        
                        </div>

                        <button className="lg:hover:scale-95 bg-[#0293DB] w-full p-2 text-white shadow-md flex justify-center items-center">{loading? "Logging in":"Login"} &nbsp; { loading && <span className=' animate-spin'> <ImSpinner8 /> </span>  }</button>
                    </form>

                    <div className="flex justify-between mt-4 space-x-2">
                        <Link href={"/apply"}><p className=" text-green-600 font-light">Create an account</p></Link>
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
