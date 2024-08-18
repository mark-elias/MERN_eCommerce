import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// everytime we get data to our endpoint,
// we want it to be in json format
app.use(express.json());
// allows us to access our api from our React app
app.use(cors());

//make connection to our mongoose database
mongoose.connect();

app.listen(3001, () => console.log("server started >_<"));
