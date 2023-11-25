export async function createProfile(supabase:any,names:string,email:string,dateOfBirth:Date,admission:string,NextResponse:any){

    const {data: { user },error:getUserError} = await supabase.auth.getUser()
    let id = user?.id

    
    
    if(!getUserError){

      const {  error:createProfileError } = await supabase
      .from('Profile')
      .insert([
        { id: id, name:names,email:email,dateOfBirth:dateOfBirth,admissionType:admission,admissionAccepted:false },
        
      ])

      if(createProfileError){
        console.log(createProfileError)
        return NextResponse.json({
        status:400,
        statusText:"error creating profile"}) 
      }

    }

    if(getUserError){
      console.log(getUserError)
      return NextResponse.json({
        status:400,
        statusText:"error getting user"
        
    })
    }
  }