import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://fqqhekmxkrwatfhephpr.supabase.co",
  "PASTE_ANON_KEY_KAMU"
);

// 🔥 AUTO USER (sementara)
export function getUser(){
  let u = localStorage.getItem("user");
  if(!u){
    u = "user@golden.com";
    localStorage.setItem("user",u);
  }
  return u;
}
