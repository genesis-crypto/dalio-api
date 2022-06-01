import Router from "express";
import {
    getAllBooks,
    postBook,
    updateBook,
    deleteBook,
} from "../../controller/books";

const router = Router();

router.get("/", getAllBooks);
router.post("/", postBook);
router.patch("/", updateBook);
router.delete("/", deleteBook);

export default router;
