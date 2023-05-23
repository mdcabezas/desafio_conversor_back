import pg from 'pg';
const { Pool } = pg;
export const pool = new Pool({
    host: process.env.PG_HOST || "192.168.1.66",
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASS || "miclavesecreta",
    database: process.env.PG_DB || "convert",
    port: process.env.PORT || 5432,
    allowExitOnIdle: true
})

