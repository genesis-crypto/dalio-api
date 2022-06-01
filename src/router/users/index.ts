import Router from "express";
import {
    getAllUsers,
    postUser,
    deleteUser,
    updateUser,
} from "../../controller/users";

const router = Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.patch("/", updateUser);
router.delete("/", deleteUser);

export default router;
