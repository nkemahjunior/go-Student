import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


import type { Database } from '../../../../lib/database.types'
import { supaabaseRoute } from '@/BACKEND/supabaseRoute'

export async function POST(request: Request) {

  const requestUrl = new URL(request.url)
  const supabase = supaabaseRoute()

  const {error} = await supabase.auth.signOut()

  if(error) {
    return NextResponse.json({},{
      status:400,
      statusText:error.message
    })
  }

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  })
}