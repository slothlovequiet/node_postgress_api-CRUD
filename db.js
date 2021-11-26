import pg from 'pg';
const { Pool } = pg;

let localPoolConfig = {
  user: 'postgres',
  password: '1312',
  host: 'localhost',
  port: '5433',
  database: 'od_tt'
};

const poolConfig = process.env.DATABASE_URL ? {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
} : localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;