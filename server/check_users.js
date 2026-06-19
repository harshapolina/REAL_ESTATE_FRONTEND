import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

async function check() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
  const users = await User.find();
  console.log("Users in database:");
  console.log(JSON.stringify(users, null, 2));
  await mongoose.disconnect();
}

check().catch(console.error);
