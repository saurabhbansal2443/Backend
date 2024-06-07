import express from "express";
import 'dotenv/config';
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";

let server = express()

let userName = process.env.USERNAME ;
let password = process.env.DB_PASSWORD;
let port = process.env.PORT || 8080

console.log(userName , password)

// let mongo = `mongodb+srv://${userName}:${password}@cluster0.mhlurau.mongodb.net/`
// db connection
main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.mhlurau.mongodb.net/`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
} 



server.use(express.json()); 
server.use(cors());
server.use(express.static(path.resolve(__dirname , "./dist")))
server.use("/products", productRouter);
server.use("/users", userRouter);
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname, "dist" , "index.html"))
})
server.listen(port, () => {
  console.log("Server started ");
});
