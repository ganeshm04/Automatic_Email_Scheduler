import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const options = {
      tls: true,
      ssl: true,
      retryWrites: true,
      maxPoolSize: 10,
      minPoolSize: 5,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4
    };

    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("✅ MongoDB connection established successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectToDB;
