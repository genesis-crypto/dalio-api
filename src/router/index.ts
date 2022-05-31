import Router from "express";
import userRouter from "./users";
import booksRouter from "./books";
import categoriesRouter from "./categories";
import subcategoriesRouter from "./subcategories";

const router = Router();

router.use("/users", userRouter);
router.use("/books", booksRouter);
router.use("/categories", categoriesRouter);
router.use("/subcategories", subcategoriesRouter);

export default router;
