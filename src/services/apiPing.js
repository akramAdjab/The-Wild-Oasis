import supabase from "./supabase";

export async function getPingMessage() {
  const { data, error } = await supabase
    .from("ping")
    .select("message")
    .single();

  if (error) {
    console.log(error.message);
    throw new Error("Unable to ping database. Please try again later!");
  }

  return data;
}
