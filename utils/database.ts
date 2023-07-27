import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user: "alexs2",
    password: "painkiller16",
    host: "localhost",
    port: 5432,
    database: "dev4hire",
  });
}

export { conn };
