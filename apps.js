import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://SUPABASE_URL.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcWhla214a3J3YXRmaGVwaHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NjQ1NDYsImV4cCI6MjA5MzE0MDU0Nn0.-QXKtJjVs36IyYCq0YiWfJuOw7WKS9iHkNG1Ewhwq-o"
);

export function getUser(){
  let u = localStorage.getItem("user");
  if(!u){
    u = "user@golden.com";
    localStorage.setItem("user",u);
  }
  return u;
}
