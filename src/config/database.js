import pg from 'pg';
const { Pool } = pg;
export const pool = new Pool({
    host: process.env.PGHOST || "192.168.1.66",
    port: process.env.PGPORT || 5432,
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "miclavesecreta",
    database: process.env.PGDATABASE || "convert",

    allowExitOnIdle: true
})

