import Router from "express";
import { getAllUsers } from "../../controller/users";

const router = Router();

router.get("/", getAllUsers);

export default router;
