import express, { NextFunction, Request, Response } from "express";
import ProductModel from "../4-models/product-model";
import logic from "../5-logic/products-logic";

const router = express.Router();

router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await logic.getAllProducts();
        response.json(products);
    }
    catch (err: any) { next(err); }
});

router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(request.body);
        const addedProduct = await logic.addProduct(product);
        response.status(201).json(addedProduct);
    }
    catch (err: any) { next(err); }
});

export default router;