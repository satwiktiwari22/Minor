import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Chat_App", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
