import mysql from "mysql2";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Using import.meta.url to resolve paths in ES modules
import { fileURLToPath } from 'url';

dotenv.config();

// Get the current directory path from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, '../certs/DB-ssl-public-cert.cert')),  // Use the absolute path
    rejectUnauthorized: false,
  },
});

export default pool.promise();
