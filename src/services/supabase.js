import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dnwwjodcqoqjteqmhyzt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud3dqb2RjcW9xanRlcW1oeXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3OTA5MzQsImV4cCI6MjA0MzM2NjkzNH0.sF42RPpVS5McVAxle34Xpge_ZWGD_t-xAHJAFWyMLk8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
