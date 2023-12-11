"use client"
import ApplyHeader from "@/AUTHENTICATION/ApplyHeader"

import { set, useForm } from "react-hook-form"
import { formLabels } from "../../../../lib/generalAdmissionTypes"
import { Suspense, useEffect, useState } from "react"
import { deleteProfilePicture, uploadProfilePicture } from "@/BACKEND/SignUPDetails/uploadProfilePicture"
import toast from "react-hot-toast"
import { ImSpinner8 } from "react-icons/im"
import { useRouter } from "next/navigation"
import { useGetFaculties } from "@/BACKEND/ApplicationForm/useFetchFaculties"

const inputStyle:string = " border-2 border-solid border-stone-400"
const formStyle:string = "flex flex-col  w-full outline-none"



 function AdmissionForm() {

    const { register,formState: { errors }, handleSubmit } = useForm<formLabels>()

    const [chosenFaculty,setChosenFaculty] = useState("")
    const [noChosenFacultyError,setnoChosenFacultyError] = useState(false)
    const [loading,setLoading] = useState(false)

    const router = useRouter()

    const data = useGetFaculties()

        

    async function onSubmit(data:any){

        try {
            if(data.faculty === "noOption") setnoChosenFacultyError(true)
            if(data.faculty === "noOption") return;

            setLoading(true)
    
            const imageName = `${Math.random()}-${data.photo[0].name}`.replaceAll("/","")
            const file = data.photo[0]

            // console.log(data)

            await uploadProfilePicture({imageName,file})
            const newData = {...data,photoName:imageName}

            const res = await fetch(`${location.origin}/sendApplication`,{
                method:'put',
                body:JSON.stringify(newData)
            })

            if(!res.ok) toast.error("An error occurred while applying, please try again")
            if(!res.ok)  await deleteProfilePicture(imageName)

            if(res.ok) router.refresh()

        } catch (error) {
            //console.log(error)
        } finally{
            setLoading(false)
        }

    }
    


   function chosenProgram(e:any){
    setChosenFaculty(e.target.value)
    if(e.target.value !== "noOption") setnoChosenFacultyError(false)
    else setnoChosenFacultyError(true)
    //console.log(e.target.value)
   }

    return (
        <div  className="  h-[100dvh] flex justify-center items-center bg-stone-100 ">

            
            <div className="mt-8">
                <ApplyHeader marginBottom={0} marginBottomLarge={0}/>
                <form action="" className="bg-white space-y-2 h-fit    px-4  py-4  " onSubmit={handleSubmit(onSubmit)}>

                    {/* <div className={formStyle}>
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
                    </div> */}

                    {/* <div className={formStyle}>
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input className={inputStyle} type="date" 
                        {...register("dateOfBirth",{
                            required:true,
                          })}
                        />

                            { errors.dateOfBirth?.type === "required" && (
                                <p role="alert" className='text-red-500'> date of birth is required</p>
                            )}
                    </div> */}

                    
                
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
                        <input className={inputStyle} type="file" accept="image/*"  
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
    
                        <Suspense fallback={<p>loading</p>}>
                        <select id="faculty" className={inputStyle}   
                        {...register("faculty",{required:true,
                            onChange:chosenProgram
                        })}
                        >
                           
                            <option value="noOption">No option</option>
                            {
                                data?.map(el => <option key={el.id} value={`${el.id}`}>{el.facultyName}</option> )
                            }
                        </select>
                        </Suspense>

                        {
                            noChosenFacultyError  && <p className='text-red-500'>please choose a faculty</p>
                        }
                        

                    </div>



    {/******************************************************************************************************************* ***************/}
                    <div className={`${formStyle} ${chosenFaculty === "faZustaland" ? " ":"hidden"}`}>
                        <label htmlFor="arts">Faculty of Arts Programs</label>

                        
                        {chosenFaculty === "faZustaland" &&
                            <select  id="fa" className={`${inputStyle} `}  required   {...register("programChosen",{required:true,})} >
                            <option value="eng">B.sc English </option>
                            <option value="hist">B.sc History</option>
                            <option value="geo">B.sc Geography</option>
                            <option value="fre">B.sc French</option>
                            <option value="lit">B.sc Literature</option>
                            
                        </select>
                        }


                    </div>




                    <div className={`${formStyle}  ${chosenFaculty === "fsZustaland" ? " ":"hidden"}`}>
                        <label htmlFor="science">Faculty of Science Programs</label>
    
                      {chosenFaculty === "fsZustaland" &&
                          <select  id="fs" className={`${inputStyle} `} required  {...register("programChosen",{required:true,})} >
                          <option value="csc">B.sc Computer Science</option>
                          <option value="chem">B.sc Chemistry</option>
                          <option value="bio">B.sc Biology</option>
                          <option value="phy">B.sc Physics</option>
                          <option value="env">B.sc Enviromental Science</option>
                          
                      </select>
                      }

                        

                    </div>




                    <div className={`${formStyle}  ${chosenFaculty === "fedZustaland" ? " ":"hidden"}`}>
                        <label htmlFor="fed">Faculty of Education Programs</label>
    
                        {chosenFaculty === "fedZustaland" && 
                            <select  id="faculty" className={`${inputStyle} `} {...register("programChosen",{required:true,})} >
                            <option value="epy">B.sc Educational Psychology</option>
                            <option value="cst">B.sc Curriculum Studies</option>
                            <option value="efa">B.sc Educational Foundations</option>
                           
                        </select>
                        }


                    </div>




                    <div className={`${formStyle}  ${chosenFaculty === "fetZustaland" ? "":"hidden"}`}>
                        <label htmlFor="fet">Faculty of Engineering and Technology Programs</label>
    
                       {chosenFaculty === "fetZustaland" && 
                         <select  id="fet" className={`${inputStyle} `}  required {...register("programChosen",{required:true,})} >
                         <option value="cengS">B.sc Software Engineering</option>
                         <option value="cengM">B.sc Mechanical Engineering</option>
                         <option value="cengC">B.sc Civil Engineering</option>
                         <option value="cengE">B.sc Electrical Engineering</option>
                         <option value="cengMi">B.sc Minning</option>
                         
                     </select>
                       }

                    </div>



                    <div className={`${formStyle} ${chosenFaculty === "fhsZustaland" ? "":"hidden"}`}>
                        <label htmlFor="fhs">Faculty of Health Sciences Programs</label>
    
                       { chosenFaculty === "fhsZustaland" &&
                         <select  id="fhs" className={`${inputStyle} `}  required   {...register("programChosen",{required:true,})} >
                         <option  value="med">B.sc Medicine</option>
                         <option value="nur">B.sc Nursing</option>
                         <option value="midW">B.sc MidWifery</option>
                         <option value="dent">B.sc Dental Surgery</option>
                         
                     </select>
                       }

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

                    <button className="lg:hover:scale-95 bg-[#0293DB] w-full p-2 text-white shadow-md flex justify-center items-center">{loading? "Applying":"Apply"} &nbsp; { loading && <span className=' animate-spin'> <ImSpinner8 /> </span>  } </button>

                </form>
            </div>
              
        </div>
    )
}

export default AdmissionForm
