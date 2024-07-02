import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tbdjbobotdlmuquftcff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZGpib2JvdGRsbXVxdWZ0Y2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2OTk1MzEsImV4cCI6MjAzNTI3NTUzMX0.e8HGS0GVmQAWqH8VhHlNNT_ktHL7em8rghV-ENddJk8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
