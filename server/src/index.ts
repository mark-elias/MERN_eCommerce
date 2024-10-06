import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// load env variables

// initialize the app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// import routes
const userRouter = require("./routes/user");
const { productRouter } = require("./routes/product");

// connect to MongoDB

app.use("/user", userRouter);
app.use("/product", productRouter);

// connect to COMPASS 🧭
// "mongodb+srv://mark7elias:AXw7eWAPd@cluster0.39b8e.mongodb.net/ecommerce";
// connect to ATLAS 🌎
// "mongodb+srv://mark7elias:<db_password>@cluster0.39b8e.mongodb.net/ecommerce";
// ❌ make sure to add name of database to end of URI
// ecommerce
// 🔐
// AXw7eWAPd

const uri =
  "mongodb+srv://mark7elias:AXw7eWAPd@cluster0.39b8e.mongodb.net/ecommerce";

//make connection to our mongoose database
mongoose
  .connect(uri)
  .then(() => {
    console.log("🌱 Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3001, () => console.log("🦻 listening on port 3001"));
