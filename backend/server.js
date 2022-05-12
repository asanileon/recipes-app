import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import color from "colors";
import cors from "cors";

//Here is connection with db
import connectDB from "./config/db.js";

//import Routes
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

//env file initializing
dotenv.config();

//connection with mongodb
connectDB();

//initializing express app
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 7000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
