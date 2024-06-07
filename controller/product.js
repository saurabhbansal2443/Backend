import Product from "../model/product.js";

let createProduct = (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then((savedProduct) => {
      res.send(savedProduct);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

let getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

let getOneProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

let replaceProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.json(product);
};

let overrideProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).send(product);
};

let deleteProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOneAndDelete(id);
  res.status(201).send(product);
};

export {
  createProduct,
  deleteProduct,
  overrideProduct,
  replaceProduct,
  getOneProduct,
  getAllProduct,
};
