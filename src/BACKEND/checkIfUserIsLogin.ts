import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {supabaseUrl,supabaseKey} from "./supabase"

import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";

export const revalidate = 1


export default async function checkIfUserIsLogin(){

    const cookieStore = cookies()
    const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore },{supabaseUrl,supabaseKey});
    

  const {data:{ session }} = await supabase.auth.getSession();

    return session
}