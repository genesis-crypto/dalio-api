import { Request, Response } from "express";
import { removeUser } from "../../model/users";

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.query as {
            id: string;
        };

        if (typeof id === "undefined") {
            throw new Error("missing arguments");
        }

        const user = await removeUser({
            id,
        });

        return res.status(200).send({ code: 200, data: user });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { deleteUser };
