// src/infra/bd.js
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: "postgresql://postgres.zawkaeikewgsxmdupqkp:postgres@aws-1-sa-east-1.pooler.supabase.com:5432/trabalhoEncurtadorUrl",
});

export const db = drizzle(pool); // ← aqui sim criamos o objeto que tem .insert()
