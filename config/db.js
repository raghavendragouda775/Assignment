import mysql from "mysql2";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync("./certs/schooldb-ssl-public-cert.cert"),  
    rejectUnauthorized: false,  
  },
});

export default pool.promise();

