import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from 'cors'
import userRoute from './route/user.route.js';
const app = express();
app.use(cors())
app.use(express.json());
dotenv.config(); 
// Connect to database


const port = process.env.PORT || 4001;
const DB=process.env.MongoDBURI

try {
  mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  console.log("Connected to Database");
} catch (error) {
  console.log("Error: ", error);
}
// Defining Route
app.use("/book", bookRoute);
app.use("/user", userRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
