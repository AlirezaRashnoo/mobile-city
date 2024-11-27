import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://scrbhhwvtjdjledvafqs.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcmJoaHd2dGpkamxlZHZhZnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxODc2MjMsImV4cCI6MjA0NTc2MzYyM30.3hna2VzDsUnPulAXE4UtdqdeGEtnsUwMWwoPHg7lz7o"

const supabase = createClient(supabaseUrl,supabaseAnonKey)

export default supabase;