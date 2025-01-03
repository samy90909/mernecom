import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
            .then(() => console.log('Connected to MongoDB!'))
            .catch(err => console.error('Connection failed:', err));
    }
    catch (error) {
        console.log(error)
        process.exit(1);
    }
}




