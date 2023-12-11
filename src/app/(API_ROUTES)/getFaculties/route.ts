import { supaabaseRoute } from "@/BACKEND/General/supabaseRoute"
import { NextResponse } from "next/server"


export async function GET(){

const supabase = supaabaseRoute();
    
let { data: faculties, error } = await supabase
.from('faculties')
.select('*')



if(error) return NextResponse.json({},{status:400 })


return NextResponse.json({faculties})
}