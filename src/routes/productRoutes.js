import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createProduct,
  getProducts
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", authMiddleware, createProduct);
router.get("/", getProducts);

export default router;
