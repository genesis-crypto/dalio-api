import { Request, Response } from "express";
import { refactorUser } from "../../model/users";

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id, nome, image_url } = req.body as {
            id: string;
            nome: string;
            image_url: string;
        };

        if (
            typeof id === "undefined" ||
            (typeof nome === "undefined" && typeof image_url === "undefined")
        ) {
            throw new Error("missing arguments");
        }

        const user = await refactorUser({
            id,
            payload: { nome, image_url },
        });

        return res.status(200).send({ code: 200, data: user });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { updateUser };
