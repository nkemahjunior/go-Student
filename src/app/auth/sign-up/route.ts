

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '../../../../lib/database.types'
import { createProfile } from '@/BACKEND/SignUPDetails/createProfile'
import { supaabaseRoute } from '@/BACKEND/supabaseRoute'

interface userDetails{
  userName:string,
  dateOfBirth:Date,
  admission:string
  emailRedirectTo:string
}

export async function POST(request: Request) {

  const requestUrl = new URL(request.url)
  
  const formData = await request.json()
  const{names,dateOfBirth,email,password} = formData
  
  const supabase = supaabaseRoute()
  
  const {error:signUpError} = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data:<userDetails>{
        userName:names,
        dateOfBirth:dateOfBirth,
        
      }
    },
  })

  if(!signUpError){
    setTimeout(() =>{
      createProfile(supabase,names,email,dateOfBirth,NextResponse)
    },3000)
  }

  if(signUpError){
    console.log("helllllo")
    console.log(signUpError)
    return NextResponse.json({},{status:400,statusText:"accout already exist"})

  }


  

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })

}

