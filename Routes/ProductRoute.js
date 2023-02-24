const express = require('express');
const createProduct  = require('../Controllers/ProductControllers')

const productRouter = express.Router();

productRouter.route("/product")
    .post(createProduct)

module.exports = productRouter;