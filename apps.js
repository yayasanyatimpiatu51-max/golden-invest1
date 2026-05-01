import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://SUPABASE_URL.supabase.co",
  "SUPABASE_ANON_KEY"
);

export function getUser(){
  let u = localStorage.getItem("user");
  if(!u){
    u = "user@golden.com";
    localStorage.setItem("user",u);
  }
  return u;
}
