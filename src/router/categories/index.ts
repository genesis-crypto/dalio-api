import Router from "express";
import {
    getAllCategories,
    getUserCategories,
    updateCategory,
    postCategory,
    deleteCategory,
} from "../../controller/categories";

const router = Router();

router.get("/", getAllCategories);
router.get("/user", getUserCategories);
router.post("/", postCategory);
router.patch("/", updateCategory);
router.delete("/", deleteCategory);

export default router;
