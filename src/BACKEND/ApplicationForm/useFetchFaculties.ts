import { type } from "os";
import { useEffect, useState } from "react";
import { Database } from "../../../lib/database.types";

interface dataty{
    id:string
    facultyName:string
}

export  function useGetFaculties(){

    const [facultiesData,setfacultiesData] = useState<Array<dataty> | null >()


    useEffect(()=> {
        async function fetchFaculty(){

            const res = await fetch( `${location.origin}/getFaculties`)
            const data = await res.json()

            const { faculties }:{ faculties:null | [] } = data
            setfacultiesData(faculties)
        }

        fetchFaculty()

    },[])

    return facultiesData

    
    
}