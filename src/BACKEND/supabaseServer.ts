import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabaseUrl, supabaseKey } from "./supabase";

import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";

export function supabaseServer(){
    const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>(
    { cookies: () => cookieStore },
    { supabaseUrl, supabaseKey }
  );

  return supabase
}