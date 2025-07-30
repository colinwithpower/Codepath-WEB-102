// backend/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://dmttxovrpogbyblyilkx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdHR4b3ZycG9nYnlibHlpbGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1ODQxMDEsImV4cCI6MjA2OTE2MDEwMX0.8BQkHtlQXnM63nw22gJzvEGozejI_8fUBLPyxMyMn9s'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
