import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";


import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";

export function supabaseServer(){

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>(
    { cookies: () => cookieStore },
    { supabaseUrl, supabaseKey }
  );

  return supabase
}