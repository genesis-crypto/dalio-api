import Router from "express";
import { getAllBooks } from "../../controller/books";

const router = Router();

router.get("/", getAllBooks);

export default router;
