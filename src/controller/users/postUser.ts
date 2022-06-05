import { Request, Response } from "express";
import { insertUser } from "../../model/users";

const postUser = async (req: Request, res: Response) => {
    try {
        const { nome, image_url } = req.body as {
            nome: string;
            image_url: string;
        };

        if (typeof nome === "undefined" || typeof image_url === "undefined") {
            throw new Error("Missing arguments");
        }

        const created = await insertUser({ nome, image_url });

        return res.status(200).send({ code: 200, data: created });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { postUser };
