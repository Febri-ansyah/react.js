import express from "express";

import {
    getAllProduct,
    createProduct,
    getProductByID,
    updateProduct,
    deleteProduct
} from "../controller/Product.js"

const route = express.Router();

route.get('/', getAllProduct);
route.get('/:id', getProductByID);
route.post('/', createProduct);
route.patch('/:id', updateProduct);
route.delete('/:id', deleteProduct);

export default route;