// import 'dotenv/config';
// import pg from 'pg';

// const { Pool } = pg;

// const dbPool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export default dbPool;

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config()

const supabaseUrl = process.env.BD_URL
const supabaseAnonKey = process.env.BD_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)