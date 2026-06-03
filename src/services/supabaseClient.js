import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ectftbenssqjnjbjiati.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjdGZ0YmVuc3Nxam5qYmppYXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNzE0ODIsImV4cCI6MjA5NDk0NzQ4Mn0.2kWHuS41qV5Hi4Mfid9kn5bD_4u-MyqTvA5Q1I0DExA';

export const supabase = createClient(supabaseUrl, supabaseKey);
