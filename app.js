import express from "express"
import schoolRoutes from "./routes/routes.js"
import dotenv from "dotenv"

dotenv.config();
const app=express();
// middleware
app.use(express.json());

app.use('/',schoolRoutes);

const PORT =process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is listening on port${PORT}`);
})


