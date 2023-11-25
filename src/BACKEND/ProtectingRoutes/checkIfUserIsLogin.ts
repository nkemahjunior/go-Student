import { supabaseServer } from "../supabaseServer";

export default async function checkIfUserIsLogin() {
  
  const supabase = supabaseServer()

  const {
    data: { session },
  } = await supabase.auth.getSession();
  //const {data} = await supabase.auth.getSession();
  //console.log(data)

  return session;
}
