import Router from "express";
import { postSubcategory } from "../../controller/subcategories";

const router = Router();

router.post("/", postSubcategory);

export default router;
