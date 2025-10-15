import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import { links } from './bd/schema.js'; 

dotenv.config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 20,
  idleTimeoutMillis: 30000,
});

export const db = drizzle(pool, { schema: { links } });

