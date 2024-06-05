import express from "express"

let   productRouter = express.Router();

import {
    createUser,
    deleteUser,
    overrideUser,
    replaceUser,
    getOneUser,
    getAllUser,
  } from "../controller/users.js";

let router =  productRouter
  .post("/", createUser)
  .get("/", getAllUser)
  .get("/:id", getOneUser)
  .put("/:id", replaceUser)
  .patch("/:id", overrideUser)
  .delete("/:id", deleteUser);

  export default router;
