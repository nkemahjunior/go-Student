import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import {supabaseUrl,supabaseKey} from "../../../BACKEND/supabase"

import type { Database } from '../../../../lib/database.types'

export async function POST(request: Request) {

  const requestUrl = new URL(request.url)

  const formData = await request.json()
  const {email,password} = formData
  //console.log(email,password)

  
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore },{supabaseUrl,supabaseKey})

 const {error} = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if(error){
    console.log(error)
    return NextResponse.json(error,{
        status:error.status,
        statusText:error.message
    })
}

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}