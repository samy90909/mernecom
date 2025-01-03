import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import cors from 'cors'

import productRoutes from './routes/product.route.js';


dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/products", productRoutes);


const Port = 5000;
app.listen(Port, (req, res) => {
    connectDB()
    console.log(`Server is running at  port ${Port} `);
})

