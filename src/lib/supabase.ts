import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lyatowrcaaxafambczve.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YXRvd3JjYWF4YWZhbWJjenZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1Mjg4NTgsImV4cCI6MjA1NTEwNDg1OH0.yEYFa8XxW95tFzGVCNkOEABu-cNRKmpP4-b6-ZAl5MU";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
  },
});
