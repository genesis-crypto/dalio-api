import Router from "express";
import {
    postSubcategory,
    updateSubcategory,
} from "../../controller/subcategories";

const router = Router();

router.post("/", postSubcategory);
router.patch("/", updateSubcategory);

export default router;
