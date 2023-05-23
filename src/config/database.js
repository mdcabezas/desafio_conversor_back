import pg from 'pg';
const { Pool } = pg;
export const pool = new Pool({
    host: "192.168.1.66",
    user: "postgres",
    password: "miclavesecreta",
    database: "convert",
    allowExitOnIdle: true
})

