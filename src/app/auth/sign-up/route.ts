

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import {supabaseUrl,supabaseKey} from "../../../BACKEND/supabase"

import type { Database } from '../../../../lib/database.types'
import { createProfile } from '@/BACKEND/SignUPDetails/createProfile'

interface userDetails{
  userName:string,
  dateOfBirth:Date,
  admission:string
  emailRedirectTo:string
}

export async function POST(request: Request) {

  const requestUrl = new URL(request.url)
  
  const formData = await request.json()
  const{names,dateOfBirth,admission,email,password} = formData
  
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore },{supabaseUrl,supabaseKey})

  const {error:signUpError} = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data:<userDetails>{
        userName:names,
        dateOfBirth:dateOfBirth,
        admission:admission,
      }
    },
  })

  if(!signUpError){
    setTimeout(() =>{
      createProfile(supabase,names,email,dateOfBirth,admission,NextResponse)
    },3000)
  }

  if(signUpError){
    console.log("helllllo")
    console.log(signUpError)
    return NextResponse.json({},{status:400,statusText:"accout already exist"})

    /**i'm not returning any response becuase supabase will instead return but a response with the status code 200 eventhough there was an error */
  }




  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })

}

