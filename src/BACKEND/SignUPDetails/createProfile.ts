export async function createProfile(supabase:any,names:string,email:string,dateOfBirth:Date,NextResponse:any){


  /**
   * i'm not inserting id into profile because supabase will automatically insert it.. there's an option on supabase where we can set the id of a row to uuid and supabase will always insert the id base on the current user who is inserting something on the table
   */
  const {  error:createProfileError } = await supabase
  .from('Profile')
  .insert([
    {  name:names,email:email,dateOfBirth:dateOfBirth,admissionAccepted:false },
    
  ])

  if(createProfileError){
    console.log(createProfileError)
    return NextResponse.json({},{
    status:400,
    statusText:"error creating profile"}) 
  }


}