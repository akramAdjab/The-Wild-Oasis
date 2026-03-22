import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://snifdmqffferojqxpcha.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaWZkbXFmZmZlcm9qcXhwY2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODE1NTEsImV4cCI6MjA4OTc1NzU1MX0.li8j8dI9-5MPUILja2AUNWaH656A02pImZoK1hBcPf4";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
