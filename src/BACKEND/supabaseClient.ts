import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export function supabaseClient(){

  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  const supabase = createClientComponentClient({supabaseUrl,supabaseKey})

  return supabase
}