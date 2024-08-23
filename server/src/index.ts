import express from "express";
import cors from "cors";
import mongoose from "mongoose";
//===============================
const app = express();
app.use(express.json());
// allows us to access our api from our React app
app.use(cors());
const home = require("./routes/home");
app.use("/", home);
const userRouter = require("./routes/user");
app.use("/user", userRouter);

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
