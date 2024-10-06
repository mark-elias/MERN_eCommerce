import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// load env variables
dotenv.config();

// initialize the app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// import routes
const userRouter = require("./routes/user");
const { productRouter } = require("./routes/product");

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("🌱 Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use("/user", userRouter);
app.use("/product", productRouter);

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🦻 Listening... ${PORT}`));
