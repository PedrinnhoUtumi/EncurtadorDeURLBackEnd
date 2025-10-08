// src/infra/bd.js
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;

let pool;

if (!pool) {
  pool = new Pool({
    connectionString: "postgres://postgres.zawkaeikewgsxmdupqkp:postgres@aws-1-sa-east-1.pooler.supabase.com:5432/trabalhoEncurtadorUrl ",
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 30000,
  });
}

export const db = drizzle(pool);
