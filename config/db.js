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
    ca: fs.readFileSync("./certs/DB-ssl-public-cert.cert.js"),  
    rejectUnauthorized: false,  
  },
  
});
pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed: ", err.stack);
    } else {
      console.log("Connected to the database.");
      connection.release();  // Release the connection after testing.
    }
  });

export default pool.promise();

