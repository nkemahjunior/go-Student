import { supabaseServer } from "../supabaseServer"


export async function checkIfUserIsStudent(){

   try {
    const supabase = supabaseServer()
    const { data: { user },error:getuserError } = await supabase.auth.getUser()

 
    
    if(!getuserError){

      if(!user) throw new Error("the user is null boy")
      
      const { data:admittedOrNot, error } = await supabase
      .from('Profile')
      .select('admissionAccepted')
      .eq('id',user.id)

      

      if(error)  throw new Error(error.message)
      
      // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      // console.log(admittedOrNot)

      return admittedOrNot
    
    }

  } catch (error) {
    console.log(error)
  }


}