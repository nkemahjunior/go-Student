"use client"

import { useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import HomeAvailablePrograms from "./HomeAvailablePrograms";
import AdmissionForm from "./AdmissionForm";

import { motion } from "framer-motion"
import { logout } from "@/BACKEND/Logout/logout";




function AvailablePrograms():JSX.Element {
    

    const [home,setHome] = useState(true)
    const [style,setStyle] = useState(true)
    const [style2,setStyle2] = useState(false)

    const [show,setShow] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    function showUser(){
        setShow(v => !v)
    }


    useEffect(function(){
        function closeUser(e:any){
            if(ref.current && !ref.current?.contains(e.target)) setShow(false)
        }

        document.addEventListener("click",closeUser,true)

        return () => {
            document.removeEventListener("click",closeUser,true)
        }
    },[])
 
    

    function displayAvailablePrograms(e:any){
        setHome(true)

       if(style ) {
        return
        
        
       }else {
        setStyle(true)
        setStyle2(false)
       }
        
    }

    function displayAdmissionForm(e:any){
        
        setHome(false)

        if(style2 === false) {
        setStyle2(true)
        setStyle(false)

        } 
        
    }


    
    const test:string = " "
    return (
        <div >
            <div className="bg-[#0293DB] flex justify-between p-8 " >
                <div className="flex space-x-4 ">
                    <motion.p layout  onClick={displayAvailablePrograms}
                    className={`uppercase flex items-center cursor-pointer transition-colors duration-100 ${style ? "p-2 bg-white text-[#0293DB]":" text-white "}`}><IoHomeOutline />Home
                    </motion.p>
                    <motion.p layout  onClick={displayAdmissionForm}
                    className={`uppercase flex items-center cursor-pointer transition-colors duration-100 ${style2 ? "p-2 bg-white text-[#0293DB]": " text-white "}`}><MdPersonOutline 
                    />Admission Form</motion.p>
                </div>

                <div className="relative  cursor-pointer " onClick={showUser}>
                    <p className=" text-white uppercase flex items-center"><IoPerson />user</p>

                    <div onClick={logout}  className={`p-2 cursor-pointer bg-white text-[#0293DB]  absolute ${show === false && "hidden"}`}>
                        <p ref={ref}>logout</p>
                    </div>

                </div>
            </div>
        {
            home ? <HomeAvailablePrograms/> : <AdmissionForm/> 
            
        }
        </div>
    )
}

export default AvailablePrograms
