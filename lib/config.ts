export function getServerSideSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing Supabase config");
  }
  return {
    url,
    serviceRoleKey,
  };
}

export const defaultDateFormat = "YYYY-MM-DD";

export function getSessionSecret() {
  return process.env.SESSION_SECRET || "ghULFsDlD1bEl8S9MqUeJZQZeyzUvHTH";
}
