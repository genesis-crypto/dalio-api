import Router from "express";
import {
    getAllCategories,
    getUserCategories,
} from "../../controller/categories";

const router = Router();

router.get("/", getAllCategories);
router.get("/user", getUserCategories);

export default router;
