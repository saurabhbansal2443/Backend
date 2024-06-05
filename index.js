import express from "express";

import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";

let userName = "saurabhbansal2443"
let password = "bansal123"

const server = express();

server.use(express.json()); 

server.use("/products", productRouter);
server.use("/users", userRouter);

server.listen(8080, () => {
  console.log("Server started ");
});
