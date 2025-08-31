import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://vrjqiuuzyjfflzokouez.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyanFpdXV6eWpmZmx6b2tvdWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzODc4MjgsImV4cCI6MjA3MTk2MzgyOH0.YIBkM10dTK6VMhRXGtbM_1sVXgCMRJHF1WU1lOG3pN0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
