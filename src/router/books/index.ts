import Router from "express";
import { getAllBooks, postBook, updateBook } from "../../controller/books";

const router = Router();

router.get("/", getAllBooks);
router.post("/", postBook);
router.patch("/", updateBook);

export default router;
