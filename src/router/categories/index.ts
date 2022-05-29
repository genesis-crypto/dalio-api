import Router from "express";
import { getAllCategories } from "../../controller/categories";

const router = Router();

router.get("/", getAllCategories);

export default router;
