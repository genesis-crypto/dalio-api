import Router from "express";
import { getAllUsers, postUser, deleteUser } from "../../controller/users";

const router = Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.delete("/", deleteUser);

export default router;
