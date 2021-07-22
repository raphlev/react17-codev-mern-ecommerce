import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

console.log("CONNECTION_URL="+process.env.CONNECTION_URL);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(
    `Database conneccted successfully on ${conn.connection.host}`.cyan.underline
      .bold
  );
};

export default connectDB;
