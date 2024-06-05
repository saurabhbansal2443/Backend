import express from "express"

let   productRouter = express.Router();

import {
    createProduct,
    deleteProduct,
    overrideProduct,
    replaceProduct,
    getOneProduct,
    getAllProduct,
  } from "../controller/product.js";

let router =  productRouter
  .post("/", createProduct)
  .get("/", getAllProduct)
  .get("/:id", getOneProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", overrideProduct)
  .delete("/:id", deleteProduct);

  export default router;

  