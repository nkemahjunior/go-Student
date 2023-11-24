

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import {supabaseUrl,supabaseKey} from "../../../BACKEND/supabase"

import type { Database } from '../../../../lib/database.types'

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

  const {error} = await supabase.auth.signUp({
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

  if(error){
    console.log(error)

    return NextResponse.json({
        status:400,
        statusText:"error signing up"
        
    })
  }
  
  //console.log(formData)
  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })

}

