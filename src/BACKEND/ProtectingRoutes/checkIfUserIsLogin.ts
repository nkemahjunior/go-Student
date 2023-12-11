import { supabaseServer } from "../General/supabaseServer";
export const dynamic = "force-dynamic"

export default async function checkIfUserIsLogin() {
  
try {
  const supabase = supabaseServer()

  const {
    data: { session },
  } = await supabase.auth.getSession();
  //const {data} = await supabase.auth.getSession();
  //console.log(data)

  return session;
} catch (error) {
  console.log(error)
}
}
