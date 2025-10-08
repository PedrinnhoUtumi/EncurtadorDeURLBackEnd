import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgresql://postgres.zawkaeikewgsxmdupqkp:postgres@aws-1-sa-east-1.pooler.supabase.com:5432/trabalhoEncurtadorUrl",
  ssl: { rejectUnauthorized: false },
});

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão OK:", res.rows[0]);
  } catch (err) {
    console.error("Erro ao conectar:", err);
  } finally {
    await pool.end();
  }
})();
