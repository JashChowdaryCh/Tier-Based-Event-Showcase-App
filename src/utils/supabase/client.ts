// src/utils/supabase/client.ts
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const createClient = () => createBrowserSupabaseClient();
