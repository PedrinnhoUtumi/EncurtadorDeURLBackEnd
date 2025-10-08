import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default dbPool;
