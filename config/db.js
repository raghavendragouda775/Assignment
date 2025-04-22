import mysql from "mysql2";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
<<<<<<< HEAD
=======

// Using import.meta.url to resolve paths in ES modules
import { fileURLToPath } from 'url';
>>>>>>> ec04fce24c63803d58592467b9c2df2d0d2f208d

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
<<<<<<< HEAD
    ca: fs.readFileSync(path.join(__dirname, '../certs/DB-ssl-public-cert.cert')),  
    rejectUnauthorized: false,  
  },
  
});

=======
    ca: fs.readFileSync(path.join(__dirname, '../certs/DB-ssl-public-cert.cert')),  // Use the absolute path
    rejectUnauthorized: false,
  },
});
>>>>>>> ec04fce24c63803d58592467b9c2df2d0d2f208d

export default pool.promise();
