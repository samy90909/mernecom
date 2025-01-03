import express from 'express'
import { getProducts, updateProduct, createProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

//fetch all the products
router.get("/", getProducts);

//Updates the product
router.put("/:id", updateProduct);

// router.post("/", (req, res) => {
//     res.status(200).json({ message: "POST route is working", body: req.body });
// });



//this is to create products 

router.post("/", createProduct)

//Delete Products
router.delete("/:id", deleteProduct)

export default router;