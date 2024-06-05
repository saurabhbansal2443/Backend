import fs from "fs";

// let htmlData = fs.readFileSync("./../index.html", "utf8");
let apiData = JSON.parse(fs.readFileSync("/Users/saurabhbansal/Desktop/full stack Web dev /untitled folder/Data.json", "utf-8")).users;

let createUser = (req, res) => {
    let obj = req.body;
    apiData.push(obj);
    res.send(obj);
  }

  let getAllUser = (req, res) => {
    res.json(apiData);
  }

  let getOneUser =  (req, res) => {
    let id = +req.params.id;
    let data = apiData.find((obj) => obj.id === id);
    res.json(data);
  }

  let replaceUser=  (req, res) => {
    let id = +req.params.id;
    let dataIndex = apiData.findIndex((obj) => obj.id === id);
    apiData.splice(dataIndex, 1, req.body);
    res.json(req.body);
  }

  let overrideUser =  (req, res) => {
    let id = +req.params.id;
    let dataIndex = apiData.find((obj) => obj.id === id);
    let product = apiData[dataIndex];
    apiData.splice(dataIndex, 1, { ...product, ...req.body });
    res.status(201).send(req.body);
  }

  let deleteUser= (req, res) => {
    let id = +req.params.id;
    let dataIndex = apiData.find((obj) => obj.id === id);
    
    apiData.splice(dataIndex, 1);
    res.status(201).send({dataIndex : dataIndex});
  }

  export { createUser , deleteUser , overrideUser , replaceUser, getOneUser , getAllUser}