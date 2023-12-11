import { supabaseClient } from "../General/supabaseClient"


const supabase = supabaseClient();

export async function uploadProfilePicture({imageName,file}:{imageName:string,file:File}){


    //https://zhbomwoucfylrttqqbzh.supabase.co/storage/v1/object/public/profilePicture/auth%20pic.PNG?t=2023-11-29T01%3A57%3A55.325Z

    

    
    
    const {  error } = await supabase
    .storage
    .from('profilePicture')
    .upload(imageName, file)

    if(error ) throw new Error("could add dress to bucket " + error.message)
}


export async function deleteProfilePicture(imageName:string){
    await supabase
    .storage
    .from('profilePicture')
    .remove([imageName])
}