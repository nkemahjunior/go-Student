import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { supaabaseRoute } from "@/BACKEND/General/supabaseRoute"

interface formdata{
  nationality:string  
  faculty:string 
  gender:string 
  maritalStatus:string 
  programChosen:string 
  photoName:string 
}

export async function PUT(request: Request) {
    try {
      const supabase = supaabaseRoute()
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL


    //https://zhbomwoucfylrttqqbzh.supabase.co/storage/v1/object/public/profilePicture/auth%20pic.PNG?t=2023-11-29T01%3A57%3A55.325Z

    const formdata:formdata = await request.json()
    const {nationality,faculty,gender,maritalStatus,programChosen,photoName}= formdata

    

    const photoUrl = `${supabaseUrl}/storage/v1/object/public/profilePicture/${photoName}`

    const {data: { user }} = await supabase.auth.getUser()
    let id = user?.id

    if(!id) throw new Error("user id is not available boy")

    
    const {  error } = await supabase
    .from('Profile')
    .update([
      {  nationality:nationality , gender:gender, maritalStatus:maritalStatus, photo:photoUrl, faculty:faculty, admissionAccepted:true,department:programChosen }
      ])
      .eq('id',id)
    

      if(error) {
        console.log(error)
        return NextResponse.json({},{status:400,statusText:error.message})
      }
    

    return NextResponse.json({},{status:200})

  } catch (error) {
      console.log(error)
  }

}