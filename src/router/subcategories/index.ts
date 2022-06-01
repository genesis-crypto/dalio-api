import Router from "express";
import {
    postSubcategory,
    updateSubcategory,
    deleteSubcategory,
} from "../../controller/subcategories";

const router = Router();

router.post("/", postSubcategory);
router.patch("/", updateSubcategory);
router.delete("/", deleteSubcategory);

export default router;
