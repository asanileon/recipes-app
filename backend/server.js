import express from "express";
import dotenv from "dotenv";
import color from "colors";
import cors from "cors";

//Here is connection with db
import connectDB from "./config/db.js";

//env file initializing
dotenv.config();

//connection with mongodb
connectDB();

//initializing express app
const app = express();

const PORT = process.env.PORT || 7000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
