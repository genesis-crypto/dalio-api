import { Request, Response } from "express";
import { getAll } from "../../model/users";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAll();

        return res.status(200).send({ code: 200, data: users });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllUsers };
