import { Router } from "express";
import { ProductModel } from "../models/products";
import { verifyToken } from "./user";
const router = Router();

// get products for shop page
router.get("/", verifyToken, (_, res) => {
  ProductModel.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/checkout", verifyToken, (req, res) => {});

export { router as productRouter };
