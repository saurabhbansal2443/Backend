import express from "express";
import fs from "fs";

let htmlData = fs.readFileSync("./index.html", "utf8");
let apiData = JSON.parse(fs.readFileSync("./Data.json", "utf-8")).products;

const server = express();

server.use((req, res, next) => {
  // custom middleware and Application middleware
  // console.log(req.method , req.ip , req.hostname , req.port )
  next();
});
// kind of body parser
server.use(express.json()); // built in middleware

// server.use(express.static("public"));

const auth = (req, res, next) => {
  // console.log(req.body)
  // console.log(req.query)
  // if(req.body.password == 123 ){

  //     next();
  // }else{
  //     res.sendStatus(401)
  // }

  next();
};

// server.use(auth)

// API - endpoints - route
// server.get("/",auth , (req, res) => {
//     res.json({type : "get"})
// })

// server.get("/products/:id",auth , (req, res) => {

//     res.json({type : "get" , params  :  req.params })
// })

// server.post("/",auth ,  (req, res) => {
//     res.json({type : "post"})
// })

// server.put("/", (req, res) => {
//     res.json({type : "put"})
// })

// server.patch("/", (req, res) => {
//     res.json({type : "patch"})
// })

// server.delete("/", (req, res) => {
//     res.json({type : "delete"})
// })

// REST ---
// Create API
// creating data
server.post("/products", (req, res) => {
  let obj = req.body;
  apiData.push(obj);
  res.send(obj);
});

/// Read API
server.get("/products", (req, res) => {
  res.json(apiData);
});

server.get("/products/:id", (req, res) => {
  let id = +req.params.id;
  let data = apiData.find((obj) => obj.id === id);
  res.json(data);
});

// Update API
//put is used to replace the whole obj
server.put("/products/:id", (req, res) => {
  let id = +req.params.id;
  let dataIndex = apiData.findIndex((obj) => obj.id === id);
  apiData.splice(dataIndex, 1, req.body);
  res.json(req.body);
});

// It is used to override properties

server.patch("/products/:id", (req, res) => {
  let id = +req.params.id;
  let dataIndex = apiData.find((obj) => obj.id === id);
  let product = apiData[dataIndex];
  apiData.splice(dataIndex, 1, { ...product, ...req.body });
  res.status(201).send(req.body);
});

// Delete

server.delete("/products/:id", (req, res) => {
  let id = +req.params.id;
  let dataIndex = apiData.find((obj) => obj.id === id);
  apiData.splice(dataIndex, 1);
  res.status(201).send();
});

server.listen(8080, () => {
  console.log("Server started ");
});
