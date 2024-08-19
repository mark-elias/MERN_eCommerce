import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// everytime we get data to our endpoint,
// we want it to be in json format
app.use(express.json());
// allows us to access our api from our React app
app.use(cors());

// mongodb+srv://mark7elias:<password>@cluster0.39b8e.mongodb.net/

// AXw7eWAPd
const uri = "mongodb+srv://mark7elias:AXw7eWAPd@cluster0.39b8e.mongodb.net/";

//make connection to our mongoose database
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3001, () => console.log("server started >_<"));
