import Router from "express";
import {
    getAllCategories,
    getUserCategories,
    postCategory,
} from "../../controller/categories";

const router = Router();

router.get("/", getAllCategories);
router.get("/user", getUserCategories);
router.post("/", postCategory);

export default router;
