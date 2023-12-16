// utils/db.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ;
// 'mongodb+srv://erickadikah2030:7IxsoEWfMRZTrtGC@cluster0.po22n0u.mongodb.net/ArtGalary';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
