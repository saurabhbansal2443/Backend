import fs from "fs";

// let htmlData = fs.readFileSync("./../index.html", "utf8");
let apiData = JSON.parse(fs.readFileSync("/Users/saurabhbansal/Desktop/full stack Web dev /untitled folder/Data.json", "utf-8")).products;

let createProduct = (req, res) => {
    let obj = req.body;
    apiData.push(obj);
    res.send(obj);
  }

  let getAllProduct = (req, res) => {
    res.json(apiData);
  }

  let getOneProduct =  (req, res) => {
    let id = +req.params.id;
    let data = apiData.find((obj) => obj.id === id);
    res.json(data);
  }

  let replaceProduct =  (req, res) => {
    let id = +req.params.id;
    let dataIndex = apiData.findIndex((obj) => obj.id === id);
    apiData.splice(dataIndex, 1, req.body);
    res.json(req.body);
  }

  let overrideProduct =  (req, res) => {
    let id = +req.params.id;
    let dataIndex = apiData.find((obj) => obj.id === id);
    let product = apiData[dataIndex];
    apiData.splice(dataIndex, 1, { ...product, ...req.body });
    res.status(201).send(req.body);
  }

  let deleteProduct = (req, res) => {
    let id = +req.params.id;
    let dataIndex = apiData.find((obj) => obj.id === id);
    
    apiData.splice(dataIndex, 1);
    res.status(201).send({dataIndex : dataIndex});
  }

  export { createProduct , deleteProduct , overrideProduct , replaceProduct , getOneProduct , getAllProduct}