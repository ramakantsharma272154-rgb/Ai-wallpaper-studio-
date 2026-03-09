import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "hwdlqgglyxqiccyzzhof"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3ZGxxZ2dseXhxaWNjeXp6aG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMzgxMjcsImV4cCI6MjA4ODYxNDEyN30.qOYL5Zhxrlb-rfeTGnGlSM9AhzMPhNSOZ772pqEfwjo"

export const supabase = createClient(
supabaseUrl,
supabaseKey
)
