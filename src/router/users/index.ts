import Router from "express";
import {
    getAllUsers,
    postUser,
    deleteUser,
    updateUser,
    postUserBook,
} from "../../controller/users";

const router = Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/suggest", postUserBook);

export default router;
