import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://usxfcchjguhwkcmkrocr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzeGZjY2hqZ3Vod2tjbWtyb2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMjA3MTMsImV4cCI6MjAxMTU5NjcxM30.3uHWs-RY4MtFgS-nff2jH0kz81Fqyd1wJXq7kXkYRfk";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
