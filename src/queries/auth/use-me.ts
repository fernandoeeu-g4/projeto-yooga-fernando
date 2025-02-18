import { createClient } from "@/lib/auth/server";
import { useQuery } from "@tanstack/react-query";

export async function getMe() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
}
