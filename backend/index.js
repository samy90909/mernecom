import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import cors from 'cors'

dotenv.config()

const app = express();

// Enable CORS
app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Server is up and running ')
})

const Port = 5000;

// Connect to MongoDB first, then start the server
connectDB()
    .then(() => {
        app.listen(Port, () => {
            console.log(`Server is listening in port ${Port}`)
        })
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err)
    })