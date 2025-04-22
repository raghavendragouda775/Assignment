import express from "express";
import schoolRoutes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors"; // ✅ import cors

dotenv.config();
const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: 'https://school-management-client.onrender.com', // replace with your actual frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
