import Router from "express";
import {
    getAllCategories,
    getUserCategories,
    updateCategory,
    postCategory,
} from "../../controller/categories";

const router = Router();

router.get("/", getAllCategories);
router.get("/user", getUserCategories);
router.post("/", postCategory);
router.patch("/", updateCategory);

export default router;
