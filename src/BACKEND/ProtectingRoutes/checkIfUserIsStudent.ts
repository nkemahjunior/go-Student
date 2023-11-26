import { supabaseServer } from "../supabaseServer"

export async function checkIfUserIsStudent(){

   try {
    const supabase = supabaseServer()
    
    const { data: { user },error:getuserError } = await supabase.auth.getUser()

    
  if(!getuserError){
    
    const { data:admittedOrNot, error } = await supabase
    .from('Profile')
    .select('admissionAccepted')
    .eq('id',user?.id)

    if(error) throw new Error(error.message)

    return admittedOrNot
    
  }

   } catch (error) {
    console.log(error)
   }


}