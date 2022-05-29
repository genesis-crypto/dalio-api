import Router from "express";
import userRouter from "./users";
import categoriesRouter from "./categories";
import booksRouter from "./books";

const router = Router();

router.use("/users", userRouter);
router.use("/categories", categoriesRouter);
router.use("/books", booksRouter);

export default router;
