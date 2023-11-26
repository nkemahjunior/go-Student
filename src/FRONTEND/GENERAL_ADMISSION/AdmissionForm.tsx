"use client"
import ApplyHeader from "@/AUTHENTICATION/ApplyHeader"

import { set, useForm } from "react-hook-form"
import { formLabels } from "../../../lib/generalAdmissionTypes"
import { useState } from "react"

const inputStyle:string = " border-2 border-solid border-stone-400"
const formStyle:string = "flex flex-col  w-full outline-none"



function AdmissionForm():JSX.Element {

    const { register,formState: { errors }, handleSubmit } = useForm<formLabels>()


    const [chosenFaculty,setChosenFaculty] = useState("")


    function onSubmit(data:any){
        console.log(data)
    }
    


   function chosenProgram(e:any){
    setChosenFaculty(e.target.value)
    //console.log(e.target.value)
   }

    return (
        <div  className="  h-fit flex justify-center items-center bg-stone-100">

            
            <div className="mt-8">
                <ApplyHeader marginBottom={0} marginBottomLarge={0}/>
                <form action="" className="bg-white space-y-2 h-fit    px-4  py-4  " onSubmit={handleSubmit(onSubmit)}>

                    <div className={formStyle}>
                        <label htmlFor="name">Name</label>
                        <input className={inputStyle} type="text" 
                         {...register("name",{
                            pattern: /^[A-Za-z0-9" "]+$/i,
                            required:true,
                            maxLength:30,
                            
                          })}
                        />

                            { errors.name?.type === "required" && (
                                <p role="alert" className='text-red-500'> name is required</p>
                            )}
                            { errors.name?.type === "pattern" && (
                                <p role="alert" className='text-red-500'> name can include only letters</p>
                            )}
                    </div>

                    <div className={formStyle}>
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input className={inputStyle} type="date" 
                        {...register("dateOfBirth",{
                            required:true,
                          })}
                        />

                            { errors.dateOfBirth?.type === "required" && (
                                <p role="alert" className='text-red-500'> date of birth is required</p>
                            )}
                    </div>

                    
                
                    <div className={formStyle}>
                        <label htmlFor="nationality">Nationality</label>
                        <input className={inputStyle} type="text" 
                        {...register("nationality",{
                            pattern: /^[A-Za-z]+$/i,
                            required:true,
                            maxLength:20,
                            
                          })}
                        />

                            { errors.nationality?.type === "required" && (
                                <p role="alert" className='text-red-500'> nationality is required</p>
                            )}
                            { errors.nationality?.type === "pattern" && (
                                <p role="alert" className='text-red-500'> nationality can include only letters</p>
                            )}
                    </div>

                    
                    <div className={formStyle}>
                        <label htmlFor="photo">Your Photo</label>
                        <input className={inputStyle} type="file"  
                        {...register("photo",{
                            required:true,
                          })}
                        />

                            { errors.photo?.type === "required" && (
                                <p role="alert" className='text-red-500'> photo is required</p>
                            )}
                    </div>



                    <div className={formStyle}>
                        <label htmlFor="faculty">Choose Faculty or School</label>
    
                        <select id="faculty" className={inputStyle}   
                        {...register("faculty",{required:true,
                            onChange:chosenProgram
                        })}
                        >
                            <option value="fa">Faculty of arts-FA</option>
                            <option value="fs">Faculty of Science-FS</option>
                            <option value="fed">Faculty of education-FED</option>
                            <option value="fet">Faculty of Engineering and Technology-FET</option>
                            <option value="fhs">Faculty of Health Sciences-FHS</option>
                        </select>

                        

                    </div>



    {/******************************************************************************************************************* ***************/}
                    <div className={`${formStyle} ${chosenFaculty === "fa" ? " ":"hidden"}`}>
                        <label htmlFor="arts">Faculty of Arts Programs</label>
    
                        <select  id="fa" className={`${inputStyle} `}  required  {...chosenFaculty === "fa" && {...register("programChosen",{required:true,})} }>
                            <option value="eng">B.sc English </option>
                            <option value="hist">B.sc History</option>
                            <option value="geo">B.sc Geography</option>
                            <option value="fre">B.sc French</option>
                            <option value="lit">B.sc Literature</option>
                            
                        </select>


                    </div>




                    <div className={`${formStyle}  ${chosenFaculty === "fs" ? " ":"hidden"}`}>
                        <label htmlFor="science">Faculty of Science Programs</label>
    
                        <select  id="fs" className={`${inputStyle} `} required {...chosenFaculty === "fs" && {...register("programChosen",{required:true,})} }>
                            <option value="csc">B.sc Computer Science</option>
                            <option value="chem">B.sc Chemistry</option>
                            <option value="bio">B.sc Biology</option>
                            <option value="phy">B.sc Physics</option>
                            <option value="env">B.sc Enviromental Science</option>
                            
                        </select>

                        

                    </div>




                    <div className={`${formStyle}  ${chosenFaculty === "fed" ? " ":"hidden"}`}>
                        <label htmlFor="fed">Faculty of Education Programs</label>
    
                        <select  id="faculty" className={`${inputStyle} `} {...chosenFaculty === "fed" && {...register("programChosen",{required:true,})} }>
                            <option value="epy">B.sc Educational Psychology</option>
                            <option value="cst">B.sc Curriculum Studies</option>
                            <option value="efa">B.sc Educational Foundations</option>
                           
                        </select>


                    </div>




                    <div className={`${formStyle}  ${chosenFaculty === "fet" ? "":"hidden"}`}>
                        <label htmlFor="fet">Faculty of Engineering and Technology Programs</label>
    
                        <select  id="fet" className={`${inputStyle} `}  required {...chosenFaculty === "fet" && {...register("programChosen",{required:true,})} }>
                            <option value="cengS">B.sc Software Engineering</option>
                            <option value="cengM">B.sc Mechanical Engineering</option>
                            <option value="cengC">B.sc Civil Engineering</option>
                            <option value="cengE">B.sc Electrical Engineering</option>
                            <option value="cengM">B.sc Minning</option>
                            
                        </select>

                    </div>



                    <div className={`${formStyle} ${chosenFaculty === "fhs" ? "":"hidden"}`}>
                        <label htmlFor="fhs">Faculty of Health Sciences Programs</label>
    
                        <select  id="fhs" className={`${inputStyle} `}  required  {...chosenFaculty === "fhs" && {...register("programChosen",{required:true,})} }>
                            <option value="med">B.sc Medicine</option>
                            <option value="nur">B.sc Nursing</option>
                            <option value="midW">B.sc MidWife</option>
                            <option value="dent">B.sc Dentist</option>
                            
                        </select>

                    </div>

{/******************************************************************************************************************* ***************/}

                    <div className={formStyle}>
                        <label htmlFor="gender">Gender </label>

                        <select className={inputStyle}  id="gender" {...register("gender",{required:true,})}
                        >
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>

                        { errors.gender?.type === "required" && (
                                <p role="alert" className='text-red-500'> gender is required</p>
                        )}
                    </div>

                    

                    <div className={formStyle}>
                        <label htmlFor="maritalStatus">Marital Status </label>
                        

                        <select className={inputStyle} id="maritalStatus" {...register("maritalStatus",{required:true,})}>
                            <option value="single">single</option>
                            <option value="married">married</option>
                        </select>

                        { errors.maritalStatus?.type === "required" && (
                                <p role="alert" className='text-red-500'> status is required</p>
                        )}


                    </div>

                    <button className="lg:hover:scale-95 bg-[#0293DB] w-full p-2 text-white shadow-md flex justify-center items-center">{/*loading? "Applying":"Apply"} &nbsp; { loading && <span className=' animate-spin'> <ImSpinner8 /> </span> */ } apply </button>

                </form>
            </div>
              
        </div>
    )
}

export default AdmissionForm
