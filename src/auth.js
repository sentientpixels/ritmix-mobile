import { Preferences } from "@capacitor/preferences";
import { createClient } from "@supabase/supabase-js";

const CapacitorStorage = {
  async getItem(key) {
    const { value } = await Preferences.get({ key });
    return value;
  },
  async setItem(key, value) {
    await Preferences.set({ key, value });
  },
  async removeItem(key) {
    await Preferences.remove({ key });
  },
};

export function getSupabaseClient() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    {
      auth: {
        storage: CapacitorStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    }
  );

  return supabase;
}

export async function authGetLoggedInUser() {
  const supabase = getSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
