import express from "express";
import nodemon from "nodemon";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const Connection_URL = Connection_URL;
const PORT = process.env.PORT || 5000;
